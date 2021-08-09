import React, { useState } from "react";
import CardFirst from "./CardFirst";
import CardSecond from "./CardSecond";
import CardThird from "./CardThird";
import CardMain from "./CardMain"

function CardHolder() {
  const [next, setNext] = useState(1);
  switch (next) {
    case 1:
      return <CardFirst setNext={setNext} />;
    case 2:
      return <CardSecond setNext={setNext} />;
    case 3:
      return <CardThird setNext={setNext} />;
    default:
      return <CardMain />;
  }
}

export default CardHolder;
