import React, { useState } from "react";
import globeDesktop from "../assets/globe-desktop.jpg";
import globeMobile from "../assets/globe-mobile.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { saveToLocalStorage } from "../utils/helpers"

const CardSecond = ({ setNext }) => {
  const [ chosenTopics, setChosenTopics ] = useState([])

  const nextCard = () => {
    setNext(3);
  };

  const saveTopics = (e) => {
    const value = e.target.innerText
    if (chosenTopics.length < 5) {
      setChosenTopics(arr => [...arr, value])
    }
  }

  saveToLocalStorage("topics", chosenTopics)

  return (
    <div className="card card2">
      <div className="card2__left">
        <img className="card2__left-img img-desktop" src={globeDesktop} alt="globe" />
        <img className="card2__left-img img-mobile" src={globeMobile} alt="globe" />
      </div>
      <div className="card2__right">
        <h2>Welcome to your dashboard</h2>
        <span>Choose the topics for your news feed</span>
        <div className="card2-topics">
          <button className="topic-btn technology" onClick={e => saveTopics(e)}>technology</button>
          <button className="topic-btn automobiles" onClick={e => saveTopics(e)}>automobiles</button>
          <button className="topic-btn science" onClick={e => saveTopics(e)}>science</button>
          <button className="topic-btn sports" onClick={e => saveTopics(e)}>sports</button>
          <button className="topic-btn business" onClick={e => saveTopics(e)}>business</button>
          <button className="topic-btn movies" onClick={e => saveTopics(e)}>movies</button>
          <button className="topic-btn travel" onClick={e => saveTopics(e)}>travel</button>
          <button className="topic-btn fashion" onClick={e => saveTopics(e)}>fashion</button>
          <button className="topic-btn health" onClick={e => saveTopics(e)}>health</button>
        </div>
        <button className="card2__right--next" onClick={nextCard}>
          next
          <AiOutlineRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default CardSecond;
