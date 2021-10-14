import React from "react"
import PropTypes from "prop-types"
import { weatherIcon } from "../utils/helpers"
import sunny from "../assets/sunny.png"
function LocalWeather({ localWeather }) {
  if (localWeather.success === false) {
    return (
      <div className="centerText part weather">
        There is an error with displaying weather. Here you have a sun for
        brightening your day.
        <img src={sunny} alt="sun is shining bright" />
      </div>
    )
  }

  const { name, country } = localWeather.location
  const { weather_code, temperature, weather_descriptions } =
    localWeather.current

  const icon = weatherIcon(weather_code)

  return (
    <div className="part weather">
      <div className="weather__container">
        <img className="weather__image" src={icon} alt="" />
        <div className="weather__text">
          <p className="weather__temperature">{temperature}°C</p>
          <p>{weather_descriptions[0]}</p>
          <p className="weather__location">
            {name},<br />
            {country}
          </p>
        </div>
      </div>
    </div>
  )
}

LocalWeather.propTypes = {
  localWeather: PropTypes.object.isRequired,
}

export default LocalWeather
