import React, { useRef, useEffect } from 'react';
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

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const Schema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      // eslint-disable-next-line no-use-before-define
      .test('repeat', () => isUnique(channelsName, formik.values.name)),
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
      socket.emit('renameChannel', { name: values.name, id }, (response) => {
        console.log(response.status);
      });
      onHide();
      toast.success(t('notify.channelRenamed'));
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
              id="name"
              className="mb-2"
              value={formik.values.name}
              onChange={formik.handleChange}
            />

            <div className="invalid-feedback" style={{ display: 'block' }}>
              {formik.errors.name ? formik.errors.name : null}
            </div>
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
