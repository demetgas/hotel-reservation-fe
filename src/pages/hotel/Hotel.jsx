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
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Hotel = () => {
  const location = useLocation();
  const id = location.split("/"[2]);
  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/${id}`);

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
                <img src={data.images[slideNum].src} alt="" className="sliderImg" />
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
              Great location {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book for a beautiful price only for €{data.lowestprice}.
            </span>
            <div className="hotelImages">
              {data.images.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Coolest hotel in New York</h1>
                <p className="hotelDesc">
                  Situated in the upscale SoHo neighborhood, this luxury hotel
                  is close to art galleries, designer shops and popular
                  restaurants. This modern hotel features an outdoor restaurant
                  and all rooms have city views. The elegant guest rooms at the
                  Hotel Soho Grand come with free Wi-Fi, a flat-screen TV and a
                  clcok radio. Designer bathrobes and toiletries are also
                  provided. Guests can enjoy American cuisine and signature
                  cocktails in the Club Room, the Grand Bar and Lounge. Opening
                  seasonally, Gilligans is an outdoor restaurant offering a
                  fresh summer menu. Soho Grand Hotel offers a 24-hour gym and
                  business center. A helpful concierge desk is also available
                  24-hours. Little Italy is a 10-minute walk away. This is our
                  guests' favourite part of New York, according to independent
                  reviews.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a weekend getaway</h1>
                <span>
                  Canal Street Subway Station is a 5-minute walk from Soho Grand
                  and provides easy access to Central Park and Times Square.
                </span>
                <h2>
                  <b>975€</b> (2 nights)
                </h2>
                <button>Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
