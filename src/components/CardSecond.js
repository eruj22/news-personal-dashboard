import React, { useState } from "react"
import globeDesktop from "../assets/globe-desktop.jpg"
import globeMobile from "../assets/globe-mobile.jpg"
import { AiOutlineRight } from "react-icons/ai"
import { saveToLocalStorage } from "../utils/helpers"
import TopicsButton from "./TopicsButton"

const CardSecond = ({ setNextCard }) => {
  const [chosenTopics, setChosenTopics] = useState([])
  const newsCategories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ]

  const nextCard = () => {
    setNextCard(3)
  }

  const saveTopics = (e) => {
    e.target.style.opacity = 0.7
    const value = e.target.innerText
    if (chosenTopics.length < 5) {
      setChosenTopics((arr) => [...arr, value])
    }
  }

  saveToLocalStorage("topics", chosenTopics)

  return (
    <div className="card cardSecond">
      <div className="cardSecond__left">
        <img
          className="cardSecond__image image--desktop"
          src={globeDesktop}
          alt="small globe in a hand"
        />
        <img
          className="cardSecond__image image--mobile"
          src={globeMobile}
          alt="small globe in a hand"
        />
      </div>
      <div className="cardSecond__right">
        <h2 className="rightSide__title">Welcome to your dashboard</h2>
        <span className="card__span">Choose the topics for your news feed</span>
        <div className="cardSecond__topics">
          {newsCategories.map((item) => (
            <TopicsButton key={item} topic={item} saveTopics={saveTopics} />
          ))}
        </div>
        <button className="cardSecond__next" onClick={nextCard}>
          next
          <AiOutlineRight className="icon" />
        </button>
      </div>
    </div>
  )
}

export default CardSecond
