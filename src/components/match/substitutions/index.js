import React from 'react'
import SectionTitle from '../../section-title'
import {ReactComponent as InIcon} from '../../../assets/icons/sub-in.svg'
import {ReactComponent as OutIcon} from '../../../assets/icons/sub-out.svg'
import './style.scss'

export default function Substitutions({list}) {
    return (
        <section className="substitutions">
            <SectionTitle title="Substituições" color="blue"/>
            <ul className="substitutions__list">
                {list && list.length ? list.map((sub, i) => (
                    <li className="substitutions__list__item" key={i}>
                        <div className="substitutions__list__item__icon"><InIcon /></div>{sub.in}
                        <span className='substitutions__list__item__divider'></span>
                        <div className="substitutions__list__item__icon"><OutIcon /></div>{sub.out}
                    </li>
                )) : null}
            </ul>
        </section>
    )
}