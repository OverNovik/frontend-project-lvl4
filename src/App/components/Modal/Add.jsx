import React from "react";
import { Modal } from "react-bootstrap";
import ModalForm from "./components/ModalForm.jsx";
import ModalHeader from "./components/ModalHeader.jsx";

const Add = ({ onHide }) => {
  return (
    <Modal show centered>
      <ModalHeader onHide={onHide} headerTitle="Добавить канал" />
      <Modal.Body>
        <ModalForm onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};

export default Add;
