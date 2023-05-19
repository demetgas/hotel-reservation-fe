import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hotel = () => {
  const photos = [
    {
      src: "https://d37brupmljhspk.cloudfront.net/wp-content/uploads/sites/2/2017/11/07154230/salon2.jpg",
    },
    {
      src: "https://d37brupmljhspk.cloudfront.net/wp-content/uploads/sites/2/2017/11/07154230/salon2.jpg",
    },
    {
      src: "https://d37brupmljhspk.cloudfront.net/wp-content/uploads/sites/2/2017/11/07154230/salon2.jpg",
    },
    {
      src: "https://d37brupmljhspk.cloudfront.net/wp-content/uploads/sites/2/2017/11/07154230/salon2.jpg",
    },
    {
      src: "https://d37brupmljhspk.cloudfront.net/wp-content/uploads/sites/2/2017/11/07154230/salon2.jpg",
    },
    {
      src: "https://d37brupmljhspk.cloudfront.net/wp-content/uploads/sites/2/2017/11/07154230/salon2.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>New York 123</span>
          </div>
          <span className="hotelDistance">Great location</span>
          <span className="hotelPriceHighlight">
            Cheapest hotel in New York
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImgWrapper">
                <img src="" alt="" className="hotelImg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
