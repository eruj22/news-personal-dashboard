import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { getFromLocalStorage } from "../utils/helpers";

const CardThird = ({ setNext }) => {
  const nextCard = () => {
    setNext(4);
  };

  console.log(getFromLocalStorage("topics"));

  return (
    <div className="card card3">
      <h2>You are all set!</h2>
      <button className="card3--next" onClick={nextCard}>
        Take me to my dashboard
        <AiOutlineRight className="icon" />
      </button>
    </div>
  );
};

export default CardThird;
