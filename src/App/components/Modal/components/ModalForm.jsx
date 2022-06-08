import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useRef, useState } from 'react';
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import useSocket from '../../../utils/hooks/useSocket.jsx';
import isUnique from '../../../utils/isUnique.js';

const ModalForm = ({ onHide }) => {
  const { socket } = useSocket();
  const inputEl = useRef();
  const channels = useSelector((state) => state.channels.channels);
  const channelsName = channels.map((item) => item.name);
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState('');

  const Schema = Yup.object().shape({
    name: Yup.string()
      .required(t('modals.required')),
  });

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (isUnique(channelsName, formik.values.name) === false) {
        setErrorMessage(t('modals.unique'));
      } else {
        socket.emit('newChannel', values);
        onHide();
        toast.success(t('notify.channelCreated'));
      }
    },
  });

  return (
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
        <label className="visually-hidden" htmlFor="name">
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
          <Button type="submit" className="btn btn-primary">
            {t('buttons.send')}
          </Button>
        </div>
      </FormGroup>
    </form>
  );
};

export default ModalForm;
