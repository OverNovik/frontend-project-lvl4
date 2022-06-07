import React from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { batch, useDispatch, useSelector } from "react-redux";
import { setCurrentChannelId } from "../../../../../slices/channelsSlices.js";
import { changeStatus, updateItem } from "../../../../../slices/modalSlices.js";

const ChanelItem = ({ name, removable, id }) => {
  const dispatch = useDispatch();
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId
  );
  const { t } = useTranslation();

  const onRemove = () => {
    batch(() => {
      dispatch(changeStatus('removing'));
      dispatch(updateItem({ name, id }));
    });
  };

  const onRename = () => {
    batch(() => {
      dispatch(changeStatus('renaming'));
      dispatch(updateItem({ name, id }));
    });
  };

  return (
    <>
      <li className="nav-item w-100">
        {!removable ? (
          <button
            type="button"
            className={`w-100 rounded-0 text-start btn ${currentChannelId === id ? "btn-secondary" : ""
              }`}
            onClick={() => dispatch(setCurrentChannelId(id))}
          >
            <span className="me-1">#</span>
            {name}
          </button>
        ) : (
          <Dropdown className="d-flex dropdown btn-group">
            <button
              onClick={() => dispatch(setCurrentChannelId(id))}
              className={`w-100 rounded-0 text-start text-truncate btn ${currentChannelId === id ? "btn-secondary" : ""
                }`}
            >
              <span className="me-1">#</span>
              {name}
            </button>
            <Dropdown.Toggle
              split
              variant={`flex-grow-0 dropdown-toggle dropdown-toggle-split btn ${currentChannelId === id ? "btn-secondary" : ""
                }`}
            >
              <span className="visually-hidden">{t('channels.channelManagement')}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={onRemove}>
                {t('buttons.remove')}
              </Dropdown.Item>
              <Dropdown.Item onClick={onRename}>
                {t('buttons.rename')}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </li>
    </>
  );
};

export default ChanelItem;
