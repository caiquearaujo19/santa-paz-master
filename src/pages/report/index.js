import React, {useState, useEffect} from 'react'
import MetaTags from 'react-meta-tags';
import TopBar from '../../components/top-bar'
import { useParams } from "react-router-dom"
import firebaseDb from '../../firebase'
import './style.scss'

export default function ReportScreen() {

  const params = useParams()
  const [report, setReport] = useState({})

  useEffect(() => {
    firebaseDb.child(`reports/${params.id}`).once('value').then(snapshot => {
      if(snapshot.val() !== null) {
        setReport(snapshot.val())
      }
    })
  }, [params.id])

  return (
    <article className="report-screen">
      <MetaTags>
        <title>{report.title}</title>
        <meta id="meta-description" name="description" content={report.content} />
        <meta id="og-title" property="og:title" content={report.title} />
        <meta id="og-image" property="og:image" content={report.image} />
      </MetaTags>
      <TopBar/>
      <section className="report-screen__image" style={{backgroundImage: `url(${report.image})`}} />
      <article className="report-screen__content">
        <div className="report-screen__content__title">{report.title}</div>
        <div className="report-screen__content__date">{report.date}</div>
        <section className="report-screen__content__text">{report.content}</section>
      </article>
    </article>
  )
}