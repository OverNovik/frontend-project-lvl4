import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LoginFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="card-footer p-4">
      <div className="text-center">
        <span>{t('login.noAccount')}?</span>
        <Link to="/signup">{t('login.signup')}</Link>
      </div>
    </div>
  );
}

export default LoginFooter;