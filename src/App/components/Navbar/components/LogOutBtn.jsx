import React from "react";
import { useTranslation } from "react-i18next";
import useAuth from "../../../utils/hooks/useAuth.jsx";

const LogOutBtn = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  return (
    <>
      {auth.loggedIn ? (
        <button type="button" className="btn btn-primary" onClick={auth.logOut}>
          {t("buttons.exit")}
        </button>
      ) : null}
    </>
  );
};

export default LogOutBtn;
