import React, { useState, useEffect } from "react"
import CardFirst from "./CardFirst"
import CardSecond from "./CardSecond"
import CardThird from "./CardThird"
import CardMain from "./CardMain"
import { fetchImageOfTheDay } from "../utils/fetchApi"
import { useStateValue } from "../utils/StateProvider"

function CardHolder() {
  // eslint-disable-next-line no-unused-vars
  const [{ category }, dispatch] = useStateValue()
  const [nextCard, setNextCard] = useState(1)
  const [imageOfTheDay, setImageOfTheDay] = useState([])
  let allCategories

  if (category.length > 0) {
    allCategories = category.toString().split(",")
  }

  useEffect(() => {
    fetchImageOfTheDay().then((image) => {
      if (image.hits) {
        setImageOfTheDay(image.hits)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  switch (nextCard) {
    case 1:
      return <CardFirst setNextCard={setNextCard} />
    case 2:
      return <CardSecond setNextCard={setNextCard} />
    case 3:
      return <CardThird setNextCard={setNextCard} />
    default:
      return (
        <CardMain
          setNextCard={setNextCard}
          imageOfTheDay={imageOfTheDay}
          allCategories={allCategories}
        />
      )
  }
}

export default CardHolder
