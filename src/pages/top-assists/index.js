import React, {useState, useEffect} from 'react'
import TopBar from '../../components/top-bar'
import SectionTitle from '../../components/section-title'
import {ReactComponent as AssistsIcon} from '../../assets/icons/assists.svg'
import PlayersRankingListItem from '../../components/stats/players-ranking/players-ranking-list-item'
import firebaseDb from '../../firebase'
import {orderListByAssists} from '../../utils/js-utils/sorters'
import {useAppStore} from '../../AppStore'
import './style.scss'

export default function TopAssistsScreen() {
  
  const title = "Assistências"
  const icon = <AssistsIcon className="section-title__icon"/>
  const [topAssists, setTopAssists] = useState({})

  const {year} = useAppStore()

  useEffect(() => {
    firebaseDb.child('players').on('value', snapshot => {
      if(snapshot.val !== null) {
        let players = snapshot.val()
        let assistsList = []
        Object.keys(players).forEach(id => {
          let assist = players[id]
          if(assist[year] && assist[year].assists > 0) {
            assistsList.push(
              {
                id: id,
                ...assist
              }
            )
          }
        })
        assistsList.sort(orderListByAssists(year))
        setTopAssists(assistsList)
      }
    })
  }, [year])

  return (
    <article className="top-assists-screen">
      <TopBar />
      <header className="top-assists-screen__header">
        <SectionTitle title={title} color="blue" icon={icon}/>
      </header>
      <ul className="top-assists-screen__list">
        {Object.keys(topAssists).map(id => (
          <PlayersRankingListItem key={id} item={topAssists[id]} context={title}/>
        ))}
      </ul>
    </article>
  )
}