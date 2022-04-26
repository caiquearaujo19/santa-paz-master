import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ArrowRightIcon from '../../../assets/icons/right.svg'
import SectionTitle from '../../section-title'
import PlayersRankingListItem from './players-ranking-list-item'
import {
  orderListByGoals,
  orderListByAssists,
  orderListByCleanSheets
} from '../../../utils/js-utils/sorters'
import { useAppStore } from '../../../AppStore'
import './style.scss'

export default function PlayersRanking({title, icon, list, seeMorePath}) {

  const [listPreview, setListPreview] = useState([])

  const {year} = useAppStore()

  useEffect(() => {
    switch(title) {
      case "Artilheiros":
        list.sort(orderListByGoals(year))
        break
      case "Assistências":
        list.sort(orderListByAssists(year))
        break
      case "Goleiros":
        list.sort(orderListByCleanSheets(year))
        break
      default:
        break
    }
    setListPreview(list.slice(0, 3))
  }, [year, list, title])

  return (
    <article className="players-ranking">
      <SectionTitle title={title} color="blue" icon={icon}/>
      <ul className="players-ranking__list">
        {listPreview.map((item, i) => (
          <PlayersRankingListItem key={i} item={item} context={title} ranking={i + 1}/>
        ))}
      </ul>
      <footer className="players-ranking__footer">
        <Link className="players-ranking__footer__btn-see-more" to={seeMorePath}>
          Ver todos
          <img className="players-ranking__footer__btn-see-more__icon" src={ArrowRightIcon} alt="Ver todos"/>
        </Link>
      </footer>
    </article>
  )
}