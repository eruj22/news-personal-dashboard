import React, { useState } from "react";
import globeDesktop from "../assets/globe-desktop.jpg";
import globeMobile from "../assets/globe-mobile.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { saveToLocalStorage } from "../utils/helpers"
import TopicsButton from "./TopicsButton";

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
          <TopicsButton topic={"technology"} saveTopics={saveTopics} />
          <TopicsButton topic={"automobiles"} saveTopics={saveTopics} />
          <TopicsButton topic={"science"} saveTopics={saveTopics} />
          <TopicsButton topic={"sports"} saveTopics={saveTopics} />
          <TopicsButton topic={"business"} saveTopics={saveTopics} />
          <TopicsButton topic={"movies"} saveTopics={saveTopics} />
          <TopicsButton topic={"travel"} saveTopics={saveTopics} />
          <TopicsButton topic={"fashion"} saveTopics={saveTopics} />
          <TopicsButton topic={"health"} saveTopics={saveTopics} />
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
