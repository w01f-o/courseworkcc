import { FC } from "react";
import "./Shops.scss";
import { Col, Container, Row } from "components/Layout/Layout.tsx";
import { shopsData } from "components/Shops/data/shopsData.ts";
import { IShop } from "types/shopsTypes.ts";
import ShopsItem from "components/Shops/ShopsItem.tsx";

const Shops: FC = () => {
  return (
    <Container>
      <Row className="shops__row">
        <Col xxl={12}>
          <h1 className="shops__title">Магазины</h1>
        </Col>
        <Col xxl={12}>
          <div className="shops__info">
            {shopsData.map((shop: IShop, index) => (
              <ShopsItem shop={shop} key={index} />
            ))}
          </div>
        </Col>

        <Col xxl={10}>
          <iframe
            className="shops__map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acb71d2fd9a44d298019d088769f260f3de5ebcf8a97df759766f3d2b06162c98&amp;source=constructor"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Shops;
