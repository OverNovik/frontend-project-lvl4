import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Chat from './components/Chat/Chat.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import AuthProvider from './utils/authProvider.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx';
import SocketProvider from './utils/socketProvider.jsx';
import Modal from './components/Modal/Add.jsx';
import { useSelector } from 'react-redux';
import renderModal from './components/Modal/index.js';
import SignUp from './components/SignUp/SignUp.jsx';

const App = () => {
  const modalName = useSelector((state) => state.modal.status)
  console.log(modalName);
  return (
    <SocketProvider>
      <AuthProvider>
        <div className="d-flex flex-column h-100">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<PrivateRoute><Chat /></PrivateRoute>} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/NotFound" element={<NotFoundPage />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
          {renderModal(modalName)}
        </div>
      </AuthProvider>
    </SocketProvider>
  );
}

export default App;
