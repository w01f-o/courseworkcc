import { ButtonHTMLAttributes, FC } from "react";
import "./ProductButton.scss";

const ProductButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <button className="product-btn" type="button" {...props}>
      {children}
    </button>
  );
};

export default ProductButton;
