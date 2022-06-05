import React from "react";
import signupImage from "../../assets/signupImage.jpg"

const SignUp = () => {
  return (
    <div className="col-12 col-md-8 col-xxl-6">
      <div className="card shadow-sm">
        <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
          <div>
            <img src={signupImage} className="rounded-circle" alt="Регистрация" />
          </div>
          <form className="w-50">
            <h1 className="text-center mb-4">Регистрация</h1>
            <div className="form-floating mb-3">
              <input
                placeholder="От 3 до 20 символов"
                name="username"
                autocomplete="username"
                required=""
                id="username"
                className="form-control is-invalid"
                value=""
              />
              <label className="form-label" htmlFor="username">
                Имя пользователя
              </label>
              <div placement="right" className="invalid-tooltip">
                Обязательное поле
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                placeholder="Не менее 6 символов"
                name="password"
                aria-describedby="passwordHelpBlock"
                required=""
                autocomplete="new-password"
                type="password"
                id="password"
                className="form-control"
                value=""
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
                autocomplete="new-password"
                type="password"
                id="confirmPassword"
                className="form-control"
                value=""
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
  );
};

export default SignUp;
