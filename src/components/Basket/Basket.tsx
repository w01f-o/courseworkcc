import { FC, useContext, useState } from "react";
import { Col, Container, Row } from "components/Layout/Layout.tsx";
import { BasketContext } from "context/BasketContext.tsx";
import { IBasketProduct } from "types/productTypes.ts";
import "./Basket.scss";
import BasketItem from "components/Basket/BasketItem.tsx";
import BasketForm from "components/Basket/BasketForm.tsx";
import Alert from "components/UI/Alert/Alert.tsx";
import { AlertTypeEnum } from "../../enums/UIEnums.ts";

const Basket: FC = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const [submitAlert, setSubmitAlert] = useState<boolean>(false);

  const onSubmit = () => {
    setSubmitAlert(true);
    setBasket([]);
    window.scroll(0, 0);
  };

  return (
    <>
      <Container className="basket">
        <Row className="basket__row">
          {basket.length > 0 ? (
            <>
              <Col xs={12}>
                <h1 className="basket__title">Корзина</h1>
              </Col>
              <Col xl={8} lg={7} xs={12}>
                {basket.map((product: IBasketProduct) => (
                  <BasketItem product={product} key={product.id} />
                ))}
              </Col>
              <Col xl={4} lg={5} xs={12}>
                <BasketForm submitHandler={onSubmit} />
              </Col>
            </>
          ) : (
            <Col xs={12}>
              <div className="basket__empty">Ваша корзина пуста</div>
            </Col>
          )}
          <div>
            <Alert
              isOpen={submitAlert}
              alertType={AlertTypeEnum.success}
              setIsOpen={setSubmitAlert}
              closeTimeout={5000}
            >
              Заказ успешно оформлен!
            </Alert>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Basket;
