import React from 'react'
import './style.scss'

export default function TopBarButton({icon, action}) {
  return (
    <div className="top-bar-button" onClick={action}>
      <img src={icon} alt="Ação"/>
    </div>
  )
}