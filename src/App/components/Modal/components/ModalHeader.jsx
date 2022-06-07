import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalHeader = ({ onHide, headerTitle }) => (
  <Modal.Header closeButton onHide={onHide}>
    <Modal.Title className="modal-title h4">{headerTitle}</Modal.Title>
  </Modal.Header>
);

export default ModalHeader;
