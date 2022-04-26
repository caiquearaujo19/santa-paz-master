import React from 'react'
import { useHistory } from "react-router-dom"
import './style.scss'

import TopBarButton from './top-bar-button'
import backIcon from '../../assets/icons/back.svg'

export default function TopBar({actions}) {

  const history = useHistory();

  const onBack = () => {
    history.goBack()
  }

  return (
    <div className="top-bar">
      <TopBarButton icon={backIcon} action={onBack}/>
      {actions !== undefined ?
        <div className="top-bar__actions">
          {actions}
        </div> : null
      }
    </div>
  )
}