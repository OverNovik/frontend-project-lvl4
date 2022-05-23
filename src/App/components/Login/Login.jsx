import React from 'react';
import LoginFooter from './components/LoginFooter/LoginFooter.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';

const Login = () => {
  return (
    <div className="col-12 col-md-8 col-xxl-6">
      <div className="card shadow-sm">
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
}

export default Login;
