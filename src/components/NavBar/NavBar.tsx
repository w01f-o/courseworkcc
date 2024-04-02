import { FC, ReactNode } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { PageRoute, routes } from "routes/routes";

const NavBar: FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {routes.map((route: PageRoute): ReactNode | undefined => {
          if (route.inNavbar) {
            return (
              <li className="nav__item" key={route.name}>
                <NavLink to={route.path} className="nav__link">
                  {route.name}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
