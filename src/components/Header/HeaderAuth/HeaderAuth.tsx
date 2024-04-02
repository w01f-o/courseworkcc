import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC, useState } from "react";
import { loginSvg } from "../svg/svg";
import Modal from "components/UI/Modal/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useMatchMedia } from "hooks/useMatchMedia.ts";

enum AuthModeEnum {
  logIn,
  register,
}

const HeaderAuth: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<AuthModeEnum>(AuthModeEnum.logIn);
  const [isMobile] = useMatchMedia(["(max-width: 992px)"]);

  const changeAuthMode = () => {
    authMode === AuthModeEnum.logIn
      ? setAuthMode(AuthModeEnum.register)
      : setAuthMode(AuthModeEnum.logIn);
  };

  return (
    <>
      {isMobile ? (
        <HeaderButton
          onClick={() => {
            setOpenModal(true);
            setAuthMode(AuthModeEnum.logIn);
          }}
        >
          {loginSvg}
        </HeaderButton>
      ) : (
        <div
          className="header__auth"
          onClick={() => {
            setOpenModal(true);
            setAuthMode(AuthModeEnum.logIn);
          }}
        >
          <HeaderButton>{loginSvg}</HeaderButton>
          Войти
        </div>
      )}
      <Modal isOpen={openModal} setOpen={setOpenModal}>
        <div className="header__auth-modal">
          <h3 className="header__auth-title">Добро пожаловать!</h3>
          {authMode === AuthModeEnum.logIn ? <LoginForm /> : <RegisterForm />}
          <div className="header__auth-register">
            У вас
            {authMode === AuthModeEnum.logIn
              ? " нет аккаунта?"
              : " есть аккаунт?"}
            <span onClick={changeAuthMode}>
              {authMode === AuthModeEnum.logIn
                ? " Зарегистрируйтесь"
                : " Войдите"}
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HeaderAuth;
