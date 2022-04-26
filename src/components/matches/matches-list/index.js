import React from 'react'
import MatchesListItem from './matches-list-item'
import './style.scss'

export default function MatchesList({matches}) {
  return (
    <section>
      <ul className="matches-list">
        {Object.keys(matches).map(id => (
          <MatchesListItem key={id} matchId={id} match={matches[id]} />
        )).reverse()}
      </ul>
    </section>
  )
}