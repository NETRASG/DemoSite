import React, { useEffect, useState } from "react";
import InputComponent from "../ReUsableComponents/InputComponent";
import ButtonComponent from "../ReUsableComponents/ButtonComponent";
import "./SignUp.scss";
import { useDispatch } from "react-redux";

export const passwordPattern = (inputstate: any) => {
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp = /.{8,}/;
  const passwordLength = inputstate.password.length;
  const uppercasePassword = uppercaseRegExp.test(inputstate.password);
  const lowercasePassword = lowercaseRegExp.test(inputstate.password);
  const digitsPassword = digitsRegExp.test(inputstate.password);
  const specialCharPassword = specialCharRegExp.test(inputstate.password);
  const minLengthPassword = minLengthRegExp.test(inputstate.password);
  return {
    passwordLength,
    uppercasePassword,
    lowercasePassword,
    digitsPassword,
    specialCharPassword,
    minLengthPassword,
  };
};

const SignUP = (props: any) => {
  const [inputstate, setInputState] = useState({
    email: "netra@gmail.com",
    userName: "Netra",
    password: "1234",
    confirmPassword: "1234",
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
    const patternCheck = passwordPattern(inputstate);
    if (name === "password") {
      let errMsg = "";
      if (patternCheck.passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!patternCheck.uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!patternCheck.lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!patternCheck.digitsPassword) {
        errMsg = "At least one digit";
      } else if (!patternCheck.specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!patternCheck.minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setError((prevState) => ({
        ...prevState,
        [name]: errMsg,
      }));
    }
    if (name === "confirmPassword" && inputstate.confirmPassword.length !== 0) {
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
    // alert("submitted" + inputstate.email + inputstate.userName);
    if (error.password.length !== 0) {
      alert("Something went wrong");
    } else {
      alert("Submitted");
    }
  };
  const dispatch=useDispatch();
  const handleSignupClick=()=>{
    dispatch({type:"CLICK"});
  }

  const passwordMatched = (
    <div style={{ color: "green" }}>{error.confirmPassword}</div>
  );
  const passwordNotMatched = (
    <div style={{ color: "red" }}>{error.confirmPassword}</div>
  );

  useEffect(() => {
    localStorage.setItem("inputstate", JSON.stringify(inputstate));
  });

  return (
    <div className="main">
      <div className={`${props.isShowSignup ? "active" : ""} container`}>
        <div className={"signupForm"}>
          <div className="d-flex justify-content-center ">
            <div className="image-container d-none d-md-inline-flex">
              <span className="signUpText">Hey there! Are you new user.</span>
              <img
                className="signUpImage"
                src="https://d1vwxdpzbgdqj.cloudfront.net/assets/header/welcome_back-42b039cd2c304750320c7556aa2ad19b20fbe3dd7393799cd2d64ff297ab597b.svg"
              ></img>
            </div>

            <div className="input-container">
              <div className="close">
              <div className="closeButton" onClick={handleSignupClick} aria-label="Close">
                <a href="#" aria-hidden="true">&times;</a>
              </div>
              </div>
              <span className="signUpText">Sign Up</span>
              <form className="" onSubmit={handleOnSubmit}>
                <InputComponent
                  type="email"
                  placeHolder="Email"
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                />
                <InputComponent
                  type="text"
                  placeHolder="User Name"
                  name="userName"
                  value={userName}
                  onChange={onChangeHandler}
                />
                <InputComponent
                  type="password"
                  placeHolder="New Password"
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
                  placeHolder="Confirm Password"
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
                <div className="buttonClass">
                  <ButtonComponent className="SignUpButton" label="Sign Up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
