import { FC, useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "components/Layout/Layout.tsx";
import { BasketContext } from "context/BasketContext.tsx";
import { IBasketProduct } from "types/productTypes.ts";
import "./Basket.scss";
import BasketItem from "components/Basket/BasketItem.tsx";

const Basket: FC = () => {
  const [basketTotalPrice, setBasketTotalPrice] = useState<number>(0);
  const { basket } = useContext(BasketContext);

  useEffect(() => {
    setBasketTotalPrice(
      basket.reduce(
        (acc: number, product: IBasketProduct) =>
          acc + product.price * (product.count ? product.count : 1),
        0,
      ),
    );
  }, [basket]);

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
              <div className="basket__total">{basketTotalPrice}</div>
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
