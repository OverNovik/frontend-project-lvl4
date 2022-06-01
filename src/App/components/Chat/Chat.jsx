import axios from 'axios';
import React, { useEffect } from 'react';
import { batch, useDispatch } from 'react-redux';
import { getChannels, setCurrentChannelId, getMessages } from '../../slices/chatSlices.js';
import Channels from './components/Channels/Channels.jsx';
import ChatField from './components/СhatField/ChatField.jsx';
import useAuth from '../../utils/hooks/useAuth.jsx';

const Chat = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const data = JSON.parse(auth.token);
      const res = await axios.get('/api/v1/data', {
        headers: {
          Authorization: `Bearer ${data.token}`
        },
      });
      const { channels, currentChannelId, messages } = res.data;
      console.log(res.data)
      batch(() => {
        dispatch(getChannels(channels))
        dispatch(getMessages(messages))
        dispatch(setCurrentChannelId(currentChannelId))
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
