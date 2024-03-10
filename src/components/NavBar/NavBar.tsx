import { FC } from "react";
import "./Navbar.scss";

const NavBar: FC = (): JSX.Element => {
  return (
    <nav className="nav">
      <ul className="nav__list"></ul>
    </nav>
  );
};

export default NavBar;
