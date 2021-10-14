import React, { useState, useEffect } from "react"
import CardMain from "./CardMain"
import { useStateValue } from "../utils/StateProvider"
import Card from "./Card"
import { getFromLocalStorage } from "../utils/helpers"

function CardHolder() {
  // eslint-disable-next-line no-unused-vars
  const [{ cardNumber }, dispatch] = useStateValue()
  const [allCategories, setAllCategories] = useState(["general"])
  const getTopicsFromLocalStorage = getFromLocalStorage("topics")

  useEffect(() => {
    if (getTopicsFromLocalStorage.length > 0) {
      setAllCategories(getTopicsFromLocalStorage.toString().split(","))
    }
    // eslint-disable-next-line
  }, [cardNumber])

  if (cardNumber === 4) {
    return <CardMain allCategories={allCategories} />
  }
  return <Card />
}

export default CardHolder
