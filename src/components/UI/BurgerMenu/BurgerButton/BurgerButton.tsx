import { ButtonHTMLAttributes, FC } from "react";
import "./BurgerButton.scss";
import classNames from "classnames";

interface BurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const BurgerButton: FC<BurgerButtonProps> = ({ isOpen, ...props }) => {
  return (
    <button
      {...props}
      className={classNames("burger__button", {
        open: isOpen,
      })}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BurgerButton;
