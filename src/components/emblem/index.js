import React from 'react'
import './style.scss'

import {ReactComponent as Emblem0} from '../../assets/emblems/emblem-00.svg'
import {ReactComponent as Emblem1} from '../../assets/emblems/emblem-01.svg'
import {ReactComponent as Emblem2} from '../../assets/emblems/emblem-02.svg'
import {ReactComponent as Emblem3} from '../../assets/emblems/emblem-03.svg'
import {ReactComponent as Emblem4} from '../../assets/emblems/emblem-04.svg'
import {ReactComponent as Emblem5} from '../../assets/emblems/emblem-05.svg'
import {ReactComponent as Emblem6} from '../../assets/emblems/emblem-06.svg'
import EmblemColor from '../../assets/emblems/emblem-color.png'
import EmblemWhite from '../../assets/emblems/emblem-white.png'

const shapes = [
  <Emblem0 />,
  <Emblem1 />,
  <Emblem2 />,
  <Emblem3 />,
  <Emblem4 />,
  <Emblem5 />,
  <Emblem6 />
]

export default function Emblem({shape, colorful}) {
  return (
    shape !== undefined ?
      <span className={colorful ? 'emblem emblem--colorful' : 'emblem'}>
        {shapes[shape]}
      </span> : <img className="emblem" src={colorful ? EmblemColor : EmblemWhite} alt="Santa Paz Master"/>
    )
}