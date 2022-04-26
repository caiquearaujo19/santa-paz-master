import React from 'react'
import './style.scss'

export default function PlayerAvatar({photo, size, ranking}) {
  return (
    <div
      className={ranking ? `player-avatar--${ranking}` : 'player-avatar'}
      style={{
        backgroundImage: `url(${photo})`,
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      {ranking ? <div className="player-avatar__ranking">{ranking}º</div> : null}
    </div>
  )
}