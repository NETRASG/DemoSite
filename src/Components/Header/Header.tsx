import React from "react";
import "./Header.scss";
import down_arrow_head from "../../utils/svg_files/down_arrow_head.svg";
import greatlearning_brand from "../../utils/svg_files/greatlearning_brand.svg";

import { Link } from "react-router-dom";

const Header = (props: any) => {
  return (
    <nav className="navbar navbar-expand-md main-header">
      <div className=" container-fluid">
        <a className="navbar-brand" href="#">
          <img src={greatlearning_brand} height="35px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 left-header">
            <Link to="/" className="nav-item">
              <div className="explore-button">
                <span> Explore Programs </span>
                <img src={down_arrow_head} alt="" />
              </div>
            </Link>
            <Link to="/" className="nav-item">
              <div>Career Support</div>
            </Link>
            <Link className="nav-item" to="/">
            <div>Success Stories</div>
            </Link>
            <Link className="nav-item" to="/">
            <div>Study Abroad</div>
            </Link>
            <Link className="nav-item" to="/">
            <div>Enterprise Solutions</div>
            </Link>
            <Link className="nav-item" to="/">
            <div>All Programs</div>
            </Link>
            <Link className="nav-item" to="/">
            <div>More</div> 
            </Link>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
            <Link to="" className="" onClick={props.handleOnClick}>
            <div>Sign Up</div>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
