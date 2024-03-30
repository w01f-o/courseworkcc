import {FC, ReactNode} from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { routes } from "routes/routes";
import IRoute from "types/routesType";

const NavBar: FC = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {routes.map((route: IRoute): ReactNode | undefined => {
                    if (route.inNavBar) {
                        return (
                            <li className="nav__item" key={route.name}>
                                <NavLink to={route.path} className="nav__link"  >
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
