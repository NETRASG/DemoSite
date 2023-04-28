import React from "react";
import './InputComponent.scss'
const InputComponent = (props: any) => {
  return (
    <>
      <input
        type={props.type}
        className="form-control input-style"
        placeholder={props.placeHolder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onKeyUp={props.confirmPasswordValidate}
      ></input>
    </>
  );
};

export default InputComponent;
