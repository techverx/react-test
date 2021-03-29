import * as React from "react";
export interface LabelProps {
  label: String;
}

const Label: React.FunctionComponent<LabelProps> = (props) => (
  <h6>{props.label}</h6>
);

export default Label;
