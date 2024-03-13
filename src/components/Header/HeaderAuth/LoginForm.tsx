import { FC } from "react";
import { emailSvg, passwordSvg } from "./svg/svg";

const LoginForm: FC = (): JSX.Element => {
  return (
    <form className="header__auth-form" onSubmit={e => e.preventDefault()}>
      <div className="header__auth-form-row">
        <input type="email" id="email" placeholder=" " />
        <label htmlFor="email">
          {emailSvg}
          <p>Email</p>
        </label>
      </div>
      <div className="header__auth-form-row">
        <input type="password" id="password" placeholder=" " />
        <label htmlFor="password">
          {passwordSvg}
          <p>Пароль</p>
        </label>
      </div>
      <button className="header__auth-form-btn">Войти</button>
    </form>
  );
};

export default LoginForm;
