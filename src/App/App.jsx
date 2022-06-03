import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Chat from './components/Chat/Chat.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import AuthProvider from './utils/authProvider.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx';
import SocketProvider from './utils/socketProvider.jsx';
import Modal from './components/Modal/Modal.jsx';

const App = () => {
  return (
    <SocketProvider>
      <AuthProvider>
        <div className="d-flex flex-column h-100">
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrivateRoute><Chat /></PrivateRoute>} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/NotFound" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
          <Modal />
        </div>
      </AuthProvider>
    </SocketProvider>
  );
}

export default App;
