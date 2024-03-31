import { FC } from "react";
import mousePng from "./img/mouse.png";
import { Col, Container, Row } from "components/Layout/Layout";
import "./PromoSection.scss";
import { useMatchMedia } from "hooks/useMatchMedia.ts";

const PromoSection: FC = () => {
  const [isMobile] = useMatchMedia(["(max-width: 768px)"]);

  return (
    <section className="promo">
      <Container>
        <Row className="promo__row">
          <Col xs={12}>
            <h3 className="promo__title">
              Геймерская точность,
              <br /> цены без границ – <br />
              переходи на новый уровень игры!
            </h3>
            {!isMobile && (
              <div className="promo__img-wrapper">
                <img src={mousePng} alt="promoImg" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PromoSection;
