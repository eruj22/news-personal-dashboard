import React, { useEffect, useState } from "react"
import { getFromLocalStorage } from "../utils/helpers"
import Settings from "../assets/settings.png"
import { FaSearch } from "react-icons/fa"
import CardNews from "./CardNews"
import ImageOfTheDay from "./ImageOfTheDay"
import LocalWeather from "./LocalWeather"
import { useStateValue } from "../utils/StateProvider"
import { weatherIcon } from "../utils/helpers"

function CardMain({ setNextCard, section, newsSections, imageOfTheDay }) {
  const [{ location }, dispatch] = useStateValue()
  const [isLoading, setIsLoading] = useState(true)
  const [localWeather, setLocalWeather] = useState([])
  const visitorName = getFromLocalStorage("name")

  const ulrWeatherApi = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY_WEATHER}&query=${location}`

  const getWeather = async () => {
    const response = await fetch(ulrWeatherApi)
      .then((data) => data.json())
      .catch((error) => error)
    return response
  }

  const nextCard = () => {
    setNextCard(1)
  }

  console.log(getFromLocalStorage("topics"))

  useEffect(() => {
    getWeather().then((weather) => {
      if (weather) {
        setLocalWeather(weather)
        setIsLoading(false)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <section className="cardMain">
      <header className="cardMain__header">
        <div>
          <img
            src={weatherIcon(localWeather.current.weather_code)}
            className="icon"
            alt=""
          />
          <h1>Good morning, {visitorName ? visitorName : "Unknown"}!</h1>
        </div>
        <div>
          <input type="text" placeholder="search for stories..." />
          <button className="search__btn">
            <FaSearch />
          </button>
        </div>
      </header>
      <div className="card">
        <CardNews
          newsSections={newsSections[4]}
          section={section}
          part={"part-a"}
        />
        <LocalWeather localWeather={localWeather} />
        <ImageOfTheDay imageOfTheDay={imageOfTheDay} />
        <CardNews
          newsSections={newsSections[11]}
          section={section}
          part={"part-b"}
        />
        <CardNews
          newsSections={newsSections[6]}
          section={section}
          part={"part-c"}
        />
        <CardNews
          newsSections={newsSections[7]}
          section={section}
          part={"part-d"}
        />
        <CardNews
          newsSections={newsSections[12]}
          section={section}
          part={"part-e"}
        />
        <button className="part part__setting" onClick={nextCard}>
          <img src={Settings} className="icon" alt="" />
        </button>
      </div>
    </section>
  )
}

export default CardMain
