import { useLocalStorage } from "hooks/useLocalStorage";
import { Dispatch, FC, SetStateAction, createContext } from "react";

interface ICatalogContext {
  viewMode: number;
  setViewMode: Dispatch<SetStateAction<number>>;
}

export const CatalogContext = createContext({} as ICatalogContext);

interface CatalogContextProviderProps {
  children: React.ReactNode;
}

const CatalogContextProvider: FC<CatalogContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [viewMode, setViewMode] = useLocalStorage<number>("catalogViewMode", 4);

  const value: ICatalogContext = {
    viewMode,
    setViewMode,
  };
  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export default CatalogContextProvider;
