import React from "react";
import Header from "../Header/Header";
import SignUP from "../SignUp/SignUP";
import { useSelector } from "react-redux";
import early_career_persona from "../../utils/png_files/early_career_persona.png";
import profile_1 from '../../utils/jpeg_files/profile_1.jpg'
import "./Home.scss";
import DownArrowHead from "../../utils/svg_files/CustomeSvg/down_arrow_Head"


const Home = () => {
  return (
    <div className=" d-flex justify-content-center home-container ">
      <div className=" left-container">
        <div className="d-flex dropdown">
          
          <img className="profile" src={profile_1} width='20%' alt="profile"/>
          <div >
            <div className="small-text">Browsing as</div>
            <div className="big-text">Early career professionals</div>
          </div>
          <div className="down-arrow"><DownArrowHead/></div>
        </div>
        <div> heloooooo</div>
      </div>
      <div className="d-flex justify-content-center align-items-center right-container">
        
          <img src={early_career_persona} width="80%" height="100%" />
       
      </div>
    </div>
  );
};

export default Home;
