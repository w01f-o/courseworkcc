import CatalogFilter from "components/Catalog/CatalogFilter";
import CatalogTopBar from "components/Catalog/CatalogTopBar";
import Products from "components/Catalog/Products";
import { Col, Container, Row } from "components/Layout/Layout";
import { FC } from "react";
import "../components/Catalog/Catalog.scss";
import CatalogContextProvider from "context/CatalogContext";
import { useMatchMedia } from "hooks/useMatchMedia.ts";

const CatalogPage: FC = () => {
  const [isTablet] = useMatchMedia(["(max-width: 1200px)"]);

  return (
    <CatalogContextProvider>
      <Container>
        <Row className="catalog__row">
          {!isTablet && (
            <Col xxl={3} xl={3}>
              <CatalogFilter />
            </Col>
          )}
          <Col xxl={9} xl={9} lg={12} md={12} xs={12}>
            <CatalogTopBar />
            <Products />
          </Col>
        </Row>
      </Container>
    </CatalogContextProvider>
  );
};

export default CatalogPage;
