import { Col, Row } from "components/Layout/Layout";
import { IProduct } from "types/productTypes";
import ProductItem from "./ProductItem";
import { CatalogContext } from "context/CatalogContext";
import {FC, useContext} from "react";

const Products: FC = () => {
  const { viewMode, products } = useContext(CatalogContext);
  return (
    <Row className="catalog__products-row">
      {products.map((product: IProduct) => (
        <Col key={product.id} xxl={viewMode}>
          <ProductItem
            img={product.imgSmall}
            name={product.name}
            evaluation={product.reviews.map(item => item.evaluation)}
            price={product.price}
            id={product.id}
            altName={product.altName}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Products;
