import { FC } from "react";
import { emailSvg, passwordSvg } from "./svg/svg";
import PrimaryButton from "components/UI/PrimaryButton/PrimaryButton.tsx";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginInputs {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data: LoginInputs) => {
    console.log(data);
  };

  return (
    <form className="header__auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="header__auth-form-row">
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder=" "
        />
        <label htmlFor="email">
          {emailSvg}
          <p>Email</p>
        </label>
      </div>
      <div className="header__auth-form-row">
        <input
          type="password"
          {...register("password", { required: true })}
          name="password"
          placeholder=" "
        />
        <label htmlFor="password">
          {passwordSvg}
          <p>Пароль</p>
        </label>
      </div>
      <PrimaryButton className="header__auth-form-btn">Войти</PrimaryButton>
    </form>
  );
};

export default LoginForm;
