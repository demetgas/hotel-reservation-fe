import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
const Reserve = ({ setOpen, hotelId }) => {
  
  const { data, loading, error } = useFetch;

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Please selecet rooms:</span>
      </div>
    </div>
  );
};

export default Reserve;
