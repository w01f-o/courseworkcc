import { Dispatch, FC, SetStateAction } from "react";
import "./Modal.scss";
import { CSSTransition } from "react-transition-group";

interface ModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, setOpen, children }): JSX.Element => {
  return (
    <CSSTransition in={isOpen} unmountOnExit timeout={300} classNames="modal">
      <div className="modal" onClick={() => setOpen(false)}>
        <div
          className="modal__content"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
