import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Main from './components/Main/Main.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import NotFound from './components/NotFound404/NotFound.jsx';
import AuthProvider from './provider/authProvider.jsx';
import PrivateRoute from './routes/privateRoute.jsx';

const App = () => {
  return (
    <AuthProvider>
      <div className="d-flex flex-column h-100">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute><Main /></PrivateRoute>} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/NotFound" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
