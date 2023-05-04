import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";


const Header = (props:any) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
  <div className=" container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to='/' className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </Link>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
        {/* <Link to='/' className="nav-item"> */}
          <a className="nav-link active" onClick={props.handleOnClick} aria-current="page" href="#">Sign Up</a>
        {/* </Link> */}
        <Link to='/login' className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </Link>
      </ul>
    </div>
  </div>
</nav>


  );
};

export default Header;
