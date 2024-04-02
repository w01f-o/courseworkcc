import "./BurgerMenu.scss";
import { Dispatch, FC, SetStateAction, MouseEvent, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <CSSTransition in={isOpen} unmountOnExit classNames="burger" timeout={300}>
      <div className="burger__menu" onClick={() => setIsOpen(false)}>
        <div
          className="burger__menu-content"
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default BurgerMenu;
