import React from 'react'

function TopicsButton({ topic, saveTopics }) {
  return (
    <button className={`topic-btn ${topic}`}  onClick={e => saveTopics(e)}>
      {topic}
    </button>
  )
}

export default TopicsButton
