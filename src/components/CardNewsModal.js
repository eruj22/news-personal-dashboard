import React from "react"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"

function CardNewsModal({ isModalOpen, closeModal, section, newsSections }) {
  const { title, description, publishedAt, author, content, url } = newsSections
  const time = publishedAt.split("T")

  return (
    <div className={`${isModalOpen ? "modal modal--open" : "modal"}`}>
      <div className={`topic__btn ${section}`}>{section}</div>
      <h3 className="modal__title">{title}</h3>
      <p className="italic">{description}</p>
      <p>
        <b>Author: </b>
        {author ? author : "Unknown"}
      </p>
      <p>
        <b>Published at: </b>
        {time[0]} at {time[1].replace("Z", "")}
      </p>
      <p>{content}</p>
      <a href={url} target="_blank" rel="noreferrer">
        Read more
      </a>
      <button className="modal__closeBtn" onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  )
}

CardNewsModal.propTypes = {
  section: PropTypes.string,
  newsSections: PropTypes.object,
}

export default CardNewsModal
