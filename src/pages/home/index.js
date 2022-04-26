import React, {useState, useEffect} from 'react'
import NextMatch from '../../components/home/next-match'
import Loader from '../../components/loader'
import LatestReports from '../../components/home/latest-reports'
import MainTabs from '../../components/main-tabs'
import firebaseDb from '../../firebase'
import './style.scss'

export default function HomeScreen() {

  const [nextMatch, setNextMatch] = useState({})
  const [loadingNextMatch, setLoadingNextMatch] = useState(false)
  const [reports, setReports] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoadingNextMatch(true);
    firebaseDb.child('next-match').on('value', snapshot => {
      if(snapshot.val() !== null) {
        setNextMatch({
          ...snapshot.val()
        });
        setLoadingNextMatch(false);
      }
    })
    firebaseDb.child('reports').on('value', snapshot => {
      if(snapshot.val() !== null) {
        setReports({
          ...snapshot.val()
        })
      }
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <article className="home-screen">
      <NextMatch data={nextMatch} loading={loadingNextMatch}/>
      { loading ?
        <div className='home-screen__loader-container'>
          <Loader />
        </div>
      :
        <div className='home-screen__reports-list'>
          <LatestReports reports={reports}/>
        </div>
      }
      <MainTabs activeTab={0}/>
    </article>
  )
}