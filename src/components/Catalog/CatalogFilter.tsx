import {FC, memo, useContext} from "react";
import FilterList from "components/Catalog/FilterList/FilterList.tsx";
import { CatalogContext } from "context/CatalogContext.tsx";
import { createFiltersArray } from "utils/createFiltersArray.ts";
import ResetFilter from "components/Catalog/FilterList/ResetFilter.tsx";
import { CSSTransition } from "react-transition-group";
import FilterByPrice from "components/Catalog/FilterList/FilterByPrice.tsx";
import { IProduct } from "types/productTypes.ts";
import {productsList} from "../../data/products.ts";

const CatalogFilter: FC = memo(() => {
  const { filterProducts, sortByPriceValue } =
    useContext(CatalogContext);

  return (
    <div className="catalog__filter">
      <CSSTransition
        in={
          filterProducts.length > 0 ||
          sortByPriceValue.from !== 0 ||
          sortByPriceValue.to !==
            Math.max(...productsList.map((product: IProduct) => product.price))
        }
        unmountOnExit
        timeout={200}
        classNames="filter"
      >
        <ResetFilter />
      </CSSTransition>
      <FilterList
        title={"Производитель"}
        filters={createFiltersArray("manufacturer", productsList)}
        option={"manufacturer"}
      />
      <FilterByPrice />
      <FilterList
        title={"Сенсор"}
        filters={createFiltersArray("sensor", productsList)}
        option={"sensor"}
      />
      <FilterList
        title={"Переключатели"}
        filters={createFiltersArray("microswitches", productsList)}
        option={"microswitches"}
      />
      <FilterList
        title={"Тип"}
        filters={createFiltersArray("type", productsList)}
        option={"type"}
      />
      <FilterList
        title={"Энкодер"}
        filters={createFiltersArray("encoder", productsList)}
        separator={false}
        option={"encoder"}
      />
    </div>
  );
});

export default CatalogFilter;
