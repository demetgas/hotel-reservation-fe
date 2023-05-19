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
          <button className="hotelBtn">Reserve or Book Now!</button>
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
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Coolest hotel in New York</h1>
              <p className="hotelDesc">
                Situated in the upscale SoHo neighborhood, this luxury hotel is
                close to art galleries, designer shops and popular restaurants.
                This modern hotel features an outdoor restaurant and all rooms
                have city views. The elegant guest rooms at the Hotel Soho Grand
                come with free Wi-Fi, a flat-screen TV and a clcok radio.
                Designer bathrobes and toiletries are also provided. Guests can
                enjoy American cuisine and signature cocktails in the Club Room,
                the Grand Bar and Lounge. Opening seasonally, Gilligans is an
                outdoor restaurant offering a fresh summer menu. Soho Grand
                Hotel offers a 24-hour gym and business center. A helpful
                concierge desk is also available 24-hours. Little Italy is a
                10-minute walk away. This is our guests' favourite part of New
                York, according to independent reviews.
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
              <button className="hotelBtn">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
