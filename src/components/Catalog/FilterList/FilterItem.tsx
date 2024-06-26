import { FC, useContext } from "react";
import { CatalogContext, IFilterOption } from "context/CatalogContext.tsx";
import { ITechnicalSpecifications } from "types/productTypes.ts";

interface FilterItemProps {
  filter: string;
  option: keyof ITechnicalSpecifications;
}

const FilterItem: FC<FilterItemProps> = ({ filter, option }) => {
  const { filterProducts, setFilterProducts } = useContext(CatalogContext);

  const isChecked = filterProducts.some(
    (s: IFilterOption) => s.filter === option && s.value === filter,
  );

  const changeFilterHandler = () => {
    document.documentElement.scrollIntoView({ behavior: "smooth" });

    if (!isChecked) {
      setFilterProducts([...filterProducts, { filter: option, value: filter }]);
    } else {
      setFilterProducts(
        [...filterProducts].filter((s: IFilterOption) => s.value !== filter),
      );
    }
  };

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
};

export default FilterItem;
