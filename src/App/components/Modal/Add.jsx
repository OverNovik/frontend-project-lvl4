import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ModalForm from "./components/ModalForm.jsx";
import ModalHeader from "./components/ModalHeader.jsx";

const Add = ({ onHide }) => {
  const { t } = useTranslation();
  return (
    <Modal show centered>
      <ModalHeader
        onHide={onHide}
        headerTitle={t("modals.titles.addChannel")}
      />
      <Modal.Body>
        <ModalForm onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};

export default Add;
