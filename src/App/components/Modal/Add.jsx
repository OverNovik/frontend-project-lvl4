import React from "react";
import ModalForm from "./components/ModalForm.jsx";
import ModalHeader from "./components/ModalHeader.jsx";

const Add = () => {
  return (
    <div role="dialog" aria-modal="true" className="fade modal show" tabIndex="-1" style={{ display: "block", background: "gray", opacity: "0.7" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ zIndex: "1000" }}>
          <ModalHeader />
          <div className="modal-body">
            <ModalForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add;