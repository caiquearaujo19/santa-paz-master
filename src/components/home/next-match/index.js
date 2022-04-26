import React from 'react'
import SectionTitle from '../../section-title'
import Emblem from '../../emblem'
import './style.scss'

export default function NextMatch({data, loading}) {
  return (
    <section className={`next-match${loading ? ' next-match--loading' : ''}`}>
      <SectionTitle title="Próximo jogo"/>
      <div className="next-match__emblems">
        <div className="next-match__emblems__home">{data.adversary ? <Emblem shape={data.away ? data.adversary.emblemShape : undefined}/> : null}</div>
        <div className="next-match__emblems__vs">VS</div>
        <div className="next-match__emblems__away">{data.adversary ? <Emblem shape={!data.away ? data.adversary.emblemShape : undefined}/>: null}</div>
      </div>
      <div className="next-match__info">
        <div className="next-match__info__adversary">{loading ? 'Carregando...' : data.adversary ? data.adversary.name : null}</div>
        {loading ? null : 
          <div className="next-match__info__place-and-date">
            <div className="next-match__info__place-and-date__place">{data.away ? 'Fora de casa' : 'Em casa'}</div>
            <div className="next-match__info__place-and-date__date">{data.date}</div>
          </div>
        }
      </div>
    </section>
  )
}