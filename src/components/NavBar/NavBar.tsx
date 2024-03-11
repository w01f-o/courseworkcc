import { FC } from "react";
import "./Navbar.scss";

const navBarPaths: string[] = ["Каталог", "FAQ", "Контакты", "Магазины"];

const NavBar: FC = (): JSX.Element => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navBarPaths.map(
          (path: string, index: number): JSX.Element => (
            <li className="nav__item" key={index}>
              <a href="#" className="nav__link">
                {path}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
