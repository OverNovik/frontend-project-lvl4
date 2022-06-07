/* eslint-disable no-return-assign */
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import useSocket from '../../../../../utils/hooks/useSocket.jsx';
import localStorageService from '../../../../../utils/localStorageService.js';

const ChatFieldForm = () => {
  const { socket } = useSocket();
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const token = JSON.parse(localStorageService.getToken());
  const inputEl = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      input: '',
    },
    onSubmit: (values, actions) => {
      const newMessage = {
        username: token.username,
        text: values.body,
        channelId,
      };
      socket.emit('newMessage', newMessage, () => {
        actions.resetForm();
        inputEl.current.focus();
      });
    },
  });

  return (
    <form className="py-1 border rounded-2" onSubmit={formik.handleSubmit}>
      <div className="input-group has-validation">
        <input
          ref={inputEl}
          name="body"
          aria-label="Новое сообщение"
          placeholder={t('messages.placeholder')}
          className="border-0 p-0 ps-2 form-control"
          value={formik.values.body || ''}
          onChange={formik.handleChange}
        />
        <button
          type="submit"
          disabled={(formik.values.input = '')}
          className="btn btn-group-vertical"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
          <span className="visually-hidden">{t('messages.send')}</span>
        </button>
      </div>
    </form>
  );
};

export default ChatFieldForm;
