import "./Alert.scss";
import { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertType } from "types/UITypes.ts";
import { errorSvg, successSvg } from "components/UI/Alert/svg/svg.tsx";

interface AlertProps {
  children: ReactNode;
  isOpen: boolean;
  alertType: AlertType;
}

const Alert: FC<AlertProps> = ({ children, isOpen, alertType }) => {
  const getAlertType = () => {
    switch (alertType) {
      case AlertType.success:
        return successSvg;

      case AlertType.error:
        return errorSvg;
    }
  };

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
