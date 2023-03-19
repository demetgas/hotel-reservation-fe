import "./header.css";
import { faCar, faCat, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem">
          <FontAwesomeIcon icon={faCat} />
          <span>Cat</span>
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
