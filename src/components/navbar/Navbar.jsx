import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext, useState } from "react";
import { ConfirmContext } from "../../context/ConfirmContext";

const Navbar = () => {
  const { user } = useContext(ConfirmContext);

  const handleClick = () =>{
    
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="link" to="/">
          <span className="logo">ELKOS/RM</span>
        </Link>
       {user ? user.username : <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" >Login</button>
        </div>}
        <div className="navItems">
          <button className="navButton" onClick={handleClick}>Log Out</button>
        </div>
      </div>
    </div>
  ); 
};

export default Navbar;
