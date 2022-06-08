import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary, Provider } from '@rollbar/react';
import AuthProvider from './utils/authProvider.jsx';
import SocketProvider from './utils/socketProvider.jsx';
import i18nextInstance from './locales/instance.js';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/Container/App.jsx';

const rollbarConfig = {
  accessToken: '092dd626bb30402a88242d36da5c0815',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'production',
  },
};

const init = async (socket) => (
  <Provider config={rollbarConfig}>
    <ErrorBoundary>
      <I18nextProvider i18n={i18nextInstance}>
        <SocketProvider socket={socket}>
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
            <App />
          </AuthProvider>
        </SocketProvider>
      </I18nextProvider>
    </ErrorBoundary>
  </Provider>
);

export default init;
