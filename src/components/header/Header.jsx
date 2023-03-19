import "./header.css";
import { faBed, faCar, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
        </div>
        <h1 className="headerTitle">Seems like you need a nice vacation...</h1>
        <p className="headerDesc">
          Are you ready for the best time of your life? Well, you are in the
          right place, <u>sign in</u> to make better use of our services.
        </p>
        <button className="headerBtn">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
