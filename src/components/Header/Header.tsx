import { Col, Container, Row } from "components/Layout/Layout";
import NavBar from "components/NavBar/NavBar";
import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC } from "react";
import "./Header.scss";
import HeaderLogin from "./HeaderLogin";
import HeaderSearch from "./HeaderSearch";
import { basketSvg } from "./svg/svg";

const Header: FC = (): JSX.Element => {
  return (
    <header className="header">
      <Container>
        <Row className="header__row">
          <Col xxl={2}>
            <div className="header__logo">C & C</div>
          </Col>
          <Col xxl={5}>
            <NavBar />
          </Col>
          <Col xxl={3}>
            <div className="header__btn-wrapper">
              <HeaderSearch />
              <div className="header__basket">
                <HeaderButton>{basketSvg}</HeaderButton>
              </div>
            </div>
          </Col>
          <Col xxl={2}>
            <HeaderLogin />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
