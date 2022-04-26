import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

import PlayerAvatar from '../../player-avatar'

export default function MatchEventsListItem({scorer, assist}) {

  return (
    <li className="match-events-list-item">
      <Link className="match-events-list-item__content" to={scorer.id ? `/player/${scorer.id}` : '#'}>
        <PlayerAvatar photo={scorer.photo} size={40}/>
        <div className="match-events-list-item__content__info">
          <div className="match-events-list-item__content__info__scorer-name">{scorer.name}</div>
          {assist !== null && assist !== undefined ?
            <div className="match-events-list-item__content__info__assist-name">Assistência: {assist.name}</div>
          : null}
        </div>
      </Link>
    </li>
  )
}