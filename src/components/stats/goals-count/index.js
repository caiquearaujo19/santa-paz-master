import React from 'react'
import SectionTitle from '../../section-title'
import './style.scss'

export default function GoalsCount(props) {

  const numbers = props["goals"]

  const renderNumber = (item, index) => {
    return(
      <div key={index} className="goals-count__numbers__item">
        <div className="goals-count__numbers__item__value">{item.value}</div>
        <div className="goals-count__numbers__item__title">{item.title}</div>
      </div>
    )
  }

  return (
    <article className="goals-count">
      <SectionTitle title="Gols"/>
      <div className="goals-count__numbers">
        {numbers.length ? numbers.map((item, i) => (renderNumber(item, i))): null}
      </div>
    </article>
  )
}