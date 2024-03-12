import { FC, useEffect, useRef } from "react";
import mousePng from "./img/mouse.png";
import { Col, Container, Row } from "components/Layout/Layout";
import "./PromoSection.scss";

const PromoSection: FC = (): JSX.Element => {
  return (
    <section className="promo">
      <Container>
        <Row className="promo__row">
          <Col xxl={12}>
            <h3 className="promo__title">
              Геймерская точность,
              <br /> цены без границ – <br />
              переходи на новый уровень игры!
            </h3>
            <div className="promo__img-wrapper">
              <img src={mousePng} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PromoSection;
