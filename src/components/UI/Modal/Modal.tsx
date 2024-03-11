import { Dispatch, FC, SetStateAction } from "react";
import "./Modal.scss";

interface ModalProps {
  isActive: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isActive, setVisible, children }) => {
  return (
    <div
      className={`modal${isActive ? " open" : ""}`}
      onClick={() => setVisible(false)}
    >
      <div
        className="modal__content"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
