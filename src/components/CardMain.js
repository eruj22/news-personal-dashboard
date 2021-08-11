import React from 'react'
import { getFromLocalStorage } from "../utils/helpers"
import Sunny from "../assets/cloudy_sunny.png"
import Settings from "../assets/settings.png"
import { FaSearch } from "react-icons/fa"
import CardNews from "./CardNews"
import ImageOfTheDay from './ImageOfTheDay'
import LocalWeather from './LocalWeather'

function CardMain({ setNext, newsSections, imageOfTheDay, localWeather }) {
  const name = getFromLocalStorage('name');

  const nextCard = () => {
    setNext(1);
  };

  return (
    <section className="mainCard">
      <header className="mainCard__header">
          <div>
            <img src={Sunny} className="icon" alt="" />
            <h1>Good morning, {name?name:"Unknown"}!</h1>
          </div>
          <div>
            <input type="text" placeholder="search for stories..." />
            <button className="search-btn">
                <FaSearch />
            </button>
          </div>
      </header>
      <div className="card">
        <CardNews newsSections={newsSections[4]} part={"part-a"} />
        <CardNews newsSections={newsSections[11]} part={"part-b"} />
        <CardNews newsSections={newsSections[6]} part={"part-c"} />
        <CardNews newsSections={newsSections[7]} part={"part-d"} />
        <CardNews newsSections={newsSections[12]} part={"part-e"} />
        <button className="part part-setting" onClick={nextCard}>
            <img src={Settings} className="icon" alt="" />
        </button>
        {/* <LocalWeather localWeather={localWeather} /> */}
        <ImageOfTheDay imageOfTheDay={imageOfTheDay} />
      </div>
    </section>
  )
}

export default CardMain
