import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Add from './Add.jsx';
import Remove from './Remove.jsx';
import Rename from './Rename.jsx';
import { changeStatus } from '../../slices/modalSlices.js';

const modals = {
  adding: Add,
  removing: Remove,
  renaming: Rename,
};

const RenderModal = () => {
  const dispatch = useDispatch();
  const modalName = useSelector((state) => state.modal.status);

  if (!modalName) {
    return null;
  }

  const Component = modals[modalName];

  return <Component onHide={() => dispatch(changeStatus(null))} />;
};

export default RenderModal;
