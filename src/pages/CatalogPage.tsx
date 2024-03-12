import CatalogFilter from "components/Catalog/CatalogFilter";
import CatalogTopBar from "components/Catalog/CatalogTopBar";
import Products from "components/Catalog/Products";
import { Col, Container, Row } from "components/Layout/Layout";
import { FC } from "react";
import "../components/Catalog/Catalog.scss";
import CatalogContextProvider from "context/CatalogContext";

const CatalogPage: FC = (): JSX.Element => {
  return (
    <CatalogContextProvider>
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
    </CatalogContextProvider>
  );
};

export default CatalogPage;
