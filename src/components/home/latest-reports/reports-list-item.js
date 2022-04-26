import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default function ReportsListItem({reportId, data}) {
  return (
    <li className="reports-list-item">
      <Link className="reports-list-item__content" to={`/report/${reportId}`}>
        <div className="reports-list-item__content__info">
          <div className="reports-list-item__content__info__title">{data.title}</div>
          <div className="reports-list-item__content__info__description">{data.content}</div>
        </div>
        <div className="reports-list-item__content__image">
          <div className="reports-list-item__content__image__container" style={{backgroundImage: `url(${data.image})`}} />
        </div>
      </Link>
    </li>
  )
}