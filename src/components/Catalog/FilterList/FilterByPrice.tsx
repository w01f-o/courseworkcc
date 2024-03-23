import { ChangeEvent, FC, useContext } from "react";
import { CatalogContext } from "context/CatalogContext.tsx";
import { IProduct } from "types/productTypes.ts";

const FilterByPrice: FC = () => {
  const { sortByPriceValue, setSortByPriceValue, products } =
    useContext(CatalogContext);

  const handleChangeFromPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value !== "" ? +e.target.value : 0;
    setSortByPriceValue({ ...sortByPriceValue, from: newValue });
  };

  const handleChangeToPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      e.target.value !== ""
        ? +e.target.value
        : Math.max(...products.map((product: IProduct) => product.price));
    setSortByPriceValue({ ...sortByPriceValue, to: newValue });
  };

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
              value={
                sortByPriceValue.to ===
                Math.max(...products.map((product: IProduct) => product.price))
                  ? ""
                  : sortByPriceValue.to
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
