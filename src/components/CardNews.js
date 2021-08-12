import React, {useState} from 'react'
import CardNewsModal from './CardNewsModal'

function CardNews({ newsSections, part, section }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { title, description } = newsSections

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (part === "part-a" || part === "part-e") {
    return <>
        <button onClick={openModal} className={`part ${part}`}>
          <div className={`topic-btn ${section}`}>{section}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </button>
        <CardNewsModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </>
  } else {
    return <>
        <button onClick={openModal} className={`part ${part}`}>
          <div className={`topic-btn ${section}`}>{section}</div>
          <h3>{title}</h3>
        </button>
        <CardNewsModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </>
  }
}

export default CardNews
