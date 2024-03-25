import {ChangeEvent, FC, useCallback, useContext} from "react";
import { CatalogContext } from "context/CatalogContext.tsx";
import { IProduct } from "types/productTypes.ts";
import {productsList} from "../../../data/products.ts";

const FilterByPrice: FC = () => {
  const { sortByPriceValue, setSortByPriceValue, maxPrice } =
    useContext(CatalogContext);

  const handleChangeFromPrice = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value !== "" ? +e.target.value : 0;
    setSortByPriceValue({ ...sortByPriceValue, from: newValue });
  }, [setSortByPriceValue, sortByPriceValue]);

  const handleChangeToPrice = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      e.target.value !== ""
        ? +e.target.value
        : Math.max(...productsList.map((product: IProduct) => product.price));
    setSortByPriceValue({ ...sortByPriceValue, to: newValue });
  }, [setSortByPriceValue, sortByPriceValue]);

  return (
    <>
      <div className="filter">
        <div className="filter__title">Цена</div>
        <div className="filter__price">
          <label htmlFor="priceFrom" className="filter__label">
            От:
            <input
              type="number"
              name="priceFrom"
              className="filter__input"
              min={0}
              max={maxPrice}
              value={sortByPriceValue.from === 0 ? "" : sortByPriceValue.from}
              placeholder="0"
              onChange={handleChangeFromPrice}
            />
          </label>
          <label htmlFor="priceTo" className="filter__label">
            До:
            <input
              type="number"
              name="priceTo"
              className="filter__input"
              min={0}
              max={maxPrice}
              value={
                sortByPriceValue.to === maxPrice ? "" : sortByPriceValue.to
              }
              placeholder={String(sortByPriceValue.to)}
              onChange={handleChangeToPrice}
            />
          </label>
        </div>
      </div>
      <hr />
    </>
  );
};

export default FilterByPrice;
