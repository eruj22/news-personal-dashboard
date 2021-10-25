import React, { useState, useEffect } from "react"
import CardMain from "./CardMain"
import { useStateValue } from "../utils/StateProvider"
import Card from "./Card"
import { getFromLocalStorage } from "../utils/helpers"

function CardHolder({ userLocation }) {
  // eslint-disable-next-line no-unused-vars
  const [{ cardNumber }, dispatch] = useStateValue()
  const [allCategories, setAllCategories] = useState(["general"])
  const getTopicsFromLocalStorage = getFromLocalStorage("topics")
  const [currentUserCity, setCurrentUserCity] = useState("")
  const { latitude, longitude } = userLocation
  const locationApiKey = process.env.REACT_APP_API_KEY_LOCATION
  const locationApiUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${locationApiKey}`

  useEffect(() => {
    if (getTopicsFromLocalStorage.length > 0) {
      setAllCategories(getTopicsFromLocalStorage.toString().split(","))
    }

    if (userLocation) {
      fetch(locationApiUrl)
        .then((response) => response.json())
        .then((result) =>
          setCurrentUserCity(result.features[0].properties.city)
        )
        .catch((error) => console.log("location must be chosen"))
    }

    // eslint-disable-next-line
  }, [cardNumber, userLocation])

  if (cardNumber === 4) {
    return (
      <CardMain
        allCategories={allCategories}
        currentUserCity={currentUserCity}
      />
    )
  }
  return <Card />
}

export default CardHolder
