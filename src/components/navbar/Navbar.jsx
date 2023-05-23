import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">ELKOS/RM</span>
        </Link>
        <div className="navItems">
          <button className="navButton">
            {" "}
            <b>
              <i>Register</i>
            </b>
          </button>
          <button className="navButton">
            <b>
              <i>Login</i>
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
