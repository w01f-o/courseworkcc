import { FC } from "react";
import "./BottomNavbar.scss";
import HeaderSearch from "components/Header/HeaderSearch/HeaderSearch.tsx";
import { NavLink } from "react-router-dom";
import HeaderButton from "components/UI/HeaderButton/HeaderButton.tsx";
import { basketSvg } from "components/Header/svg/svg.tsx";
import HeaderAuth from "components/Header/HeaderAuth/HeaderAuth.tsx";

const BottomNavBar: FC = () => {
  return (
    <div className="bottom-nav">
      <HeaderSearch />
      <NavLink to="/basket" className="header__basket">
        <HeaderButton>{basketSvg}</HeaderButton>
      </NavLink>
      <HeaderAuth />
    </div>
  );
};

export default BottomNavBar;
