import "./header.css";
import {
  faBed,
  faCalendar,
  faCar,
  faGlobeAmericas,
  faPlane,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
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
            <FontAwesomeIcon icon={faGlobeAmericas} className="headerIcon" />
            <input
              type="text"
              placeholder="Please enter location"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
            <span className="headerSearchText">Dates</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faUserFriends} className="headerIcon" />
            <span className="headerSearchText">Total Passengers</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
