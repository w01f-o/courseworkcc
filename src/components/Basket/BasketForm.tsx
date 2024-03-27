import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { BasketContext } from "context/BasketContext.tsx";
import { IBasketProduct } from "types/productTypes.ts";
import PrimaryButton from "components/UI/PrimaryButton/PrimaryButton.tsx";

const BasketForm: FC = () => {
  const [basketTotalPrice, setBasketTotalPrice] = useState<number>(0);
  const { basket, promocodes } = useContext(BasketContext);

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

  const promocodeInputRef = useRef<HTMLInputElement>(null);

  const promocodeClickHandler = () => {
    if (
      promocodeInputRef.current &&
      promocodes.includes(promocodeInputRef.current.value)
    ) {
      setBasketTotalPrice((prev) => prev - 100);
    }
  };

  return (
    <form className="basket__form">
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
      </div>
      <PrimaryButton className="basket__form-btn">Оформить заказ</PrimaryButton>
    </form>
  );
};

export default BasketForm;
