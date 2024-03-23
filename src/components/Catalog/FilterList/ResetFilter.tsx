import { FC, useContext } from "react";
import { CatalogContext } from "context/CatalogContext.tsx";

const ResetFilter: FC = () => {
  const { setFilterProducts, setSortByPriceValue, maxPrice } =
    useContext(CatalogContext);
  return (
    <button
      onClick={() => {
        setSortByPriceValue({
          from: 0,
          to: maxPrice,
        });
        setFilterProducts([]);
      }}
      className="catalog__filter-reset"
    >
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.84985 2H12.7499C13.4899 2 14.0999 2.61001 14.0999 3.35001V4.82999C14.0999 5.36999 13.7599 6.04 13.4299 6.38L10.5299 8.94C10.1299 9.28 9.85986 9.94999 9.85986 10.49V13.39C9.85986 13.79 9.58988 14.33 9.24988 14.54L8.30987 15.15C7.42987 15.69 6.21985 15.08 6.21985 14V10.43C6.21985 9.95999 5.94987 9.35001 5.67987 9.01001L3.11987 6.31C2.77987 5.97 2.50989 5.36999 2.50989 4.95999V3.41C2.49989 2.61 3.10985 2 3.84985 2Z"
          stroke="#171717"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.4999 9C22.4999 5.88 21.7199 3.91999 19.9099 2.89999C19.3999 2.60999 18.38 2.38999 17.45 2.23999"
          stroke="#171717"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 12V15C2.5 20 4.5 22 9.5 22H15.5C20.5 22 22.5 20 22.5 15V13"
          stroke="#171717"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 13H18.5"
          stroke="#171717"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 17H18.5"
          stroke="#171717"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ResetFilter;
