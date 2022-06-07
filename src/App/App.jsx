import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Chat from './components/Chat/Chat.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import AuthProvider from './utils/authProvider.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx';
import SocketProvider from './utils/socketProvider.jsx';
import { useSelector } from 'react-redux';
import renderModal from './components/Modal/index.js';
import SignUp from './components/SignUp/SignUp.jsx';
import { I18nextProvider } from 'react-i18next';
import i18nextInstance from './locales/instance.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const modalName = useSelector((state) => state.modal.status)

  return (

    <I18nextProvider i18n={i18nextInstance}>
      <SocketProvider>
        <AuthProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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
    </I18nextProvider>
  );
}

export default App;
