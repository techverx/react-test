import * as React from "react";
export interface ButtonProps {
  label: String;
  onClick: Function;
  customClass?: String
}

const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <button
    className={`common-btn-style ${props.customClass}`}
    onClick={() => props.onClick()}
  >
    {props.label}
  </button>
);

export default Button;
