import "./Alert.scss";
import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertTypeEnum } from "../../../enums/UIEnums.ts";
import { errorSvg, successSvg } from "components/UI/Alert/svg/svg.tsx";

interface AlertProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeTimeout: number;
  alertType: AlertTypeEnum;
}

const Alert: FC<AlertProps> = ({
  children,
  isOpen,
  alertType,
  setIsOpen,
  closeTimeout,
}) => {
  const getAlertType = () => {
    switch (alertType) {
      case AlertTypeEnum.success:
        return successSvg;

      case AlertTypeEnum.error:
        return errorSvg;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, closeTimeout);

    return () => clearTimeout(timeout);
  }, [closeTimeout, isOpen, setIsOpen]);

  return (
    <CSSTransition in={isOpen} unmountOnExit timeout={300} classNames="alert">
      <div className="alert">
        <div className="alert__type">{getAlertType()}</div>
        <div className="alert__content">{children}</div>
      </div>
    </CSSTransition>
  );
};

export default Alert;
