import React from "react"
import PropTypes from "prop-types"
import { weatherIcon } from "../utils/helpers"
import sunny from "../assets/sunny.png"
function LocalWeather({ localWeather }) {
  if (localWeather.cod === 401) {
    return (
      <div className="centerText part weather">
        There is an error with displaying weather. Here you have a sun for
        brightening your day.
        <img src={sunny} alt="sun is shining bright" />
      </div>
    )
  }

  const { name, main, weather } = localWeather

  const icon = weatherIcon(localWeather.weather[0].id)

  return (
    <div className="part weather">
      <div className="weather__container">
        <img
          className="weather__image"
          src={icon}
          alt={`current weather in ${name} is ${localWeather.weather[0].description}`}
        />
        <div className="weather__text">
          <p className="weather__temperature">
            {Math.round(main.temp - 273)}°C
          </p>
          <p>{weather[0].description}</p>
          <p className="weather__location">{name}</p>
        </div>
      </div>
    </div>
  )
}

LocalWeather.propTypes = {
  localWeather: PropTypes.object.isRequired,
}

export default LocalWeather
