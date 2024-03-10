import { FC } from "react";
import "./Header.scss";

const Header: FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container">
        <div className="row header__row"></div>
      </div>
    </header>
  );
};

export default Header;
