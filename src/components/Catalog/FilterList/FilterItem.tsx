import {FC, memo, useCallback, useContext} from "react";
import { CatalogContext, IFilterOption } from "context/CatalogContext.tsx";
import { ITechnicalSpecifications } from "types/productTypes.ts";

interface FilterItemProps {
  filter: string;
  option: keyof ITechnicalSpecifications;
}

const FilterItem: FC<FilterItemProps> = memo(({ filter, option }) => {
  const { filterProducts, setFilterProducts } = useContext(CatalogContext);

  const isChecked = filterProducts.some(
    (s: IFilterOption) => s.filter === option && s.value === filter,
  );

  const changeFilterHandler = useCallback(() => {
    window.scroll(0, 0);
    if (!isChecked) {
      setFilterProducts([...filterProducts, { filter: option, value: filter }]);
    } else {
      setFilterProducts(
        [...filterProducts].filter((s: IFilterOption) => s.value !== filter),
      );
    }
  }, [filter, filterProducts, isChecked, option, setFilterProducts]);

  return (
    <li className="filter__item" onClick={changeFilterHandler}>
      <input
        type="checkbox"
        checked={isChecked}
        readOnly={true}
        name={filter}
        className="filter__item-checkbox"
      />
      <label htmlFor={filter}>{filter}</label>
    </li>
  );
});

export default FilterItem;
