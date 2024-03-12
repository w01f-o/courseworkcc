import { Col, Row } from "components/Layout/Layout";
import { FC, useContext } from "react";
import { cellsSvg, rowsSvg } from "./svg/svg";
import { CatalogContext } from "context/CatalogContext";

const CatalogTopBar: FC = (): JSX.Element => {
  const { viewMode, setViewMode } = useContext(CatalogContext);
  return (
    <Row>
      <Col xxl={12}>
        <div className="catalog__topbar">
          <div className="catalog__topbar-sort">Сортировка: по названию</div>
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
