import React, {useState, useEffect} from 'react'
import TopBar from '../../components/top-bar'
import MatchInfo from '../../components/match/match-info'
import MatchEvents from '../../components/match/match-events'
import LineUp from '../../components/match/line-up'
import { useParams } from "react-router-dom"
import firebaseDb from '../../firebase'
import './style.scss'
import Substitutions from '../../components/match/substitutions'

export default function MatchScreen() {

  const params = useParams()
  const [match, setMatch] = useState({})
  const [scorers, setScorers] = useState({})
  const [assists, setAssists] = useState({})
  const [lineUp, setLineUp] = useState([])
  const [substitutions, setSubstitutions] = useState([])

  useEffect(() => {
    firebaseDb.child(`matches/${params.id}`).once('value').then(snapshot => {
      if(snapshot.val() !== null) {
        setMatch(snapshot.val())
      }
    })
  }, [params.id])

  useEffect(() => {
    if(match.homeTeam) {
      setScorers(match.away ? match.awayTeam.scorers : match.homeTeam.scorers)
      setAssists(match.away ? match.awayTeam.assists : match.homeTeam.assists)
      setLineUp(Object.values(match.lineUp))
      setSubstitutions(match.substitutions)
    }
  }, [match])

  return (
    <article className="match-screen">
      <TopBar/>
      <MatchInfo match={match}/>
      { scorers ? <MatchEvents scorers={scorers} assists={assists}/> : null }
      { lineUp ? <LineUp players={lineUp} /> : null }
      { substitutions ? <Substitutions list={substitutions}/> : null }
    </article>
  )
}