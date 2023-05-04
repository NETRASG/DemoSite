import React from "react";
import Header from "../Header/Header";
import SignUP from "../SignUp/SignUP";
import { useSelector } from "react-redux";
import './Home.scss'

const Home = () => {
  const isSignUpShow= useSelector((state:any) => state.isSignUpShow);

  return (
    <div >
      <SignUP isShowSignup={isSignUpShow} />
      <div className="home-container">
        home
      </div>
    </div>
  );
};

export default Home;
