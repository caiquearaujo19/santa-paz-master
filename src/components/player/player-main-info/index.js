import React, {useState, useEffect} from 'react'
import PlayerAvatar from '../../player-avatar'
import { useAppStore } from '../../../AppStore'
import './style.scss'

export default function PlayerMainInfo({player}) {

  const [numbers, setNumbers] = useState([])

  const {year, yearList, changeYear} = useAppStore()

  useEffect(() => {
    setNumbers([
      {
        value: player[year] ? player[year].matches : 0,
        title: "Jogos"
      },
      {
        value: player[year] ? player[year].goals : 0,
        title: "Gols"
      },
      {
        value: player[year] ? player[year].assists : 0,
        title: "Assist."
      }
    ])
  }, [player, year])

  const renderNumber = (item, index) => {
    return (
      <div key={index} className="player-main-info__numbers__item">
        <div className="player-main-info__numbers__item__value">{item.value}</div>
        <div className="player-main-info__numbers__item__title">{item.title}</div>
      </div>
    )
  }

  return (
    <section className="player-main-info">
      <select className="player-main-info__year-select" value={year} onChange={(e) => changeYear(e.target.value)}>
        {yearList.map(y => player[y] ? <option key={y} value={y}>{y}</option> : null)}
      </select>
      <div className='player-main-info__avatar'>
        <PlayerAvatar photo={player.photo} size={70}/>
      </div>
      <div className="player-main-info__name">{player.name}</div>
      <div className="player-main-info__numbers">
        {numbers.map((item, i) => (renderNumber(item, i)))}
      </div>
    </section>
  )
}