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

function CardMain({ allCategories, currentUserCity }) {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue([])
  const [imageOfTheDay, setImageOfTheDay] = useState([])
  const [getNews, setGetNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [localWeather, setLocalWeather] = useState([])
  const visitorName = getFromLocalStorage("name")
  let urlNewsApi = []
  if (!currentUserCity) {
    currentUserCity = "London"
  }
  const ulrWeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${currentUserCity}&appid=${process.env.REACT_APP_API_KEY_WEATHER}`
  const urlPhotoApi = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_PICTURE}&image_type=photo&order=popular`

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

  const fetchImageOfTheDay = async () => {
    const response = await fetch(urlPhotoApi)
      .then((data) => data.json())
      .catch((error) => console.log(error))
    return response
  }

  const getWeather = async () => {
    const response = await fetch(ulrWeatherApi)
      .then((data) => data.json())
      .catch((error) => console.log(error))
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
      .catch((error) => console.log(error))
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
            src={localWeather && weatherIcon(localWeather.weather[0].id)}
            className="icon"
            alt={
              localWeather &&
              `current weather is ${localWeather.weather[0].description}`
            }
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
