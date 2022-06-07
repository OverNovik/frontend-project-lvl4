import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import useAuth from '../../utils/hooks/useAuth.jsx';
import signupImage from '../../assets/signupImage.jpg';

const SignUp = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const inputEl = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const Schema = Yup.object().shape({
    username: Yup.string()
      .min(3, t('signup.errors.usernameMin'))
      .max(20, t('signup.errors.usernameMax'))
      .required(t('signup.errors.required')),
    password: Yup.string()
      .min(6, t('signup.errors.passwordMin'))
      .required(t('signup.errors.required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('signup.errors.confirmPassword'))
      .required(t('signup.errors.required')),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post('api/v1/signup', values);
        auth.logIn(JSON.stringify(res.data));
        navigate('/');
      } catch (e) {
        if (e.response.status === 409) {
          toast.error(t('notify.errors.inValid'));
        }
      }
    },
  });

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <div>
                <img
                  src={signupImage}
                  className="rounded-circle"
                  alt={t('signup.title')}
                />
              </div>
              <form className="w-50" onSubmit={formik.handleSubmit}>
                <h1 className="text-center mb-4">{t('signup.title')}</h1>
                <div className="form-floating mb-3">
                  <input
                    ref={inputEl}
                    placeholder={t('signup.placeholders.username')}
                    name="username"
                    autoComplete="username"
                    required=""
                    id="username"
                    className={`form-control${formik.errors.username ? ' is-invalid' : ''
                      }`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  <label className="form-label" htmlFor="username">
                    {t('signup.labels.username')}
                  </label>
                  {formik.errors.username ? (
                    <div placement="right" className="invalid-tooltip">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
                <div className="form-floating mb-3">
                  <input
                    placeholder={t('signup.placeholders.password')}
                    name="password"
                    aria-describedby="passwordHelpBlock"
                    required=""
                    autoComplete="new-password"
                    type="password"
                    id="password"
                    className={`form-control${formik.errors.password ? ' is-invalid' : ''
                      }`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password ? (
                    <div placement="right" className="invalid-tooltip">
                      {formik.errors.password}
                    </div>
                  ) : null}
                  <label className="form-label" htmlFor="password">
                    {t('signup.labels.password')}
                  </label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    placeholder={t('signup.placeholders.confirmPassword')}
                    name="confirmPassword"
                    required=""
                    autoComplete="new-password"
                    type="password"
                    id="confirmPassword"
                    className={`form-control${formik.errors.confirmPassword ? ' is-invalid' : ''
                      }`}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.confirmPassword ? (
                    <div placement="right" className="invalid-tooltip">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                  <label className="form-label" htmlFor="confirmPassword">
                    {t('signup.labels.confirmPassword')}
                  </label>
                </div>
                <button type="submit" className="w-100 btn btn-outline-primary">
                  {t('buttons.signup')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
