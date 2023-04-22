import React from "react";

const InputComponent = (props: any) => {
  return (
    <>
      <label className="form-label">{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onKeyUp={props.confirmPasswordValidate}
      ></input>
    </>
  );
};

export default InputComponent;
