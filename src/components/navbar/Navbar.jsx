import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ELKOS-RM</span>
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
