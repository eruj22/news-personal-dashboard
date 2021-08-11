import React from 'react'

function CardNews({ newsSections, part }) {
  const { section, title, abstract } = newsSections

  if (part === "part-a" || part === "part-e") {
  return <div className={`part ${part}`}>
      <button className={`topic-btn ${section}`}>{section}</button>
      <h3>{title}</h3>
      <p>{abstract}</p>
    </div>
  } else {
    return <div className={`part ${part}`}>
      <button className={`topic-btn ${section}`}>{section}</button>
      <h3>{title}</h3>
    </div>
  }
}

export default CardNews
