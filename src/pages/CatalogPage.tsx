import CatalogFilter from "components/Catalog/CatalogFilter";
import CatalogTopBar from "components/Catalog/CatalogTopBar";
import Products from "components/Catalog/Products";
import { Col, Container, Row } from "components/Layout/Layout";
import { FC } from "react";
import "../components/Catalog/Catalog.scss";

const CatalogPage: FC = (): JSX.Element => {
  return (
    <Container>
      <Row className="catalog__row">
        <Col xxl={3}>
          <CatalogFilter />
        </Col>
        <Col xxl={9}>
          <CatalogTopBar />
          <Products />
        </Col>
      </Row>
    </Container>
  );
};

export default CatalogPage;
