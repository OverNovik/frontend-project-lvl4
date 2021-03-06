import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ModalHeader from './components/ModalHeader.jsx';
import useSocket from '../../utils/hooks/useSocket.jsx';

const Remove = ({ onHide }) => {
  const { socket } = useSocket();
  const currModal = useSelector((state) => state.modal.item);
  const { t } = useTranslation();

  const onRemove = () => {
    socket.emit('removeChannel', currModal);
    onHide();
    toast.success(t('notify.channelRemoved'));
  };

  return (
    <Modal show centered>
      <ModalHeader
        onHide={onHide}
        headerTitle={t('modals.titles.removeChannel')}
      />
      <Modal.Body>
        <p className="lead">
          {t('modals.sure')}
          ?
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="me-2 btn btn-secondary"
            onClick={onHide}
          >
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
