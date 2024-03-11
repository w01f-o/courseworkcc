import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC } from "react";
import { loginSvg } from "./svg/svg";

const HeaderLogin: FC = (): JSX.Element => {
  const loginClickHandler = (): void => {
    console.log("clicked");
  };
  return (
    <div className="header__login" onClick={loginClickHandler}>
      <HeaderButton>{loginSvg}</HeaderButton>
      Войти
    </div>
  );
};

export default HeaderLogin;
