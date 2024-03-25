import "./FilterList.scss";
import {FC, memo} from "react";
import FilterItem from "components/Catalog/FilterList/FilterItem.tsx";
import { ITechnicalSpecifications } from "types/productTypes.ts";

interface FilterListProps {
  title: string;
  filters: string[];
  separator?: boolean;
  option: keyof ITechnicalSpecifications;
}

const FilterList: FC<FilterListProps> = memo(({
  title,
  filters,
  separator = true,
  option,
}) => {
  return (
    <>
      <div className="filter">
        <div className="filter__title">{title}</div>
        <ul className="filter__list">
          {filters.map((filter: string) => (
            <FilterItem filter={filter} option={option} key={filter} />
          ))}
        </ul>
      </div>
      {separator && <hr />}
    </>
  );
});

export default FilterList;
