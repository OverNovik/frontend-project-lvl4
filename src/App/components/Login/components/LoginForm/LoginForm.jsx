import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import loginImage from '../../../../assets/loginImage.jpg';
import useAuth from '../../../../utils/hooks/useAuth.jsx';

const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  const Schema = Yup.object().shape({
    username: Yup.string()
      .min(3, t('login.errors.usernameMin'))
      .max(20, t('login.errors.usernameMax'))
      .required(t('login.errors.required')),
    password: Yup.string()
      .min(2, t('login.errors.passwordMin'))
      .max(50, t('login.errors.passwordMax'))
      .required(t('login.errors.required')),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post('api/v1/login', values);

        auth.logIn(JSON.stringify(res.data));
        navigate('/');
      } catch (e) {
        e.message = t('login.errors.inValid');
        setErrorMessage(e.message);
      }
    },
  });

  return (
    <div className="card-body row p-5">
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <img
          src={loginImage}
          alt={t('login.title')}
          className="rounded-circle"
        />
      </div>
      <form
        className="col-12 col-md-6 mt-3 mt-mb-0"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-center mb-4">{t('login.title')}</h1>
        <div className="form-floating mb-3">
          <input
            name="username"
            autoComplete="username"
            required=""
            placeholder={t('login.username')}
            id="username"
            className={`form-control ${formik.errors.username ? 'is-invalid' : null
            }`}
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <label htmlFor="username">{t('login.username')}</label>
          {formik.errors.username ? (
            <div className="invalid-tooltip" style={{ display: 'block' }}>
              {formik.errors.username}
            </div>
          ) : null}
        </div>
        <div className="form-floating mb-4">
          <input
            name="password"
            autoComplete="current-password"
            required=""
            placeholder={t('login.password')}
            type="password"
            id="password"
            className={`form-control ${formik.errors.password ? 'is-invalid' : null
            }`}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <label className="form-label" htmlFor="password">
            {t('login.password')}
          </label>
          {formik.errors.password ? (
            <div className="invalid-tooltip" style={{ display: 'block' }}>
              {formik.errors.password}
            </div>
          ) : null}
          {errorMessage ? (
            <div className="invalid-tooltip" style={{ display: 'block' }}>
              {errorMessage}
            </div>
          ) : null}
        </div>
        <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
          {t('buttons.login')}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
