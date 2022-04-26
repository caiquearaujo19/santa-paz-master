import React from 'react'
import SectionTitle from '../../section-title'
import './style.scss'

export default function Goalkeeper({matches, cleanSheets, goalsConceded}) {

    const renderItem = (value, title) => {
        return(
            <div className="goalkeeper__numbers__item">
                <div className="goalkeeper__numbers__item__value">{value}</div>
                <div className="goalkeeper__numbers__item__title">{title}</div>
            </div>
        )
    }

    return (
        <section className="goalkeeper">
            <SectionTitle title="Como goleiro"/>
            <div className="goalkeeper__numbers">
                {renderItem(matches, "Jogos")}
                {renderItem(cleanSheets, "Sem sofrer gol")}
                {renderItem(goalsConceded, "Gols sofridos")}
            </div>
        </section>
    )
}