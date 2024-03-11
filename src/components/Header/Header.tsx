import { FC } from "react";
import "./Header.scss";
import { Container, Row, Col } from "components/Layout/Layout";
import NavBar from "components/NavBar/NavBar";

const Header: FC = (): JSX.Element => {
  return (
    <header className="header">
      <Container>
        <Row className="header__row">
          <Col xxl={2}></Col>
          <Col xxl={5}>
            <NavBar />
            <div className="test">testets</div>
          </Col>
          <Col xxl={3}></Col>
          <Col xxl={2}></Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
