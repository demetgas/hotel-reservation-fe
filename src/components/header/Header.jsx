import "./header.css";
import {
  faBed,
  faCar,
  faGlobe,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>
              <i>Stays</i>
            </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>
              <i>Flights</i>
            </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>
              <i>Rentals</i>
            </span>
          </div>
        </div>
        <h1 className="headerTitle">
          <i>Seems like you need a nice vacation...</i>
        </h1>
        <p className="headerDesc">
          <i>
            {" "}
            Are you ready for the best time of your life? Well, you are in the
            right place, <u>sign in</u> to make better use of our services.
          </i>
        </p>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faGlobe} className="headerIcon" />
            <input
              type="text"
              placeholder="Enter Location :)"
              className="headerSearchInput"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
