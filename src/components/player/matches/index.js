import React, { useCallback } from 'react'
import SectionTitle from '../../section-title'
import PlayerMatchItem from './player-match-item'
import './style.scss'

export default function PlayerMatches({matches, player}) {

  const playedAsAStarter = useCallback((match) => {
    return match.lineUp.includes(player.name)
  }, [player])

  const playedAsAReserve = useCallback((match) => {
    let played = false
    if(match.substitutions) {
      match.substitutions.forEach(subs => {
        if(subs.in === player.name) {
          played = true
        }
      })
    }
    return played
  }, [player])

  return (
    <section className="player-matches">
        <SectionTitle title="Jogos" color="blue"/>
        <ul className="matches-list">
            {Object.keys(matches).map(id => {
              if(playedAsAStarter(matches[id]) || playedAsAReserve(matches[id])) {
                return <PlayerMatchItem key={id} matchId={id} match={matches[id]} player={player}/>
              }
              return null
            }).reverse()}
        </ul>
    </section>
  )
}