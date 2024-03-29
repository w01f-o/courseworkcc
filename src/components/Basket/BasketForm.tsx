import {
  FC,
  FormEvent,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BasketContext } from "context/BasketContext.tsx";
import { IBasketProduct } from "types/productTypes.ts";
import PrimaryButton from "components/UI/PrimaryButton/PrimaryButton.tsx";
import Alert from "components/UI/Alert/Alert.tsx";
import { AlertType } from "types/UITypes.ts";

enum promocodeAlertText {
  success = "Промокод применён",
  warning = "Промокод уже применён",
  error = "Введённого промокода не существует",
}

interface PromocodeState {
  type: AlertType;
  message: promocodeAlertText;
  isApplied: boolean;
}

const BasketForm: FC = () => {
  const { basket, setBasket, promocodes } = useContext(BasketContext);

  const [basketTotalPrice, setBasketTotalPrice] = useState<number>(0);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [promocodeState, setPromocodeState] = useState<PromocodeState>({
    type: AlertType.error,
    message: promocodeAlertText.error,
    isApplied: false,
  });

  const deliveryPrice = useMemo(() => {
    return basketTotalPrice < 5999 ? 400 : 0;
  }, [basketTotalPrice]);

  useEffect(() => {
    setBasketTotalPrice(
      basket.reduce(
        (acc: number, product: IBasketProduct) =>
          acc + product.price * (product.count ? product.count : 1),
        0,
      ),
    );
  }, [basket]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenAlert(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [openAlert]);

  const promocodeInputRef = useRef<HTMLInputElement>(null);

  const promocodeClickHandler = () => {
    setOpenAlert(true);

    if (promocodeInputRef.current) {
      if (
        promocodes.includes(promocodeInputRef.current.value) &&
        !promocodeState.isApplied
      ) {
        setPromocodeState({
          type: AlertType.success,
          message: promocodeAlertText.success,
          isApplied: true,
        });
        setBasketTotalPrice((prev) => prev - 100);
      } else if (promocodeState.isApplied) {
        setPromocodeState({
          type: AlertType.error,
          message: promocodeAlertText.warning,
          isApplied: true,
        });
      } else {
        setPromocodeState({
          type: AlertType.error,
          message: promocodeAlertText.error,
          isApplied: false,
        });
      }
    }
  };

  return (
    <form
      className="basket__form"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBasket([]);
      }}
    >
      <div className="basket__form-content">
        <h5 className="basket__form-title">Итого:</h5>
        <div className="basket__form-price">
          Стоимость товаров: {basketTotalPrice} ₽
        </div>
        <div className="basket__form-price">Доставка: {deliveryPrice} ₽</div>
      </div>
      <hr />
      <div className="basket__form-total">
        К оплате: {basketTotalPrice + deliveryPrice} ₽
      </div>
      <hr />
      <div className="basket__form-row">
        <label htmlFor="promocode">Промокод:</label>
        <input type="text" name="promocode" ref={promocodeInputRef} />
        <PrimaryButton type="button" onClick={promocodeClickHandler}>
          Применить
        </PrimaryButton>
        <Alert isOpen={openAlert} alertType={promocodeState.type}>
          {promocodeState.message}
        </Alert>
      </div>
      <PrimaryButton className="basket__form-btn">Оформить заказ</PrimaryButton>
    </form>
  );
};

export default BasketForm;
