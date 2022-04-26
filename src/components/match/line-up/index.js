import React from 'react'
import SectionTitle from '../../section-title'
import './style.scss'

export default function LineUp({players}) {

    const positions = ["GOL", "LAD", "ZAG", "ZAG", "LAE", "VOL", "VOL", "MEI", "MEI", "ATA", "ATA"]

    return (
        <section className="line-up">
            <SectionTitle title="Escalação" color="blue"/>
            <ul className="line-up__list">
                {players && players.length ? players.map((player, i) => (
                    <li className="line-up__list__item" key={player}>
                        <div className="line-up__list__item__position">{positions[i]}</div>
                        {player}
                    </li>
                )) : null}
            </ul>
        </section>
    )
}