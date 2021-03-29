import { useRef } from "react";
import * as React from "react";
import Label from "./Label";
import { useToasts } from "react-toast-notifications";

export interface InpuProps {
  label?: string;
  placeholder?: string;
  button?: boolean;
  disable?: boolean;
  value?: string;
  onChangeText?: Function
}

const Input: React.FunctionComponent<InpuProps> = (props) => {
  const inputRef = useRef(null);
  const { addToast } = useToasts();

  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand("copy");
    inputRef.current.focus();
    addToast("Copied to clipboard", {
      appearance: "info",
      autoDismiss: true,
    });
  };

  return (
    <div>
      {props.label && <Label label={props.label} />}
      <div className="custom-input-wrap">
        <input
          ref={inputRef}
          type="text"
          placeholder={props.placeholder}
          disabled={props.disable ? props.disable : false}
          value={props.value}
          onChange={e => props.onChangeText ? props.onChangeText(e.target.value) : {}}
        />
        {props.button && (
          <button className="btn-clone" onClick={() => copyToClipboard()}>
            <i className="fa fa-clone" aria-hidden="true"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
