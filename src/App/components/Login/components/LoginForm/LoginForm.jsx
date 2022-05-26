import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import loginImage from './../../../../assets/loginImage.jpg';
import useAuth from '../../../../hooks/index.jsx';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const Schema = Yup.object().shape({
    username: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a user name that long')
    .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short password!')
      .max(50, 'Too Long password!')
      .required('Required'),
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post('api/v1/login', values)
        console.log(res.data)
        auth.logIn(res.data.token);
        navigate('/');
      } catch (e) {
        e.message = 'Invalid username or password';
        setErrorMessage(e.message);
      }
    }
  })

  return (
    <div className="card-body row p-5">
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <img src={loginImage} alt="Войти" className="rounded-circle" />
      </div>
      <form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
        <h1 className="text-center mb-4">Войти</h1>
        <div className="form-floating mb-3">
          <input 
            name="username"
            autoComplete="username"
            required=""
            placeholder="Ваш ник"
            id="username"
            className={`form-control ${formik.errors.username ? "is-invalid" : null}`}
            value={formik.values.username}
            onChange={formik.handleChange}
            />
          <label htmlFor="username">Ваш ник</label>
          {formik.errors.username ? <div className="invalid-tooltip" style={{display: 'block'}}>{formik.errors.username}</div> : null}
        </div>
        <div className="form-floating mb-4">
          <input 
            name="password" 
            autoComplete="current-password" 
            required="" 
            placeholder="Пароль" 
            type="password"
            id="password" 
            className={`form-control ${formik.errors.password ? "is-invalid" : null}`} 
            value={formik.values.password} 
            onChange={formik.handleChange}
            />
          <label className="form-label" htmlFor="password">Пароль</label>
          {formik.errors.password ? <div className="invalid-tooltip" style={{display: 'block'}}>{formik.errors.password}</div> : null}
          {errorMessage ? <div className="invalid-tooltip" style={{display: 'block'}}>{errorMessage}</div> : null}
        </div>
        <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
      </form>
    </div>
  );
}

export default LoginForm;