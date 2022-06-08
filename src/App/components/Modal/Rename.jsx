import React, { useRef, useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  Modal, Button, FormControl, FormGroup,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ModalHeader from './components/ModalHeader.jsx';
import useSocket from '../../utils/hooks/useSocket.jsx';
import isUnique from '../../utils/isUnique.js';

const Rename = ({ onHide }) => {
  const { socket } = useSocket();
  const inputEl = useRef();
  const channels = useSelector((state) => state.channels.channels);
  const channelsName = channels.map((item) => item.name);
  const { id, name } = useSelector((state) => state.modal.item);
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const Schema = Yup.object().shape({
    name: Yup.string()
      .required(t('modals.required')),
  });

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      name,
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (isUnique(channelsName, formik.values.name) === false) {
        setErrorMessage(t('modals.unique'));
      } else {
        socket.emit('renameChannel', { name: values.name, id }, (response) => {
          console.log(response.status);
        });
        onHide();
        toast.success(t('notify.channelRenamed'));
      }
    },
  });

  return (
    <Modal show centered>
      <ModalHeader
        onHide={onHide}
        headerTitle={t('modals.titles.renameChannel')}
      />
      <Modal.Body>
        <form className="" onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              ref={inputEl}
              name="name"
              id="rName"
              className="mb-2"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <label className="visually-hidden" htmlFor="rName">
              {t('modals.nameChannel')}
            </label>
            {errorMessage ? <div className="invalid-feedback" style={{ display: 'block' }}>{errorMessage}</div> : null}
            <div className="d-flex justify-content-end">
              <Button
                onClick={onHide}
                type="button"
                className="me-2 btn btn-secondary"
              >
                {t('buttons.cancel')}
              </Button>
              <Button
                type="submit"
                className="btn btn-primary"
                disabled={formik.values.name === ''}
              >
                {t('buttons.send')}
              </Button>
            </div>
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
