import { FC, useContext } from "react";
import ReviewsStars from "components/UI/ReviewsStars/ReviewsStars";
import { CatalogContext } from "context/CatalogContext";
import { Link } from "react-router-dom";
import ProductButtons from "components/UI/ProductButton/ProductButton";
import { ViewModeEnum } from "../../enums/UIEnums.ts";
import classNames from "classnames";

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
}) => {
  const { viewMode } = useContext(CatalogContext);

  return (
    <div
      className={classNames("catalog__products__item", {
        ["rows-mode"]: viewMode === ViewModeEnum.rows,
      })}
    >
      <div className="products__item-img-wrapper">
        <img src={img} alt={altName} />
      </div>
      <Link className="products__item-name" to={`/catalog/product/${id}`}>
        {name}
      </Link>
      <div className="products__item-price">{price} ₽</div>
      <ReviewsStars evaluation={evaluation} />
      <div className="products__item-buttons">
        <ProductButtons
          id={id}
          name={name}
          price={price}
          img={img}
          altName={altName}
        />
      </div>
    </div>
  );
};

export default ProductItem;
