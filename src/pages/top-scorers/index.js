import React, {useState, useEffect} from 'react'
import TopBar from '../../components/top-bar'
import SectionTitle from '../../components/section-title'
import {ReactComponent as ScorersIcon} from '../../assets/icons/scorers.svg'
import PlayersRankingListItem from '../../components/stats/players-ranking/players-ranking-list-item'
import firebaseDb from '../../firebase'
import {orderListByGoals} from '../../utils/js-utils/sorters'
import {useAppStore} from '../../AppStore'
import './style.scss'

export default function TopScorersScreen() {

  const title = "Artilheiros"
  const icon = <ScorersIcon className="section-title__icon"/>
  const [topScorers, setTopScorers] = useState({})

  const {year} = useAppStore()

  useEffect(() => {
    firebaseDb.child('players').on('value', snapshot => {
      if(snapshot.val !== null) {
        let players = snapshot.val()
        let scorersList = []
        Object.keys(players).forEach(id => {
          let scorer = players[id]
          if(scorer[year] && scorer[year].goals > 0) {
            scorersList.push(
              {
                id: id,
                ...scorer
              }
            )
          }
        })
        scorersList.sort(orderListByGoals(year))
        setTopScorers(scorersList)
      }
    })
  }, [year])

  return (
    <article className="top-scorers-screen">
      <TopBar />
      <header className="top-scorers-screen__header">
        <SectionTitle title={title} color="blue" icon={icon}/>
      </header>
      <ul className="top-scorers-screen__list">
        {Object.keys(topScorers).map(id => (
          <PlayersRankingListItem key={id} item={topScorers[id]} context={title}/>
        ))}
      </ul>
    </article>
  )
}