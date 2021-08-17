import React, { useState } from "react"
import PropTypes from "prop-types"
import CardNewsModal from "./CardNewsModal"

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
    return (
      <>
        <button onClick={openModal} className={`part ${part}`}>
          <div className={`topic__btn ${section}`}>{section}</div>
          <h3>{title}</h3>
          <p className="italic">{description}</p>
        </button>
        <CardNewsModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          section={section}
          newsSections={newsSections}
        />
      </>
    )
  } else {
    return (
      <>
        <button onClick={openModal} className={`part ${part}`}>
          <div className={`topic__btn ${section}`}>{section}</div>
          <h3>{title}</h3>
        </button>
        <CardNewsModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          section={section}
          newsSections={newsSections}
        />
      </>
    )
  }
}

CardNews.propTypes = {
  part: PropTypes.string,
  section: PropTypes.string,
}

export default CardNews
