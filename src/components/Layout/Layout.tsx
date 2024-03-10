import { FC, HTMLAttributes } from "react";

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={`container${className ? ` ${className}` : ""}`} {...props}>
      {children}
    </div>
  );
};

export const Row: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={`row${className ? ` ${className}` : ""}`} {...props}>
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
  ...props
}): JSX.Element => {
  const className: string = [
    `${xxl ? `col-xxl-${xxl}` : ""}`,
    `${xl ? `col-xl-${xl}` : ""}`,
    `${lg ? `col-lg-${lg}` : ""}`,
    `${md ? `col-md-${md}` : ""}`,
    `${sm ? `col-sm-${sm}` : ""}`,
    `${xs ? `col-xs-${xs}` : ""}`,
  ]
    .filter((size: string) => size !== "")
    .join(" ");
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
