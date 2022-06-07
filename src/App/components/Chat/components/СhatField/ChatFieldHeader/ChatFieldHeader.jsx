import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const ChatFieldHeader = ({ count }) => {
  const [title, setTitle] = useState('');
  const channels = useSelector((state) => state.channels.channels);
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const { t } = useTranslation();

  useEffect(() => {
    if (channels) {
      const currChannel = channels.find((item) => item.id === channelId);
      setTitle(currChannel.name);
    }
  }, [channelId]);

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>
          #
          {title}
        </b>
      </p>
      <span className="text-muted">
        {count}
        {' '}
        {t('messages.countMessages')}
      </span>
    </div>
  );
};

export default ChatFieldHeader;
