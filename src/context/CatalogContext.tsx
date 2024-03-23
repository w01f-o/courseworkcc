import { useLocalStorage } from "hooks/useLocalStorage";
import {Dispatch, FC, SetStateAction, createContext, useState, ReactNode} from "react";
import { productsList } from "../data/products";
import { IProduct } from "types/productTypes";

interface ICatalogContext {
  viewMode: number;
  setViewMode: Dispatch<SetStateAction<number>>;
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const CatalogContext = createContext({} as ICatalogContext);

interface CatalogContextProviderProps {
  children: ReactNode;
}

const CatalogContextProvider: FC<CatalogContextProviderProps> = ({
  children,
}) => {
  const [viewMode, setViewMode] = useLocalStorage<number>("catalogViewMode", 4);
  const [products, setProducts] = useState<IProduct[]>(productsList);

  const value: ICatalogContext = {
    viewMode,
    setViewMode,
    products,
    setProducts,
  };
  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export default CatalogContextProvider;
