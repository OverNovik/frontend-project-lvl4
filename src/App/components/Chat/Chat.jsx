import axios from 'axios';
import React, { useEffect } from 'react';
import { batch, useDispatch } from 'react-redux';
import useAuth from '../../hooks/index.jsx';
import localStorageService from '../../services/localStorageService.js';
import { temporary } from '../../slices/chatSlices.js';
import Channels from './components/Channels/Channels.jsx';
import ChatField from './components/СhatField/ChatField.jsx';

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorageService.getToken();

    const fetch = async () => {
      const res = await axios.get('/api/v1/data', {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      const { channels, currentChannelId, messages } = res.data
      console.log(res.data)
      batch(() => {
        console.log(dispatch(temporary(messages)))
        console.log(dispatch(temporary(currentChannelId)))
        console.log(dispatch(temporary(channels)))
      })
    };

    fetch();
  }, [])

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels />
        <ChatField />
      </div>
    </div>
  );
}

export default Chat;
