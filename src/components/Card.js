import React, { useState } from "react"
import globeDesktop from "../assets/globe-desktop.jpg"
import globeMobile from "../assets/globe-mobile.jpg"
import { AiOutlineRight } from "react-icons/ai"
import { saveToLocalStorage } from "../utils/helpers"
import { useStateValue } from "../utils/StateProvider"
import TopicsButton from "./TopicsButton"

function Card() {
  const [{ cardNumber }, dispatch] = useStateValue([])
  const [valueOfName, setValueOfName] = useState("")
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

  saveToLocalStorage("name", valueOfName)
  saveToLocalStorage("topics", chosenTopics)

  const saveTopics = (e) => {
    e.target.style.opacity = 0.7
    const chosenTopic = e.target.innerText
    if (chosenTopics.length < 5) {
      setChosenTopics((topic) => [...topic, chosenTopic])
    }
  }

  const onNameChange = (e) => {
    setValueOfName(e.target.value)
  }

  const nextCard = () => {
    dispatch({
      type: "NEXT_CARD",
      cardNumber: cardNumber + 1,
    })
  }

  const displayCardSection = () => {
    if (cardNumber === 1) {
      return (
        <>
          <span className="card__span">What's your name?</span>
          <input
            className="rightSide__input"
            type="text"
            name="name"
            id="name"
            onChange={onNameChange}
          />
        </>
      )
    } else if (cardNumber === 2) {
      return (
        <>
          <span className="card__span">
            Choose the topics for your news feed
          </span>
          <div className="cardFirst__topics">
            {newsCategories.map((item) => (
              <TopicsButton key={item} topic={item} saveTopics={saveTopics} />
            ))}
          </div>
        </>
      )
    }
  }

  if (cardNumber === 3) {
    return (
      <div className="card cardThird">
        <h2>You are all set!</h2>
        <button className="cardThird__next" onClick={nextCard}>
          Take me to my dashboard
          <AiOutlineRight className="icon" />
        </button>
      </div>
    )
  }

  return (
    <div className="card cardFirst">
      <div className="cardFirst__left">
        <img
          className="cardFirst__image image--desktop"
          src={globeDesktop}
          alt="small globe in a hand"
        />
        <img
          className="cardFirst__image image--mobile"
          src={globeMobile}
          alt="small globe in a hand"
        />
      </div>
      <div className="cardFirst__right rightSide">
        <h2 className="rightSide__title">Welcome to your dashboard</h2>
        {displayCardSection()}
        <button className="cardFirst__next" onClick={nextCard}>
          next
          <AiOutlineRight className="icon" />
        </button>
      </div>
    </div>
  )
}

export default Card
