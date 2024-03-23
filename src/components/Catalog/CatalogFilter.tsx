import { FC, useContext } from "react";
import FilterList from "components/Catalog/FilterList/FilterList.tsx";
import { CatalogContext } from "context/CatalogContext.tsx";
import { createFiltersArray } from "utils/createFiltersArray.ts";
import ResetFilter from "components/Catalog/FilterList/ResetFilter.tsx";
import { CSSTransition } from "react-transition-group";
import FilterByPrice from "components/Catalog/FilterList/FilterByPrice.tsx";
import { IProduct } from "types/productTypes.ts";

const CatalogFilter: FC = () => {
  const { products, filterProducts, sortByPriceValue } =
    useContext(CatalogContext);

  return (
    <div className="catalog__filter">
      <CSSTransition
        in={
          filterProducts.length > 0 ||
          sortByPriceValue.from !== 0 ||
          sortByPriceValue.to !==
            Math.max(...products.map((product: IProduct) => product.price))
        }
        unmountOnExit
        timeout={200}
        classNames="filter"
      >
        <ResetFilter />
      </CSSTransition>
      <FilterList
        title={"Производитель"}
        filters={createFiltersArray("manufacturer", products)}
        option={"manufacturer"}
      />
      <FilterByPrice />
      <FilterList
        title={"Сенсор"}
        filters={createFiltersArray("sensor", products)}
        option={"sensor"}
      />
      <FilterList
        title={"Переключатели"}
        filters={createFiltersArray("microswitches", products)}
        option={"microswitches"}
      />
      <FilterList
        title={"Тип"}
        filters={createFiltersArray("type", products)}
        option={"type"}
      />
      <FilterList
        title={"Энкодер"}
        filters={createFiltersArray("encoder", products)}
        separator={false}
        option={"encoder"}
      />
    </div>
  );
};

export default CatalogFilter;
