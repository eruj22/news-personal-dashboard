import React from "react"
import PropTypes from "prop-types"

function TopicsButton({ topic, saveTopics }) {
  return (
    <button className={`topic__btn ${topic}`} onClick={(e) => saveTopics(e)}>
      {topic}
    </button>
  )
}

TopicsButton.propTypes = {
  topic: PropTypes.string,
  saveTopics: PropTypes.func,
}

export default TopicsButton
