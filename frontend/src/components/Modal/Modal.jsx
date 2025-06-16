import React from 'react';
import './Modal.css';

export const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        {/* Top-right close “×” */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {/* Your existing form */}
        {children}
      </div>
    </div>
  );
}