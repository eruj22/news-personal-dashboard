import React, { useEffect } from "react"
import { AiOutlineRight } from "react-icons/ai"
import { useStateValue } from "../utils/StateProvider"
import { getFromLocalStorage } from "../utils/helpers"

const CardThird = ({ setNextCard }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue()

  const nextCard = () => {
    setNextCard(4)
  }

  useEffect(() => {
    dispatch({
      type: "GET_CATEGORIES",
      category: getFromLocalStorage("topics"),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="card card3">
      <h2>You are all set!</h2>
      <button className="card3--next" onClick={nextCard}>
        Take me to my dashboard
        <AiOutlineRight className="icon" />
      </button>
    </div>
  )
}

export default CardThird
