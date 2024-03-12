import ProductButton from "components/UI/ProductButton/ProductButton";
import { FC, useContext } from "react";
import { basketSvg, minusSvg, plusSvg } from "./svg/svg";
import ReviewsStars from "components/UI/ReviewsStars/ReviewsStars";
import { BasketContext } from "context/BasketContext";
import { CatalogContext } from "context/CatalogContext";
import { Link } from "react-router-dom";

interface ProductItemProps {
  img: string;
  name: string;
  evaluation: number[];
  price: number;
  id: number;
  altName: string;
}

const ProductItem: FC<ProductItemProps> = ({
  img,
  name,
  evaluation,
  price,
  id,
  altName,
}): JSX.Element => {
  const {
    getProductIdInbasket,
    addToBasket,
    getProductCount,
    plusOneToBasket,
    minusOneFromBasket,
  } = useContext(BasketContext);
  const { viewMode } = useContext(CatalogContext);
  return (
    <div
      className={`catalog__products__item${
        viewMode === 12 ? " rows-mode" : ""
      }`}
    >
      <div className="products__item-img-wrapper">
        <img src={img} alt={altName} />
      </div>
      <Link className="products__item-name" to={`/catalog/${id}`}>
        {name}
      </Link>
      <div className="products__item-price">{price} ₽</div>
      <ReviewsStars evaluation={evaluation} />
      <div className="products__item-buttons">
        {getProductIdInbasket(id) !== -1 ? (
          <>
            <ProductButton onClick={() => minusOneFromBasket(id)}>
              {minusSvg}
            </ProductButton>
            <div className="products__item-count">{getProductCount(id)}</div>
            <ProductButton onClick={() => plusOneToBasket(id)}>
              {plusSvg}
            </ProductButton>
          </>
        ) : (
          <ProductButton
            onClick={() => addToBasket({ id, name, price, altName, img })}
          >
            {basketSvg}
          </ProductButton>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
