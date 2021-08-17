import React from "react"
import PropTypes from "prop-types"
import { weatherIcon } from "../utils/helpers"
function LocalWeather({ localWeather }) {
  console.log(localWeather)
  const { name, country } = localWeather.location
  const { weather_code, temperature, weather_descriptions } =
    localWeather.current

  const icon = weatherIcon(weather_code)

  return (
    <div className="part weather">
      <img src={icon} alt="" />
      <p className="weather__temperature">{temperature}°C</p>
      <p>{weather_descriptions[0]}</p>
      <p className="weather__location">
        {name},<br />
        {country}
      </p>
    </div>
  )
}

LocalWeather.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  weather_code: PropTypes.number,
  temperature: PropTypes.number,
  weather_descriptions: PropTypes.array,
}

export default LocalWeather
