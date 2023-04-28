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
      const { name, value } = e.target;
      setInputState((prevState)=>({
        ...prevState,
        [name]:value
      }))
        
      };
    const handleOnSubmit = (e: any) => { 
      e.preventDefault();  
      const userData=JSON.parse(localStorage.getItem("inputstate")!)
      console.log(userData.email);

      if(userData.email===inputstate.email && userData.password===inputstate.password){
        alert("login successfully")
      }else{
        alert("login failed")

      }
      
      
       
      };
    

  return (
      <form className="LoginForm" onSubmit={handleOnSubmit}>
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
          <ButtonComponent className="LoginButton" label="Login" />
        </div>
      </form>
  )
}

export default Login
