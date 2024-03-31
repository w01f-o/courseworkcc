import { FC, HTMLAttributes } from "react";
import classNames from "classnames";

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames("container", {
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export const Row: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames("row", {
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  xxl?: number;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

export const Col: FC<ColProps> = ({
  xxl,
  xl,
  lg,
  md,
  sm,
  xs,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames({
        [`col-xxl-${xxl}`]: xxl,
        [`col-xl-${xl}`]: xl,
        [`col-lg-${lg}`]: lg,
        [`col-md-${md}`]: md,
        [`col-sm-${sm}`]: sm,
        [`col-${xs}`]: xs,
        [`${className}`]: className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
