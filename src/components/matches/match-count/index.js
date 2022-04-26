import React, { useEffect, useState } from 'react'
import { useAppStore } from '../../../AppStore'
import './style.scss'

export default function MatchCount({numbers}) {

  const [stats, setStats] = useState([])

  const {year, yearList, changeYear} = useAppStore()

  useEffect(() => {
    setStats([
      {
        title: "Vitórias",
        number: numbers.wins ?? 0,
        color: ['#219653', '#37fa8a']
      },
      {
        title: "Empates",
        number: numbers.draws ?? 0,
        color: ['#828282', '#dbdbdb']
      },
      {
        title: "Derrotas",
        number: numbers.loses ?? 0,
        color: ['#b54343', '#ff8080']
      },
    ])
  }, [numbers])

  return (
    <section className="match-count">
      <div className='match-count__left'>
        <select className="match-count__left__year-select" value={year} onChange={(e) => changeYear(e.target.value)}>
          {yearList.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <div className="match-count__left__matches">{numbers.matches ?? 0} jogos no ano</div>
      </div>
      <div className="match-count__stats">
        {stats.map((stat, i) => (
          <div key={i} className="match-count__stats__item">
            <div className="match-count__stats__item__number" style={{background: `linear-gradient(120deg, ${stat.color[0]} 0%, ${stat.color[1]} 100%)`}}>
              {stat.number}
            </div>
            <div className="match-count__stats__item__title">{stat.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}