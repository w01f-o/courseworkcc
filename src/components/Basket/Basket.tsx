import { FC, useContext } from "react";
import { Col, Container, Row } from "components/Layout/Layout.tsx";
import { BasketContext } from "context/BasketContext.tsx";
import { IBasketProduct } from "types/productTypes.ts";
import "./Basket.scss";
import BasketItem from "components/Basket/BasketItem.tsx";

const Basket: FC = () => {
  const { basket } = useContext(BasketContext);
  return (
    <>
      <Container className="basket">
        <Row className="basket__row">
          <Col xxl={12}>
            <h1 className="basket__title">Корзина</h1>
          </Col>
          {basket.length > 0 ? (
            <Col xxl={7}>
              {basket.map((product: IBasketProduct) => (
                <BasketItem product={product} key={product.id} />
              ))}
            </Col>
          ) : (
            <Col xxl={12}>
              <div className="basket__empty">Ваша корзина пуста</div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Basket;
