import React, { useState } from "react";
import globeDesktop from "../assets/globe-desktop.jpg";
import globeMobile from "../assets/globe-mobile.jpg";
import { AiOutlineRight } from "react-icons/ai";
import {saveToLocalStorage} from "../utils/helpers"

const CardFirst = ({ setNext }) => {
  const [value, setValue] = useState("");

  const nextCard = () => {
    setNext(2);
  };

  // logic for checking if something is saved on local storage
  saveToLocalStorage("name", value);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="card card1">
      <div className="card1__left">
        <img className="card1__left-img img-desktop" src={globeDesktop} alt="globe" />
        <img className="card1__left-img img-mobile" src={globeMobile} alt="globe" />
      </div>
      <div className="card1__right">
        <h2>Welcome to your dashboard</h2>
        <span>What's your name?</span>
        <input type="text" name="name" id="name" onChange={onChange} />
        <button className="card1__right--next" onClick={nextCard}>
          next
          <AiOutlineRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default CardFirst;
