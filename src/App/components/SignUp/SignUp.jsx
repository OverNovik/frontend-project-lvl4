import React, { useEffect, useRef, useState } from "react";
import signupImage from "../../assets/signupImage.jpg"
import * as Yup from 'yup';
import useAuth from "../../utils/hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, [])

  const Schema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Must be longer than 2 characters')
      .max(20, 'Nice try, nobody has a user name that long')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short password!')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], ('passwords do not match'))
      .required('Required')
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post('api/v1/signup', values)
        auth.logIn(JSON.stringify(res.data));
        console.log(res.data)
        navigate('/');
      } catch (e) {
        if (e.response.status === 409) {
          e.message = 'Пользователь уже существует'
          setErrorMessage(e.message);
        }
      }
    }
  })

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <div>
                <img src={signupImage} className="rounded-circle" alt="Регистрация" />
              </div>
              <form className="w-50" onSubmit={formik.handleSubmit}>
                <h1 className="text-center mb-4">Регистрация</h1>
                <div className="form-floating mb-3">
                  <input
                    ref={inputEl}
                    placeholder="От 3 до 20 символов"
                    name="username"
                    autoComplete="username"
                    required=""
                    id="username"
                    className="form-control is-invalid"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  <label className="form-label" htmlFor="username">
                    Имя пользователя
                  </label>
                  {/* <div placement="right" className="invalid-tooltip">
                    Обязательное поле
                  </div> */}
                </div>
                <div className="form-floating mb-3">
                  <input
                    placeholder="Не менее 6 символов"
                    name="password"
                    aria-describedby="passwordHelpBlock"
                    required=""
                    autoComplete="new-password"
                    type="password"
                    id="password"
                    className="form-control"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <div className="invalid-tooltip">Обязательное поле</div>
                  <label className="form-label" htmlFor="password">
                    Пароль
                  </label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    placeholder="Пароли должны совпадать"
                    name="confirmPassword"
                    required=""
                    autoComplete="new-password"
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                  <div className="invalid-tooltip"></div>
                  <label className="form-label" htmlFor="confirmPassword">
                    Подтвердите пароль
                  </label>
                </div>
                <button type="submit" className="w-100 btn btn-outline-primary">
                  Зарегистрироваться
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
