import { FC } from "react";
import { emailSvg, passwordSvg } from "./svg/svg";
import PrimaryButton from "components/UI/PrimaryButton/PrimaryButton.tsx";

const RegisterForm: FC = () => {
  return (
    <form className="header__auth-form" onSubmit={(e) => e.preventDefault()}>
      <div className="header__auth-form-row">
        <input type="text" id="name" placeholder=" " />
        <label htmlFor="name">
          {emailSvg}
          <p>ФИО</p>
        </label>
      </div>
      <div className="header__auth-form-row">
        <input type="email" id="email" placeholder=" " />
        <label htmlFor="email">
          {emailSvg}
          <p>Email</p>
        </label>
      </div>
      <div className="header__auth-form-row">
        <input type="text" id="phoneNumber" placeholder=" " />
        <label htmlFor="phoneNumber">
          {passwordSvg}
          <p>Номер телефона</p>
        </label>
      </div>
      <div className="header__auth-form-row">
        <input type="password" id="password" placeholder=" " />
        <label htmlFor="password">
          {passwordSvg}
          <p>Пароль</p>
        </label>
      </div>
      <div className="header__auth-form-row">
        <input type="password" id="password" placeholder=" " />
        <label htmlFor="password">
          {passwordSvg}
          <p>Повторите пароль</p>
        </label>
      </div>
      <PrimaryButton className="header__auth-form-btn">
        Зарегистрироваться
      </PrimaryButton>
    </form>
  );
};

export default RegisterForm;
