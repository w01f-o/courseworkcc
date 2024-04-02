import { Col, Row } from "components/Layout/Layout";
import { FC, useContext, useEffect, useState } from "react";
import { cellsSvg, mobileFilterSvg, rowsSvg } from "./svg/svg";
import { CatalogContext } from "context/CatalogContext";
import CustomSelect from "components/UI/CustomSelect/CustomSelect";
import classNames from "classnames";
import { ViewModeEnum } from "../../enums/UIEnums.ts";
import { useMatchMedia } from "hooks/useMatchMedia.ts";
import BurgerMenu from "components/UI/BurgerMenu/BurgerMenu.tsx";
import CatalogFilter from "components/Catalog/CatalogFilter.tsx";

const CatalogTopBar: FC = () => {
  const {
    viewMode,
    setViewMode,
    setSortedProducts,
    sortedProducts,
    filterProducts,
  } = useContext(CatalogContext);

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

  const [isMobile] = useMatchMedia(["(max-width: 992px)"]);
  const [openMobileFilter, setOpenMobileFilter] = useState<boolean>(false);

  const mobileFilterClickHandler = () => {
    setOpenMobileFilter(!openMobileFilter);
  };

  useEffect(() => {
    setOpenMobileFilter(false);
  }, [filterProducts]);

  return (
    <Row>
      <Col xs={12}>
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
          {!isMobile && (
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
                className={classNames({
                  active: viewMode === ViewModeEnum.rows,
                })}
                onClick={setViewModeHandler(ViewModeEnum.rows)}
              >
                {rowsSvg}
              </span>
            </div>
          )}
          {isMobile && (
            <>
              <button
                className="catalog__filter-mobile"
                onClick={mobileFilterClickHandler}
              >
                {mobileFilterSvg}
              </button>
              <BurgerMenu
                isOpen={openMobileFilter}
                setIsOpen={setOpenMobileFilter}
              >
                <CatalogFilter />
              </BurgerMenu>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default CatalogTopBar;
