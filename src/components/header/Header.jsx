import "./header.css";
import {faCat} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCat} />
        <span>Cat</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
