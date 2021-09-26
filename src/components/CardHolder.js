import React from "react"
import CardMain from "./CardMain"
import { useStateValue } from "../utils/StateProvider"
import Card from "./Card"
import { getFromLocalStorage } from "../utils/helpers"

function CardHolder() {
  // eslint-disable-next-line no-unused-vars
  const [{ cardNumber }, dispatch] = useStateValue()
  let allCategories = []
  const getTopicsFromLocalStorage = getFromLocalStorage("topics")

  if (getTopicsFromLocalStorage.length > 0) {
    allCategories = getTopicsFromLocalStorage.toString().split(",")
  }

  if (getTopicsFromLocalStorage.length === 0) {
    allCategories = ["general"]
  }

  if (cardNumber === 4) {
    return <CardMain allCategories={allCategories} />
  }
  return <Card />
}

export default CardHolder
