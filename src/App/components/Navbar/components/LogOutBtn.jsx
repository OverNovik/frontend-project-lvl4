import React from 'react';
import useAuth from '../../../utils/hooks/useAuth.jsx';

const LogOutBtn = () => {
  const auth = useAuth();

  return (
    <>
      {
        auth.loggedIn ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={auth.logOut}
          >
            Выйти
          </button>
        )
          :
          null
      }
    </>
  );
}

export default LogOutBtn;