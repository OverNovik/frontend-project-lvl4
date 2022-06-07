import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import ModalHeader from "./components/ModalHeader.jsx";
import useSocket from "../../utils/hooks/useSocket.jsx";
import { useTranslation } from "react-i18next";

const Remove = ({ onHide }) => {
  const { socket } = useSocket();
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const currModal = useSelector((state) => state.modal.item)
  const { t } = useTranslation();

  const onRemove = () => {
    socket.emit('removeChannel', currModal);
    onHide();
  }

  return (
    <Modal show centered>
      <ModalHeader onHide={onHide} headerTitle={t('modals.titles.removeChannel')} />
      <Modal.Body>
        <p className="lead">{t('modals.sure')}?</p>
        <div className="d-flex justify-content-end">
          <button type="button" className="me-2 btn btn-secondary" onClick={onHide}>
            {t('buttons.cancel')}
          </button>
          <button type="button" className="btn btn-danger" onClick={onRemove}>
            {t('buttons.remove')}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
