import React, { useState } from "react"
import globeDesktop from "../assets/globe-desktop.jpg"
import globeMobile from "../assets/globe-mobile.jpg"
import { AiOutlineRight } from "react-icons/ai"
import { saveToLocalStorage } from "../utils/helpers"

const CardFirst = ({ setNextCard }) => {
  const [valueOfName, setValueOfName] = useState("")

  const nextCard = () => {
    setNextCard(2)
  }

  saveToLocalStorage("name", valueOfName)

  const onChange = (e) => {
    setValueOfName(e.target.value)
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
        <span className="card__span">What's your name?</span>
        <input
          className="rightSide__input"
          type="text"
          name="name"
          id="name"
          onChange={onChange}
        />
        <button className="cardFirst__next" onClick={nextCard}>
          next
          <AiOutlineRight className="icon" />
        </button>
      </div>
    </div>
  )
}

export default CardFirst
