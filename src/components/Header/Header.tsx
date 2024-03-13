import { Col, Container, Row } from "components/Layout/Layout";
import NavBar from "components/NavBar/NavBar";
import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC } from "react";
import "./Header.scss";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import { basketSvg } from "./svg/svg";
import { NavLink } from "react-router-dom";

const Header: FC = (): JSX.Element => {
  return (
    <header className="header">
      <Container>
        <Row className="header__row">
          <Col xxl={2}>
            <NavLink to="/" className="header__logo">
              C & C
            </NavLink>
          </Col>
          <Col xxl={5}>
            <NavBar />
          </Col>
          <Col xxl={3}>
            <div className="header__btn-wrapper">
              <HeaderSearch />
              <NavLink to="/basket" className="header__basket">
                <HeaderButton>{basketSvg}</HeaderButton>
              </NavLink>
            </div>
          </Col>
          <Col xxl={2} className="flex-end">
            <HeaderAuth />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
