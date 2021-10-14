import React, { useRef } from "react"
import PropTypes from "prop-types"

function TopicsButton({ topic, saveTopics }) {
  const ref = useRef(null)

  const update = () => {
    ref.current.style.opacity = 0.6
    ref.current.style.transform = "scale(1.1)"
  }

  return (
    <button
      className={`topic__btn ${topic}`}
      ref={ref}
      onClick={(e) => {
        saveTopics(e)
        update()
      }}
    >
      {topic}
    </button>
  )
}

TopicsButton.propTypes = {
  topic: PropTypes.string.isRequired,
  saveTopics: PropTypes.func.isRequired,
}

export default TopicsButton
