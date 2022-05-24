import React from 'react'
import {Link} from 'react-router-dom'
import Emblem from '../../emblem'
import {ReactComponent as InIcon} from '../../../assets/icons/sub-in.svg'
import {ReactComponent as OutIcon} from '../../../assets/icons/sub-out.svg'
import {ReactComponent as ScorersIcon} from '../../../assets/icons/scorers.svg'
import {ReactComponent as AssistsIcon} from '../../../assets/icons/assists.svg'
import {ReactComponent as GoalkeepersIcon} from '../../../assets/icons/goalkeepers.svg'
import './style.scss'

export default function PlayerMatchItem({matchId, match, player}) {

  const adv = match.away ? 'homeTeam' : 'awayTeam'
  let team = match.away ? 'awayTeam' : 'homeTeam'
  const goalsTeam = match.away ? match.awayTeam.goals : match.homeTeam.goals
  const goalsAdversary = !match.away ? match.awayTeam.goals : match.homeTeam.goals

  const enteredTheMatch = () => {
    let r = false
    if(match.substitutions) {
      match.substitutions.forEach(sub => {
        if (sub.in === player.name) {
          r = true
        }
      })
    }

    if(r) {
      return (
        <div className='player-match-item__content__events__item'>
          <InIcon />
        </div>
      )
    }
  }

  const wasGoalkeeper = () => {
    if(match.lineUp[0] === player.name) {
      return (
        <div className='player-match-item__content__events__item'>
          <GoalkeepersIcon />
        </div>
      )
    }
  }

  const scoredAGoal = () => {
    let scorers = match[team].scorers
    let r = false
    let count = 0
    if(scorers) {
      scorers.forEach(scr => {
        if (scr.name === player.name) {
          r = true
          count++
        }
      })
    }

    if(r) {
      return (
        <div className='player-match-item__content__events__item'>
          <ScorersIcon />
          {count > 1 ? <span className='event-counter'>{count}</span> : null}
        </div>
      )
    }
  }

  const gaveAssistance = () => {
    let assists = match[team].assists
    let r = false
    let count = 0
    if(assists) {
      assists.forEach(ass => {
        if(ass.name === player.name) {
          r = true
          count++
        }
      })
    }

    if(r) {
      return (
        <div className='player-match-item__content__events__item'>
          <AssistsIcon />
          {count > 1 ? <span className='event-counter'>{count}</span> : null}
        </div>
      )
    }
  }

  const leftTheMatch = () => {
    let r = false;
    if(match.substitutions) {
      match.substitutions.forEach(sub => {
        if (sub.out === player.name) {
          r = true
        }
      })
    }
    
    if(r) {
      return (
        <div className='player-match-item__content__events__item'>
          <OutIcon />
        </div>
      )
    }
  }

  return (
    <li className="player-match-item">
      <Link className="player-match-item__content" to={`/match/${matchId}`}>
        <div className="player-match-item__content__team-emblem">
          <Emblem shape={match[adv].emblemShape} colorful={true}/>
        </div>
        <div className="player-match-item__content__match-info">
          <div className='player-match-item__content__match-info__adversary-name'>
            {match[adv].name}
          </div>
          <div className='player-match-item__content__match-info__infos'>
            <div className={`player-match-item__content__match-info__infos__result ${
              goalsTeam === goalsAdversary ? 'player-match-item__content__match-info__infos__result--draw' :
              goalsTeam > goalsAdversary ? 'player-match-item__content__match-info__infos__result--win' :
              'player-match-item__content__match-info__infos__result--lose'
            }`}>
              {match.homeTeam.goals} - {match.awayTeam.goals}
            </div>
            <div className='player-match-item__content__match-info__infos__place'>
              {match.away ? 'Fora' : 'Casa'}
            </div>
            <div className='player-match-item__content__match-info__infos__date'>
              {match.date}
            </div>
          </div>
        </div>
        <div className='player-match-item__content__events'>
          {enteredTheMatch()}
          {wasGoalkeeper()}
          {scoredAGoal()}
          {gaveAssistance()}
          {leftTheMatch()}
        </div>
      </Link>
    </li>
  )
}