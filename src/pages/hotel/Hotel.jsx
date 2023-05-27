import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faLocationDot,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { ConfirmContext } from "../../context/ConfirmContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { date, options } = useContext(SearchContext);
  const { user } = useContext(ConfirmContext);
  const navigate = useNavigate();

  const ms_per_day = 1000 * 60 * 60 * 24;
  function dayDif(date1, date2) {
    const timeDif = Math.abs(date2.getTime() - date1.getTime());
    const dif_days = Math.ceil(timeDif / ms_per_day);
    return dif_days;
  }
  const days = dayDif(date[0].endDate, date[0].startDate);
  const handleOpen = (i) => {
    setSlideNum(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNum;

    if (direction === "l") {
      newSlideNum = slideNum === 0 ? 5 : slideNum - 1;
    } else {
      newSlideNum = slideNum === 5 ? 0 : slideNum + 1;
    }

    setSlideNum(newSlideNum);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "It is loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="x"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                className="rl"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img src={data.images[slideNum]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="rl"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="hotelBtn">Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Great location {data.distancefromcenter}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book for a beautiful price only for €{data.lowestprice}.
            </span>
            <div className="hotelImages">
              {data.images?.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc"> {data.description}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night getaway</h1>
                <span>{data.d2}</span>
                <h2>
                  <b>{days * data.lowestprice * options.room}€</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelid={id} />}
    </div>
  );
};

export default Hotel;
