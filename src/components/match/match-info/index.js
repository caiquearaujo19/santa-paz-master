import React, {useState, useEffect} from 'react'
import './style.scss'

import Emblem from '../../emblem'

export default function MatchInfo({match}) {

  const [adversaryName, setAdversaryName] = useState("")

  useEffect(() => {
    if(match.homeTeam !== undefined) {
      setAdversaryName(match.away ? match.homeTeam.name : match.awayTeam.name)
    }
  }, [match])

  return (
    match.homeTeam !== undefined ?
      <section className="match-info">
        <div className="match-info__emblems">
          <div className="match-info__emblems__home"><Emblem shape={match.homeTeam.emblemShape}/></div>
          <div className="match-info__emblems__result">{match.homeTeam.goals} - {match.awayTeam.goals}</div>
          <div className="match-info__emblems__away"><Emblem shape={match.awayTeam.emblemShape}/></div>
        </div>
        <div className="match-info__info">
        <div className="match-info__info__adversary">{adversaryName}</div>
          <div className="match-info__info__place-and-date">
            <div className="match-info__info__place-and-date__place">{match.away ? 'Fora de casa' : 'Em casa'}</div>
            <div className="match-info__info__place-and-date__date">{match.date}</div>
          </div>
        </div>
      </section>
    : null
  )
}