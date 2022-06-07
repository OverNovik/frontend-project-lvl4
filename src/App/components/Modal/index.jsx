import React from 'react';
import { useDispatch } from 'react-redux';
import Add from './Add.jsx';
import Remove from './Remove.jsx';
import Rename from './Rename.jsx';
import { changeStatus } from '../../slices/modalSlices.js';

const modals = {
  adding: Add,
  removing: Remove,
  renaming: Rename,
};

const renderModal = (modalName) => {
  const dispatch = useDispatch();

  if (!modalName) {
    return null;
  }

  const Component = modals[modalName];

  return <Component onHide={() => dispatch(changeStatus(null))} />;
};

export default renderModal;
