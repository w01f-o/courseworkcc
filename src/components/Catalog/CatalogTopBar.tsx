import { Col, Row } from "components/Layout/Layout";
import { FC, useContext } from "react";
import { cellsSvg, rowsSvg } from "./svg/svg";
import { CatalogContext } from "context/CatalogContext";
import CustomSelect from "components/UI/CustomSelect/CustomSelect";

const CatalogTopBar: FC = () => {
  const { viewMode, setViewMode, setSortedProducts, sortedProducts } =
    useContext(CatalogContext);

  const changeSelect = (sort: string) => {
    setSortedProducts(
      [...sortedProducts].sort((a, b) => {
        if (sort === "name") {
          return String(a[sort]).localeCompare(String(b[sort]));
        } else if (sort === "priceUp") {
          return a["price"] - b["price"];
        } else {
          return b["price"] - a["price"];
        }
      }),
    );
  };

  return (
    <Row>
      <Col xxl={12}>
        <div className="catalog__topbar">
          <div className="catalog__topbar-sort">
            Сортировка по:{" "}
            <CustomSelect
              defaultVal={{ name: "названию", value: "name" }}
              options={[
                { name: "цене (возрастанию)", value: "priceUp" },
                { name: "цене (убыванию)", value: "priceDown" },
              ]}
              onChange={changeSelect}
            />
          </div>
          <div className="catalog__topbar-switcher">
            <span
              className={`${viewMode === 4 ? "active" : ""}`}
              onClick={() => setViewMode(4)}
            >
              {cellsSvg}
            </span>
            <span
              className={`${viewMode === 12 ? "active" : ""}`}
              onClick={() => setViewMode(12)}
            >
              {rowsSvg}
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CatalogTopBar;
