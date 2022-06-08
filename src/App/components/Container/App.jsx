import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../utils/PrivateRoute.jsx';
import Chat from '../Chat/Chat.jsx';
import Login from '../Login/Login.jsx';
import renderModal from '../Modal/index.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import SignUp from '../SignUp/SignUp.jsx';

const App = () => {
  const modalName = useSelector((state) => state.modal.status);
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            )}
          />
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {renderModal(modalName)}
    </div>
  );
};

export default App;
