import React from 'react'
import { FaTimes } from "react-icons/fa";

function CardNewsModal({ isModalOpen, closeModal }) {
  return (
    <div className={`${isModalOpen ? "modal modal-open" : "modal"}`}>
      modal content
      <button className="modal-close-btn" onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  )
}

export default CardNewsModal
