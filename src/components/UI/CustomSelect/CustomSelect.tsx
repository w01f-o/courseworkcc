import { FC, SelectHTMLAttributes } from "react";
import "./CustomSelect.scss";

export interface IOption {
  name: string;
  value: string;
}

interface CustomSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  defaultVal: IOption;
  value: string;
  options: IOption[];
  onChange: (sort: string) => unknown;
}

const CustomSelect: FC<CustomSelectProps> = ({
  defaultVal,
  value,
  onChange,
  options,
}) => {
  return (
    <select
      className="custom-select"
      onChange={e => onChange(e.target.value)}
      value={value}
    >
      <option value={defaultVal.value}>{defaultVal.name}</option>
      {options.map((option: IOption) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default CustomSelect;
