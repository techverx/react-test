import * as React from "react";
export interface HeadingProps {
  text: String;
}

const Heading: React.FunctionComponent<HeadingProps> = (props) => (
  <div className="col-sm-12 custom-padding-top-bottom">
    <h3>{props.text}</h3>
  </div>
);

export default Heading;
