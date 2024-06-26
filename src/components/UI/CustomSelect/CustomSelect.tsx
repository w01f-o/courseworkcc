import {
  FC,
  MouseEvent,
  SelectHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import "./CustomSelect.scss";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

export interface IOption {
  name: string;
  value: string;
}

interface CustomSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  defaultVal: IOption;
  options: IOption[];
  onChange: (sort: string) => unknown;
}

const CustomSelect: FC<CustomSelectProps> = ({
  defaultVal,
  onChange,
  options,
}) => {
  const [selectOption, setSelectOption] = useState<IOption>(defaultVal);
  const [isCollapseSelect, setIsCollapseSelect] = useState<boolean>(false);

  const defaultOptionRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line
    const handleClickOutside = (e: any) => {
      if (!e.target?.matches(".custom-select__current"))
        setIsCollapseSelect(false);
    };

    const handleKeyboardClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCollapseSelect(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    document.body.addEventListener("keydown", handleKeyboardClick);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      document.body.removeEventListener("keydown", handleKeyboardClick);
    };
  }, []);

  useEffect(() => {
    onChange(selectOption.value);
  }, [selectOption]); // eslint-disable-line

  return (
    <div className="custom-select">
      <div
        className="custom-select__current"
        onClick={() => setIsCollapseSelect(!isCollapseSelect)}
      >
        <div className="custom-select__name">{selectOption.name}</div>
        <svg
          width="18"
          height="9"
          viewBox="0 0 18 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames("custom-select__svg", {
            open: isCollapseSelect,
          })}
        >
          <path
            d="M16.84 1L10.32 7.52C9.55 8.29 8.29 8.29 7.52 7.52L1 1"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <CSSTransition
        in={isCollapseSelect}
        unmountOnExit
        timeout={100}
        classNames="select"
      >
        <div className="custom-select__body">
          <div
            className="custom-select__default"
            onClick={() => {
              setSelectOption(defaultVal);
              setIsCollapseSelect(!isCollapseSelect);
            }}
            ref={defaultOptionRef}
          >
            {defaultVal.name}
          </div>
          {options.map((option: IOption) => (
            <div
              key={option.value}
              className="custom-select__option"
              onClick={(e: MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                setSelectOption(option);
                setIsCollapseSelect(!isCollapseSelect);
              }}
              ref={optionRef}
            >
              {option.name}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};
export default CustomSelect;
