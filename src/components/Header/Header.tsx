import { Col, Container, Row } from "components/Layout/Layout";
import NavBar from "components/NavBar/NavBar";
import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC, useEffect, useState } from "react";
import "./Header.scss";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import { basketSvg } from "./svg/svg";
import { NavLink, useLocation } from "react-router-dom";
import { useMatchMedia } from "hooks/useMatchMedia.ts";
import BurgerButton from "components/UI/BurgerMenu/BurgerButton/BurgerButton.tsx";
import BurgerMenu from "components/UI/BurgerMenu/BurgerMenu.tsx";
import BottomNavBar from "components/BottomNavBar/BottomNavBar.tsx";

const Header: FC = () => {
  const [isMobile] = useMatchMedia(["(max-width: 992px)"]);
  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);

  const burgerClickHandler = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    setBurgerIsOpen(false);
  }, [pathname, setBurgerIsOpen]);

  return (
    <header className="header">
      <Container>
        <Row className="header__row">
          <Col xxl={2} xl={2} lg={2} md={10} sm={10} xs={10}>
            <NavLink to="/" className="header__logo">
              C & C
            </NavLink>
          </Col>
          {!isMobile && (
            <>
              <Col xxl={5} xl={5} lg={6}>
                <NavBar />
              </Col>
              <Col xxl={3} xl={3} lg={2}>
                <div className="header__btn-wrapper">
                  <HeaderSearch />
                  <NavLink to="/basket" className="header__basket">
                    <HeaderButton>{basketSvg}</HeaderButton>
                  </NavLink>
                </div>
              </Col>
              <Col xxl={2} xl={2} lg={2} className="flex-end">
                <HeaderAuth />
              </Col>
            </>
          )}
          {isMobile && (
            <>
              <Col md={2} sm={2} xs={2} className="flex-end">
                <BurgerButton
                  isOpen={burgerIsOpen}
                  onClick={burgerClickHandler}
                />
              </Col>
            </>
          )}
        </Row>
        {isMobile && (
          <>
            <BurgerMenu isOpen={burgerIsOpen} setIsOpen={setBurgerIsOpen}>
              <NavBar />
            </BurgerMenu>
            <BottomNavBar />
          </>
        )}
      </Container>
    </header>
  );
};

export default Header;
