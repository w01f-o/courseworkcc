import { ButtonHTMLAttributes, FC } from "react";
import "./PrimaryButton.scss";

const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`primary-button${className ? ` ${className}` : ""}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
