import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUP from "../SignUp/SignUP";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Home from "../Home/Home";
import { useSelector, useDispatch } from "react-redux";
import ExplorePage from "../Pages/ExporePage/ExplorePage";
import CareerPage from "../Pages/CareerPage/CareerPage";

const ApplicationRouter = () => {
  const dispatch = useDispatch();

  const isSignUpShow = useSelector((state: any) => state.isSignUpShow);
  const isExplorePageShow = useSelector((state: any) => state.isExplorePageShow);

  const handleSignupClick = () => {
    dispatch({ type: "CLICK" });
  };

  const handleOnMouseEnter = () => {
    dispatch({ type: "MOUSE_ENTER" });
    console.log(isExplorePageShow)

  };

  const handleOnMouseLeave = () => {
    dispatch({ type: "MOUSE_LEAVE" });
    console.log(isExplorePageShow)

  };
  return (
    
    <BrowserRouter>
      <Header
        handleOnClick={handleSignupClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      <SignUP isShowSignup={isSignUpShow} />
     
      <ExplorePage isExplorePageDisplay={isExplorePageShow}></ExplorePage>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route  path='/signup' element={<SignUP/>}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/career-support" element={<CareerPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRouter;
