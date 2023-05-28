import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext, useState } from "react";
import { ConfirmContext } from "../../context/ConfirmContext";


const Navbar = () => {
  const { user } = useContext(ConfirmContext);
  const { navigate } = useNavigate();
 
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="link" to="/">
          <span className="logo">ELKOS/RM</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
        {!user ? null : (
          <div className="navItems">
            <button className="navButton" onClick={(e)=>{
              localStorage.remove(user.username) 
            }}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
