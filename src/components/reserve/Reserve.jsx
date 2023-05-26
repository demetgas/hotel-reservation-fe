import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Reserve = (setOpen, hotelId) => {
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
    </div>
  );
};

export default Reserve;
