import React, { useState } from 'react'
import InputComponent from '../ReUsableComponents/InputComponent'
import ButtonComponent from '../ReUsableComponents/ButtonComponent'
import "./Login.scss";


const Login = () => {
    const [inputstate, setInputState] = useState({
        email: "",

        password: "",
       
      });
  const { email, password } = inputstate;

    const onChangeHandler = (e: any) => {
        
      };
    const handleOnSubmit = (e: any) => {
        
       
      };
    

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
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          
        />

        <div className="buttonClass">
          <ButtonComponent className="SignUpButton" label="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login
