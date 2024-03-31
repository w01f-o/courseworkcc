import "./BurgerMenu.scss";
import { Dispatch, FC, SetStateAction, MouseEvent, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "routes/routes.tsx";
import IRoute from "types/routesType.ts";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <CSSTransition in={isOpen} unmountOnExit classNames="burger" timeout={300}>
      <div className="burger__menu" onClick={() => setIsOpen(false)}>
        <div
          className="burger__menu-content"
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <nav className="mobile-nav">
            <ul className="mobile-nav__list">
              {routes.map((route: IRoute) => {
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
        </div>
      </div>
    </CSSTransition>
  );
};

export default BurgerMenu;
