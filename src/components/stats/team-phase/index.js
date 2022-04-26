import React, {useState, useEffect} from 'react'
import SectionTitle from '../../section-title'
import { useAppStore } from '../../../AppStore'
import './style.scss'

export default function TeamPhase({numbers}) {

  const [percentage, setPercentage] = useState(0)
  const [stats, setStats] = useState([])

  const {year, yearList, changeYear} = useAppStore()

  useEffect(() => {
    setStats(numbers ?? [])
  }, [numbers])

  useEffect(() => {
    let result = 0
    if(stats.length && stats[0].value > 0) {
      let points = (stats[1].value * 3) + stats[2].value
      let totalPoints = stats[0].value * 3
      result = (points / totalPoints) * 100
    }
    setPercentage(result.toFixed(0))
  }, [stats])

  const renderNumber = (item, index) => {
    return (
      <div key={index} className="team-phase__numbers__item">
        <div className="team-phase__numbers__item__value">{item.value}</div>
        <div className="team-phase__numbers__item__title">{item.title}</div>
      </div>
    )
  }

  return (
    <article className="team-phase">
      <SectionTitle title="Aproveitamento"/>
      <select className="team-phase__year-select" value={year} onChange={(e) => changeYear(e.target.value)}>
        {yearList.map(y => <option key={y} value={y}>{y}</option>)}
      </select>
      <div className="team-phase__percentage">{percentage}%</div>
      <div className="team-phase__numbers">
        {stats.length ? stats.map((item, i) => (renderNumber(item, i))) : null}
      </div>
    </article>
  )
}