import { Col, Row } from "components/Layout/Layout";
import { IProduct } from "types/productTypes";
import ProductItem from "./ProductItem";
import { CatalogContext } from "context/CatalogContext";
import {FC, memo, useContext} from "react";

const Products: FC = memo(() => {
  const { viewMode, sortedAndFilteredAndPricedProduct } =
    useContext(CatalogContext);
  return (
    <Row className="catalog__products-row">
      {sortedAndFilteredAndPricedProduct.length ? (
        sortedAndFilteredAndPricedProduct.map((product: IProduct) => (
          <Col key={product.id} xxl={viewMode}>
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
});

export default Products;
