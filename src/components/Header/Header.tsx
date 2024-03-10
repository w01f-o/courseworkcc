import { FC } from "react";
import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import { Col, Container, Row } from "../Layout/Layout";

const Header: FC = (): JSX.Element => {
  return (
    <header className="header">
      <Container>
        <Row className="header__row">
          <Col xxl={2}></Col>
          <Col xxl={5}>
            <NavBar />
          </Col>
          <Col xxl={3}></Col>
          <Col xxl={2}></Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
