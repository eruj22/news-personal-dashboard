import React, { useEffect, useState } from "react"
import { getFromLocalStorage } from "../utils/helpers"
import Settings from "../assets/settings.png"
import { FaSearch } from "react-icons/fa"
import CardNews from "./CardNews"
import ImageOfTheDay from "./ImageOfTheDay"
import LocalWeather from "./LocalWeather"
import { useStateValue } from "../utils/StateProvider"
import { weatherIcon } from "../utils/helpers"
import Loader from "./Loader"
import { dataForNews } from "../utils/helpers"
import { fetchImageOfTheDay } from "../utils/fetchApi"

function CardMain({ allCategories }) {
  // eslint-disable-next-line no-unused-vars
  const [{ location }, dispatch] = useStateValue([])
  const [imageOfTheDay, setImageOfTheDay] = useState([])
  const [getNews, setGetNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [localWeather, setLocalWeather] = useState([])
  const ulrWeatherApi = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY_WEATHER}&query=${location}`
  const visitorName = getFromLocalStorage("name")
  let urlNewsApi = []

  if (allCategories.length < 5) {
    do {
      allCategories.push(allCategories[0])
    } while (allCategories.length < 5)
  }

  for (let i = 0; i < 5; i++) {
    urlNewsApi.push(
      `https://newsapi.org/v2/top-headlines?country=us&category=${allCategories[i]}&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`
    )
  }

  const getWeather = async () => {
    const response = await fetch(ulrWeatherApi)
      .then((data) => data.json())
      .catch((error) => error)
    return response
  }

  const nextCard = () => {
    dispatch({
      type: "RESET",
    })
  }

  const fetchNews = async () => {
    return await Promise.all([
      fetch(urlNewsApi[0]).then((news) => news.json()),
      fetch(urlNewsApi[1]).then((news) => news.json()),
      fetch(urlNewsApi[2]).then((news) => news.json()),
      fetch(urlNewsApi[3]).then((news) => news.json()),
      fetch(urlNewsApi[4]).then((news) => news.json()),
    ])
      .then((news) => {
        setGetNews(news)
        setIsLoading(false)
      })
      .catch((error) => error)
  }

  useEffect(() => {
    getWeather().then((weather) => {
      if (weather) {
        setLocalWeather(weather)
      }
    })

    fetchImageOfTheDay().then((image) => {
      if (image.hits) {
        setImageOfTheDay(image.hits)
      }
    })

    fetchNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className="cardMain">
      <header className="header">
        <div className="header__greeting">
          <img
            src={weatherIcon(localWeather && localWeather.current.weather_code)}
            className="icon"
            alt=""
          />
          <h1 className="header__title">
            Good morning, {visitorName ? visitorName : "Unknown"}!
          </h1>
        </div>
        <div className="header__inputContainer">
          <input
            className="header__input"
            type="text"
            placeholder="search for stories..."
          />
          <button className="header__btn">
            <FaSearch />
          </button>
        </div>
      </header>
      <div className="cardGrid">
        <LocalWeather localWeather={localWeather} />
        <ImageOfTheDay imageOfTheDay={imageOfTheDay} />
        {dataForNews.map((item) => {
          const { article, section, style, id } = item
          if (id === 0) {
            return (
              <CardNews
                key={id}
                newsSections={getNews[id].articles[article]}
                section={section}
                part={style}
              />
            )
          }
          return (
            <CardNews
              key={id}
              newsSections={getNews[id].articles[article]}
              section={allCategories[section]}
              part={style}
            />
          )
        })}
        <button className="part part__setting" onClick={nextCard}>
          <img src={Settings} className="icon" alt="" />
        </button>
      </div>
    </section>
  )
}

export default CardMain
