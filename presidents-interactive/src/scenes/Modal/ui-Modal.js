import React from "react";
import './modal.css';

const Modal = ({ handleClose, show, children }) => {

  return (
    <div className={`modal ${show ? 'open' : ''}`}>
      <section className={`modal-main ${show ? 'in' : 'out'}`}>
        <button className="modal-close" onClick={handleClose}>x</button>
        {children}
      </section>
    </div>
  );
};

export default Modal;