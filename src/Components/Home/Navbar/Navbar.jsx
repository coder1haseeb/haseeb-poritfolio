import React from 'react';
import "./Navbar.css"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{display : "flex" , alignItems : "center" , justifyContent : "center"}}>
      <div className="container-fluid" >
        <p className="navbar-brand" onClick={()=> navigate("/")}>techHaseeb.</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <p className="nav-link active" aria-current="page" onClick={()=> navigate("/")}>Home</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link active" onClick={()=> navigate("/about")}>About</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link active" onClick={()=> navigate("/contact")}>Contact</p>
                </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
