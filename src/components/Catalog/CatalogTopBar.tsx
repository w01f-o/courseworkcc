import { Col, Row } from "components/Layout/Layout";
import { FC, useContext } from "react";
import { cellsSvg, rowsSvg } from "./svg/svg";
import { CatalogContext } from "context/CatalogContext";
import CustomSelect from "components/UI/CustomSelect/CustomSelect";
import classNames from "classnames";
import { ViewModeEnum } from "../../enums/UIEnums.ts";

const CatalogTopBar: FC = () => {
  const { viewMode, setViewMode, setSortedProducts, sortedProducts } =
    useContext(CatalogContext);

  const changeSelect = (sort: string) => {
    setSortedProducts(
      [...sortedProducts].sort((a, b) => {
        switch (sort) {
          case "name":
            return String(a[sort]).localeCompare(String(b[sort]));
          case "priceUp":
            return a["price"] - b["price"];
          default:
            return b["price"] - a["price"];
        }
      }),
    );
  };

  const setViewModeHandler = (mode: ViewModeEnum) => (): void => {
    setViewMode(mode);
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
              className={classNames({
                active: viewMode === ViewModeEnum.cells,
              })}
              onClick={setViewModeHandler(ViewModeEnum.cells)}
            >
              {cellsSvg}
            </span>
            <span
              className={classNames({ active: viewMode === ViewModeEnum.rows })}
              onClick={setViewModeHandler(ViewModeEnum.rows)}
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
