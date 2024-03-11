import { FC } from "react";
import "./Footer.scss";
import NavBar from "components/NavBar/NavBar";
import { Col } from "components/Layout/Layout";
import { socialSvg } from "./svg/svg";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__row">
          <Col xxl={2}>
            <div className="footer__logo">C & C</div>
          </Col>
          <Col xxl={6}>
            <NavBar />
          </Col>
          <Col xxl={4}>
            <div className="footer__social">{socialSvg}</div>
          </Col>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
