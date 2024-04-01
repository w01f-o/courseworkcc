import { Col, Row } from "components/Layout/Layout";
import { IProduct } from "types/productTypes";
import ProductItem from "./ProductItem";
import { CatalogContext } from "context/CatalogContext";
import { FC, useContext } from "react";
import { useMatchMedia } from "hooks/useMatchMedia.ts";

const Products: FC = () => {
  const { viewMode, sortedAndFilteredAndPricedProduct } =
    useContext(CatalogContext);

  const [isMobile] = useMatchMedia(["(max-width: 992px)"]);

  return (
    <Row className="catalog__products-row">
      {sortedAndFilteredAndPricedProduct.length ? (
        sortedAndFilteredAndPricedProduct.map((product: IProduct) => (
          <Col key={product.id} lg={viewMode} md={6} xs={12}>
            <ProductItem
              img={product.imgSmall}
              name={product.name}
              evaluation={product.reviews.map((item) => item.evaluation)}
              price={product.price}
              id={product.id}
              altName={product.altName}
            />
          </Col>
        ))
      ) : (
        <div className="catalog__products-not-enought">Ничего не найдено</div>
      )}
    </Row>
  );
};

export default Products;
