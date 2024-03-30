import { useLocalStorage } from "hooks/useLocalStorage";
import {
  FC,
  createContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { IBasketProduct } from "types/productTypes";
import { promocodes } from "../consts/promocodes.ts";

type basketFunc = (productId: number) => void;

interface IBasketContext {
  basket: IBasketProduct[];
  setBasket: Dispatch<SetStateAction<IBasketProduct[]>>;
  addToBasket: (product: IBasketProduct) => void;
  plusOneToBasket: basketFunc;
  minusOneFromBasket: basketFunc;
  removeFromBasket: basketFunc;
  getProductIdInBasket: (productId: number) => number;
  basketTotalCount: number;
  getProductCount: (productId: number) => number;
  promocodes: string[];
}

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext,
);

interface BasketContextProvider {
  children: ReactNode;
}

const BasketContextProvider: FC<BasketContextProvider> = ({ children }) => {
  const [basket, setBasket] = useLocalStorage<IBasketProduct[]>("basket", []);
  const [basketTotalCount, setBasketTotalCount] = useState<number>(0);

  useEffect(() => {
    setBasketTotalCount(
      basket.reduce((acc, item) => (item.count ? acc + item.count : 0), 0),
    );
  }, [basket]);

  const addToBasket = useCallback(
    (product: IBasketProduct) => {
      setBasket((prev: IBasketProduct[]) => [
        ...prev,
        { ...product, count: 1 },
      ]);
    },
    [setBasket],
  );

  const plusOneToBasket = useCallback(
    (productId: number) => {
      setBasket(
        basket.map((product) => {
          if (product.id === productId && product.count) {
            return { ...product, count: product.count + 1 };
          }

          return product;
        }),
      );
    },
    [basket, setBasket],
  );

  const removeFromBasket = useCallback(
    (productId: number): void => {
      setBasket(basket.filter((product) => product.id !== productId));
    },
    [basket, setBasket],
  );

  const getProductIdInBasket = useCallback(
    (productId: number): number =>
      basket.findIndex((product) => product.id === productId),
    [basket],
  );

  const minusOneFromBasket = useCallback(
    (productId: number): void => {
      if (basket[getProductIdInBasket(productId)].count === 1) {
        removeFromBasket(productId);
      } else {
        setBasket(
          basket.map((product) => {
            if (product.id === productId && product.count) {
              return { ...product, count: product.count - 1 };
            }

            return product;
          }),
        );
      }
    },
    [basket, getProductIdInBasket, removeFromBasket, setBasket],
  );

  const getProductCount = useCallback(
    (productId: number) =>
      basket[getProductIdInBasket(productId)].count as number,
    [basket, getProductIdInBasket],
  );

  const value: IBasketContext = {
    basket,
    setBasket,
    addToBasket,
    plusOneToBasket,
    minusOneFromBasket,
    removeFromBasket,
    getProductIdInBasket,
    basketTotalCount,
    getProductCount,
    promocodes,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export default BasketContextProvider;
