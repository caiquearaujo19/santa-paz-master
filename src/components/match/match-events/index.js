import React from 'react'
import './style.scss'

import SectionTitle from '../../section-title'
import MatchEventsListItem from './match-events-list-item'

export default function MatchEvents({scorers, assists}) {

  return (
    <section className="match-events">
      <SectionTitle title="Gols e assistências" color="blue"/>
      <ul className="match-events__list">
        {Object.keys(scorers).map(id => (
          <MatchEventsListItem
            key={id}
            scorer={scorers[id]}
            assist={assists !== undefined ? assists[id] : null}/>
        ))}
      </ul>
    </section>
  )
}