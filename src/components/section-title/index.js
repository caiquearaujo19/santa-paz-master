import React from 'react'
import './style.scss'

export default function SectionTitle({title, color, icon}) {
  return (
    <div className={color === 'blue' ? 'section-title section-title--blue' : 'section-title'}>
      {title} {icon !== undefined ? icon : null}
    </div>
  )
}