import { FC, createContext } from "react";

interface IBasketContext {
  number: number;
}

export const BasketContext = createContext<IBasketContext | null>(null);

interface BasketContextProvider {
  children: React.ReactNode;
}

const BasketContextProvider: FC<BasketContextProvider> = ({ children }) => {
  const value = {
    number: 1,
  };
  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export default BasketContextProvider;
