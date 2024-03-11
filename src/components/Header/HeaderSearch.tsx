import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC } from "react";
import { searchSvg } from "./svg/svg";

const HeaderSearch: FC = (): JSX.Element => {
  return (
    <div className="header__search">
      <HeaderButton>{searchSvg}</HeaderButton>
    </div>
  );
};

export default HeaderSearch;
