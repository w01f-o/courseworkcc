import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import "./Modal.scss";
import { CSSTransition } from "react-transition-group";
import { MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, setOpen, children }) => {
  return (
    <CSSTransition in={isOpen} unmountOnExit timeout={300} classNames="modal">
      <div className="modal" onMouseDown={() => setOpen(false)}>
        <div
          className="modal__content"
          onMouseDown={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
