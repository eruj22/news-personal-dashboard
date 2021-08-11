import React from 'react'
import PropTypes from "prop-types"

function ImageOfTheDay({ imageOfTheDay }) {
  const { webformatURL, largeImageURL } = imageOfTheDay

  return (
    <a href={largeImageURL} className="part part-pic" target="_blank" rel="noreferrer">
      <img src={webformatURL} alt="top of the day" />
    </a>
  )
} 

ImageOfTheDay.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
}

export default ImageOfTheDay
