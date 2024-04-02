import { PageRoute, routes } from "routes/routes.tsx";
import { NavLink } from "react-router-dom";
import "./MobileNav.scss";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__list">
        {routes.map((route: PageRoute) => {
          if (route.inMobileNav) {
            return (
              <li className="mobile-nav__item" key={route.path}>
                <NavLink to={route.path} className="mobile-nav__link">
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

export default MobileNav;
