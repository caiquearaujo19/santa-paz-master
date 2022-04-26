import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg'
import {ReactComponent as MatchesIcon} from '../../assets/icons/matches.svg'
import {ReactComponent as StatsIcon} from '../../assets/icons/stats.svg'

const tabs = [
  {
    id: 0,
    title: 'Início',
    icon: <HomeIcon className="tab__icon"/>,
    path: '/home'
  },
  {
    id: 1,
    title: 'Jogos',
    icon: <MatchesIcon className="tab__icon"/>,
    path: '/matches'
  },
  {
    id: 2,
    title: 'Estatísticas',
    icon: <StatsIcon className="tab__icon"/>,
    path: '/stats'
  }
]

export default function MainTabs({activeTab}) {

  return(
    <nav className="main-tabs">
      {tabs.map(tab => (
        <Link
          key={tab.id}
          to={tab.path}
          className={tab.id === activeTab ? 'tab tab--active' : 'tab'}>
          {tab.icon}
          <div className="tab__title">{tab.title}</div>
        </Link>
      ))}
    </nav>
  )
}
