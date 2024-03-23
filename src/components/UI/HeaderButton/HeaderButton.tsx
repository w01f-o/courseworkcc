import { ButtonHTMLAttributes, FC } from "react";
import "./HeaderButton.scss";

const HeaderButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button className="header__button" {...props} type="button">
      {children}
    </button>
  );
};

export default HeaderButton;
