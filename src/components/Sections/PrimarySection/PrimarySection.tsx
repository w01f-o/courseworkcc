import { FC, ReactNode } from "react";
import "./PrimarySection.scss";
import { Col, Container, Row } from "components/Layout/Layout";

interface PrimarySectionProps {
  title: string;
  text: string;
  children?: ReactNode;
}

const PrimarySection: FC<PrimarySectionProps> = ({ title, text, children }) => {
  return (
    <section className="section">
      <Container>
        <Row className="section__row">
          <Col xs={12}>
            <h3 className="section__title">{title}</h3>
            <p className="section__text">{text}</p>
          </Col>
          <Col xs={12}>
            <div className="section__content">{children}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrimarySection;
