import React from 'react';

const LoginFooter = () => {
  return (
    <div className="card-footer p-4">
      <div className="text-center">
      <span>Нет аккаунта?</span>
      <a href="/signup">Регистрация</a>
      </div>
    </div>
  );
}

export default LoginFooter;