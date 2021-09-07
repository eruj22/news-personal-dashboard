import React, { useState, useEffect } from "react"
import CardFirst from "./CardFirst"
import CardSecond from "./CardSecond"
import CardThird from "./CardThird"
import CardMain from "./CardMain"
import { fetchImageOfTheDay } from "../utils/fetchApi"

function CardHolder() {
  const section = "business"
  const urlNewsApi = `https://newsapi.org/v2/top-headlines?country=us&category=${section}&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`

  const [nextCard, setNextCard] = useState(1)

  const [newsSections, setNewsSection] = useState([])
  const [imageOfTheDay, setImageOfTheDay] = useState([])

  const fetchNews = async () => {
    const response = await fetch(urlNewsApi)
      .then((data) => data.json())
      .catch((error) => error)
    return response
  }

  useEffect(() => {
    fetchNews().then((news) => {
      if (news.articles) {
        setNewsSection(news.articles)
      }
    })

    fetchImageOfTheDay().then((image) => {
      if (image.hits) {
        setImageOfTheDay(image.hits)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  switch (nextCard) {
    case 1:
      return <CardFirst setNext={setNextCard} />
    case 2:
      return <CardSecond setNext={setNextCard} />
    case 3:
      return <CardThird setNext={setNextCard} />
    default:
      return (
        <CardMain
          setNext={setNextCard}
          newsSections={newsSections}
          section={section}
          imageOfTheDay={imageOfTheDay}
        />
      )
  }
}

export default CardHolder
