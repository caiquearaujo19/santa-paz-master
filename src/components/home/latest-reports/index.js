import React from 'react'
import SectionTitle from '../../section-title'
import ReportsListItem from './reports-list-item'
import './style.scss'

export default function LatestReports({reports}) {
  return (
    <section className="latest-reports">
      <SectionTitle title="Últimos informes" color="blue"/>
      <ul className="latest-reports__list">
        {Object.keys(reports).reverse().map(id => (
          <ReportsListItem key={id} reportId={id} data={reports[id]}/>
        ))}
      </ul>
    </section>
  )
}