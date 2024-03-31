import { FC, ReactNode } from "react";
import "./Footer.scss";
import NavBar from "components/NavBar/NavBar";
import { Col } from "components/Layout/Layout";
import { socialSvg } from "./svg/svg";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__row">
          <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={4}>
            <div className="footer__logo">C & C</div>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={4} sm={4} xs={4}>
            <NavBar />
          </Col>
          <Col xxl={4} xl={4} lg={4} md={5} sm={4} xs={4}>
            <div className="footer__social">
              {socialSvg.map((svg: ReactNode) => svg)}
            </div>
          </Col>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
