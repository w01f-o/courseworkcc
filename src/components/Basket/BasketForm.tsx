import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { BasketContext } from "context/BasketContext.tsx";
import { IBasketProduct } from "types/productTypes.ts";
import PrimaryButton from "components/UI/PrimaryButton/PrimaryButton.tsx";
import Alert from "components/UI/Alert/Alert.tsx";
import { AlertTypeEnum } from "../../enums/UIEnums.ts";
import classNames from "classnames";

enum promocodeAlertText {
  success = "Промокод применён",
  warning = "Промокод уже применён",
  error = "Введённого промокода не существует",
}

interface PromocodeState {
  type: AlertTypeEnum;
  message: promocodeAlertText;
  isApplied: boolean;
}

interface BasketFormProps {
  submitHandler: () => void;
}

const BasketForm: FC<BasketFormProps> = ({ submitHandler }) => {
  const { basket, promocodes } = useContext(BasketContext);

  const [basketTotalPrice, setBasketTotalPrice] = useState<number>(0);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [promocodeState, setPromocodeState] = useState<PromocodeState>({
    type: AlertTypeEnum.error,
    message: promocodeAlertText.error,
    isApplied: false,
  });

  const deliveryPrice = useMemo(() => {
    return basketTotalPrice < 5999 ? 400 : 0;
  }, [basketTotalPrice]);

  const [totalPriceWithDiscount, setTotalPriceWithDiscount] =
    useState<number>(0);

  useEffect(() => {
    setBasketTotalPrice(
      basket.reduce(
        (acc: number, product: IBasketProduct) =>
          acc + product.price * (product.count ? product.count : 1),
        0,
      ),
    );
  }, [basket]);

  const promocodeInputRef = useRef<HTMLInputElement>(null);

  const promocodeClickHandler = () => {
    setOpenAlert(true);

    if (promocodeInputRef.current) {
      if (
        promocodes.includes(promocodeInputRef.current.value) &&
        !promocodeState.isApplied
      ) {
        setPromocodeState({
          type: AlertTypeEnum.success,
          message: promocodeAlertText.success,
          isApplied: true,
        });
        setTotalPriceWithDiscount((prev) => basketTotalPrice + prev - 990);
      } else if (promocodeState.isApplied) {
        setPromocodeState({
          type: AlertTypeEnum.error,
          message: promocodeAlertText.warning,
          isApplied: true,
        });
      } else {
        setPromocodeState({
          type: AlertTypeEnum.error,
          message: promocodeAlertText.error,
          isApplied: false,
        });
      }
    }
  };

  return (
    <div className="basket__form">
      <div className="basket__form-content">
        <h5 className="basket__form-title">Итого:</h5>
        <div className="basket__form-price">
          Стоимость товаров: {basketTotalPrice} ₽
        </div>
        <div className="basket__form-price">Доставка: {deliveryPrice} ₽</div>
      </div>
      <hr />
      <div
        className={classNames("basket__form-wrapper", {
          line: promocodeState.isApplied,
        })}
      >
        К оплате:{" "}
        <div
          className={classNames("basket__form-total", {
            line: promocodeState.isApplied,
          })}
        >
          {basketTotalPrice + deliveryPrice} ₽
        </div>
        {promocodeState.isApplied && (
          <div className="discount">{totalPriceWithDiscount} ₽</div>
        )}
      </div>
      <hr />
      <div className="basket__form-row">
        <label htmlFor="promocode">Промокод:</label>
        <input type="text" name="promocode" ref={promocodeInputRef} />
        <PrimaryButton type="button" onClick={promocodeClickHandler}>
          Применить
        </PrimaryButton>
        <Alert
          isOpen={openAlert}
          alertType={promocodeState.type}
          setIsOpen={setOpenAlert}
          closeTimeout={2000}
        >
          {promocodeState.message}
        </Alert>
      </div>
      <PrimaryButton className="basket__form-btn" onClick={submitHandler}>
        Оформить заказ
      </PrimaryButton>
    </div>
  );
};

export default BasketForm;
