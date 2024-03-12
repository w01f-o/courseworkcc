import { useLocalStorage } from "hooks/useLocalStorage";
import { FC, createContext } from "react";
import { IBasketProduct } from "types/productTypes";

interface IBasketContext {
  basket: IBasketProduct[];
  addToBasket: (product: IBasketProduct) => void;
  plusOneToBasket: (product: IBasketProduct) => void;
  minusOneFromBasket: (product: IBasketProduct) => void;
  removeFromBasket: (product: IBasketProduct) => void;
}

export const BasketContext = createContext<IBasketContext | null>(null);

interface BasketContextProvider {
  children: React.ReactNode;
}

const BasketContextProvider: FC<BasketContextProvider> = ({ children }) => {
  const [basket, setBasket] = useLocalStorage<IBasketProduct[]>("basket", []);

  const addToBasket = (product: IBasketProduct) => {
    setBasket((prev: IBasketProduct[]) => [...prev, { ...product, count: 1 }]);
  };

  const plusOneToBasket = () => {};

  const minusOneFromBasket = () => {};

  const removeFromBasket = () => {};

  const value = {
    basket,
    addToBasket,
    plusOneToBasket,
    minusOneFromBasket,
    removeFromBasket,
  };
  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export default BasketContextProvider;
