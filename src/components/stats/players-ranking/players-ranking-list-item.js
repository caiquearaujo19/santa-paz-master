import React from 'react'
import {Link} from 'react-router-dom'
import { useAppStore } from '../../../AppStore'
import PlayerAvatar from '../../player-avatar'
import './players-ranking-list-item.scss'

export default function PlayersRankingListItem({item, context, ranking}) {

  const {year} = useAppStore()

  return (
    <li className="players-ranking-list-item">
      <Link className="players-ranking-list-item__content" to={`/player/${item.id}`}>
        <PlayerAvatar size={40} photo={item.photo} ranking={ranking}/>
        <div className="players-ranking-list-item__content__name">{item.name}</div>
        {
          context === "Goleiros" ?
            <div className="players-ranking-list-item__content__value">
              <span className='label'>JG:</span>
              <span>{item[year] ? item[year].goalkeeper?.matches : null}</span>
              <span className='label'>SG:</span>
              <span>{item[year] ? item[year].goalkeeper?.cleanSheets : null}</span>
              <span className='label'>GS:</span>
              <span>{item[year] ? item[year].goalkeeper?.goalsConceded : null}</span>
            </div>
          :
            <div className="players-ranking-list-item__content__value">
              { item[year] ?context === "Artilheiros" ? item[year].goals : item[year].assists : null }
            </div>
        }
      </Link>
    </li>
  )
}