import { useLocalStorage } from "hooks/useLocalStorage";
import { FC, createContext, useEffect, useState } from "react";
import { IBasketProduct } from "types/productTypes";

type basketFunc = (productId: number) => void;

interface IBasketContext {
  basket: IBasketProduct[];
  addToBasket: (product: IBasketProduct) => void;
  plusOneToBasket: basketFunc;
  minusOneFromBasket: basketFunc;
  removeFromBasket: basketFunc;
  getProductIdInbasket: (productId: number) => number;
  basketTotalCount: number;
  getProductCount: (productId: number) => number;
}

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

interface BasketContextProvider {
  children: React.ReactNode;
}

const BasketContextProvider: FC<BasketContextProvider> = ({ children }) => {
  const [basket, setBasket] = useLocalStorage<IBasketProduct[]>("basket", []);
  const [basketTotalCount, setBasketTotalCount] = useState<number>(0);

  useEffect(() => {
    setBasketTotalCount(
      basket.reduce((acc, item) => (item.count ? acc + item.count : 0), 0)
    );
    console.log(basket);
  }, [basket]);

  const addToBasket = (product: IBasketProduct) => {
    setBasket((prev: IBasketProduct[]) => [...prev, { ...product, count: 1 }]);
  };

  const plusOneToBasket = (productId: number) => {
    setBasket(
      basket.map(product => {
        if (product.id === productId && product.count) {
          return { ...product, count: product.count + 1 };
        }

        return product;
      })
    );
  };

  const minusOneFromBasket = (productId: number) => {
    if (basket[getProductIdInbasket(productId)].count === 1) {
      removeFromBasket(productId);
    } else {
      setBasket(
        basket.map(product => {
          if (product.id === productId && product.count) {
            return { ...product, count: product.count - 1 };
          }

          return product;
        })
      );
    }
  };

  const removeFromBasket = (productId: number) => {
    setBasket(basket.filter(product => product.id !== productId));
  };

  const getProductIdInbasket = (productId: number) =>
    basket.findIndex(product => product.id === productId);

  const getProductCount = (productId: number) =>
    basket[getProductIdInbasket(productId)].count as number;

  const value: IBasketContext = {
    basket,
    addToBasket,
    plusOneToBasket,
    minusOneFromBasket,
    removeFromBasket,
    getProductIdInbasket,
    basketTotalCount,
    getProductCount,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export default BasketContextProvider;
