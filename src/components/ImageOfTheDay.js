import React from "react"
import PropTypes from "prop-types"
import { randomNumber } from "../utils/functions"

function ImageOfTheDay({ imageOfTheDay }) {
  const number = randomNumber(20)
  const { webformatURL, largeImageURL } = imageOfTheDay[number]

  return (
    <div className="part part__pic bestPicture">
      <div className="topic__btn technology">picture of the day</div>
      <a href={largeImageURL} target="_blank" rel="noreferrer">
        <img
          className="bestPicture__image"
          src={webformatURL}
          alt="top of the day"
        />
      </a>
    </div>
  )
}

ImageOfTheDay.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
}

export default ImageOfTheDay
