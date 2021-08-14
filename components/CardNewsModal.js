import React from 'react'
import { FaTimes } from "react-icons/fa";

function CardNewsModal({ isModalOpen, closeModal, section, newsSections }) {
  const { title, description, publishedAt, author, content } = newsSections

  return (
    <div className={`${isModalOpen ? "modal modal-open" : "modal"}`}>
      <div className={`topic-btn ${section}`}>{section}</div>
      <h3>{title}</h3>
      <p className="italic">{description}</p>
      <p>{author}</p>
      <p>{publishedAt}</p>
      <p>{content}</p>
      <button className="modal-close-btn" onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  )
}

export default CardNewsModal
