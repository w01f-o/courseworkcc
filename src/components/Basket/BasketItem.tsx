import { FC } from "react";
import { IBasketProduct } from "types/productTypes.ts";
import { Link } from "react-router-dom";
import ProductButtons from "components/UI/ProductButton/ProductButton.tsx";
import { useMatchMedia } from "hooks/useMatchMedia.ts";

interface BasketItemProps {
  product: IBasketProduct;
}

const BasketItem: FC<BasketItemProps> = ({ product }) => {
  const [isMobile] = useMatchMedia(["(max-width: 576px)"]);

  return (
    <div className="basket__item">
      <div className="basket__item-img-wrapper">
        <img src={product.img} alt={product.altName} />
      </div>
      <Link className="basket__item-name" to={`/catalog/product/${product.id}`}>
        {product.name}
      </Link>
      <div className="basket__item-buttons">
        {isMobile && (
          <div className="basket__item-price">{product.price} ₽</div>
        )}
        <ProductButtons
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          altName={product.altName}
        />
      </div>
      {!isMobile && <div className="basket__item-price">{product.price} ₽</div>}
    </div>
  );
};

export default BasketItem;
