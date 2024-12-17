import React from 'react';
import '../estilos/Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>-</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
