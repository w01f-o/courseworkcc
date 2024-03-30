import { FC } from "react";
import { emailSvg, fioSvg, passwordSvg, phoneSvg } from "./svg/svg";
import PrimaryButton from "components/UI/PrimaryButton/PrimaryButton.tsx";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterInputs {
  fio: string;
  email: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
}

const RegisterForm: FC = () => {
  const { register, handleSubmit } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data: RegisterInputs) => {
    console.log(data);
  };

  return (
    <form className="header__auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="header__auth-form-row">
        <input
          type="text"
          {...register("fio", { required: true })}
          placeholder=" "
        />
        <label htmlFor="fio">
          {fioSvg}
          <p>ФИО</p>
        </label>
      </div>
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
          type="text"
          {...register("phoneNumber", { required: true })}
          placeholder=" "
        />
        <label htmlFor="phoneNumber">
          {phoneSvg}
          <p>Номер телефона</p>
        </label>
      </div>
      <div className="header__auth-form-row">
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder=" "
        />
        <label htmlFor="password">
          {passwordSvg}
          <p>Пароль</p>
        </label>
      </div>
      <div className="header__auth-form-row">
        <input
          type="password"
          {...register("repeatPassword", { required: true })}
          placeholder=" "
        />
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
