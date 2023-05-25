import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import greatlearning_brand from "../../utils/svg_files/greatlearning_brand.svg";
import DownArrowHead from "../../utils/svg_files/CustomeSvg/down_arrow_Head"

import { Link } from "react-router-dom";

const Header = (props: any) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);



  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg main-header">
      <div className=" container-fluid">
        <a className="navbar-brand" href="#">
          <img className="image" src={greatlearning_brand} height="30px" />
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
              <div className="explore-button" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
                <div className="button-text">
                  {windowSize[0] >= 992 && windowSize[0] <= 1028
                    ? "Explore "
                    : "Explore Programs"}&nbsp;&nbsp;
                </div>
                <div className="downArrowHead-div"><DownArrowHead/></div>
              </div>
            </Link>
            <Link to="/career-support" className="nav-item">
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
              <div  className="more">
              <div>More</div>
              <div className="downArrowHead-div"><DownArrowHead/></div>
              </div>
            </Link>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
            <Link to="" className="" onClick={props.handleOnClick}>
              <div className="Login-button">LOGIN</div>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
