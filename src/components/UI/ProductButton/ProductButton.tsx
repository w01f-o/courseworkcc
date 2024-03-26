import { FC, useContext } from "react";
import "./ProductButton.scss";
import { minusSvg, plusSvg, basketSvg } from "components/Catalog/svg/svg";
import { BasketContext } from "context/BasketContext";

interface ProductButtonsProps {
  id: number;
  name: string;
  price: number;
  img: string;
  altName: string;
}

const ProductButtons: FC<ProductButtonsProps> = ({
  id,
  name,
  price,
  altName,
  img,
}) => {
  const {
    getProductIdInBasket,
    addToBasket,
    getProductCount,
    plusOneToBasket,
    minusOneFromBasket,
  } = useContext(BasketContext);

  return getProductIdInBasket(id) !== -1 ? (
    <>
      <button className="product-btn" onClick={() => minusOneFromBasket(id)}>
        {minusSvg}
      </button>
      <div className="product-btn-count">{getProductCount(id)}</div>
      <button className="product-btn" onClick={() => plusOneToBasket(id)}>
        {plusSvg}
      </button>
    </>
  ) : (
    <button
      className="product-btn"
      onClick={() => addToBasket({ id, name, price, altName, img })}
    >
      {basketSvg}
    </button>
  );
};

export default ProductButtons;
