import React, { useState } from "react";
import InputComponent from "../ReUsableComponents/InputComponent";
import ButtonComponent from "../ReUsableComponents/ButtonComponent";
import "./SignUp.scss";

const SignUP = () => {
  const [inputstate, setInputState] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    confirmPassword: "",
    password: "",
  });
  const { email, userName, password, confirmPassword } = inputstate;

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(e.target.value);
  };

  const handlePasswordError = (e: any) => {
    const { name } = e.target;
    if (name === "password") {
      const uppercaseRegExp   = /(?=.*?[A-Z])/;
      const lowercaseRegExp   = /(?=.*?[a-z])/;
      const digitsRegExp      = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp   = /.{8,}/;
      const passwordLength =      inputstate.password.length;
      const uppercasePassword =   uppercaseRegExp.test(inputstate.password);
      const lowercasePassword =   lowercaseRegExp.test(inputstate.password);
      const digitsPassword =      digitsRegExp.test(inputstate.password);
      const specialCharPassword = specialCharRegExp.test(inputstate.password);
      const minLengthPassword =   minLengthRegExp.test(inputstate.password);
      let errMsg ="";
    if(passwordLength===0){
            errMsg="Password is empty";
    }else if(!uppercasePassword){
            errMsg="At least one Uppercase";
    }else if(!lowercasePassword){
            errMsg="At least one Lowercase";
    }else if(!digitsPassword){
            errMsg="At least one digit";
    }else if(!specialCharPassword){
            errMsg="At least one Special Characters";
    }else if(!minLengthPassword){
            errMsg="At least minumum 8 characters";
    }else{
        errMsg="";
    }
    setError((prevState) => ({
      ...prevState,
      [name]: errMsg,
    }));
    }
    if (name === "confirmPassword") {
      if (inputstate.password !== inputstate.confirmPassword) {
        setError((prevState) => ({
          ...prevState,
          [name]: "password does not match",
        }));
        console.log("error", error);
      } else {
        setError((prevState) => ({
          ...prevState,
          [name]: "Password Matched",
        }));
      }
    }
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    alert("submitted" + inputstate.email + inputstate.userName);
  };

  const passwordMatched = (
    <div style={{ color: "green" }}>{error.confirmPassword}</div>
  );
  const passwordNotMatched = (
    <div style={{ color: "red" }}>{error.confirmPassword}</div>
  );

  return (
    <div className="main-container">
      <form className="signupForm" onSubmit={handleOnSubmit}>
        <InputComponent
          type="email"
          label="Email Address"
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
        <InputComponent
          type="text"
          label="User Name"
          name="userName"
          value={userName}
          onChange={onChangeHandler}
        />
        <InputComponent
          type="password"
          label="New Password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          confirmPasswordValidate={handlePasswordError}
        />
        <div>
          {error.password === "Good Password" ? (
            <div style={{ color: "green" }}>{error.password}</div>
          ) : (
            <div style={{ color: "red" }}>{error.password}</div>
          )}
        </div>

        <InputComponent
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
          confirmPasswordValidate={handlePasswordError}
        />
        <div>
          {error.confirmPassword === "password does not match"
            ? passwordNotMatched
            : passwordMatched}
        </div>

        {/* (e:any) => setInputState({...inputstate, email: e.target.value}) */}
        <div className="buttonClass">
          <ButtonComponent className="SignUpButton" label="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUP;
