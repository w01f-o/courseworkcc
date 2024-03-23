import { FC } from "react";
import "./Faq.scss";
import { Col, Container, Row } from "components/Layout/Layout.tsx";
import { faqList } from "components/FAQ/data/data.ts";
import { IFaq } from "types/faqTypes.ts";
import FaqItem from "components/FAQ/FaqItem.tsx";

const Faq: FC = () => {
  return (
    <Container>
      <Row className="faq__row">
        <Col xxl={12}>
          <div className="faq__content">
            <h1 className="faq__title">FAQ</h1>
            <div className="faq__list">
              {faqList.map((faq: IFaq) => (
                <FaqItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
