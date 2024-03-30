import { useLocalStorage } from "hooks/useLocalStorage";
import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { productsList } from "../data/products";
import { IProduct, ITechnicalSpecifications } from "types/productTypes";

export interface IFilterOption {
  filter: keyof ITechnicalSpecifications;
  value: string;
}

interface ICatalogContext {
  viewMode: number;
  setViewMode: Dispatch<SetStateAction<number>>;
  sortedProducts: IProduct[];
  setSortedProducts: Dispatch<SetStateAction<IProduct[]>>;
  filterProducts: IFilterOption[];
  setFilterProducts: Dispatch<SetStateAction<IFilterOption[]>>;
  sortedAndFilteredAndPricedProduct: IProduct[];
  sortByPriceValue: { from: number; to: number };
  setSortByPriceValue: Dispatch<SetStateAction<{ from: number; to: number }>>;
  maxPrice: number;
}

export const CatalogContext = createContext({} as ICatalogContext);

interface CatalogContextProviderProps {
  children: ReactNode;
}

const CatalogContextProvider: FC<CatalogContextProviderProps> = ({
  children,
}) => {
  const [viewMode, setViewMode] = useLocalStorage<number>("catalogViewMode", 4);
  const [sortedProducts, setSortedProducts] =
    useState<IProduct[]>(productsList);
  const [filterProducts, setFilterProducts] = useState<IFilterOption[]>([]);

  const maxPrice = useMemo(() => {
    return Math.max(...productsList.map((product: IProduct) => product.price));
  }, []);

  const [sortByPriceValue, setSortByPriceValue] = useState<{
    from: number;
    to: number;
  }>({
    from: 0,
    to: maxPrice,
  });

  const sortedAndFilteredProducts = useMemo(() => {
    let filteredProducts = [...sortedProducts];

    filterProducts.forEach(({ filter, value }) => {
      filteredProducts = filteredProducts.filter((product) => {
        return product.specifications.technicalSpecifications[filter] === value;
      });
    });

    return filteredProducts;
  }, [filterProducts, sortedProducts]);

  const sortedAndFilteredAndPricedProduct = useMemo(() => {
    return sortedAndFilteredProducts.filter((product) => {
      return (
        product.price >= sortByPriceValue.from &&
        product.price <= sortByPriceValue.to
      );
    });
  }, [sortByPriceValue.from, sortByPriceValue.to, sortedAndFilteredProducts]);

  const value: ICatalogContext = {
    viewMode,
    setViewMode,
    sortedProducts,
    setSortedProducts,
    filterProducts,
    setFilterProducts,
    sortedAndFilteredAndPricedProduct,
    sortByPriceValue,
    setSortByPriceValue,
    maxPrice,
  };

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export default CatalogContextProvider;
