import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <div className="siDesc">
        <h1 className="siTitle"> {item.name}</h1>
        <span className="siDistance">
          {item.distancefromcenter}m from center
        </span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSub">Greatest hotel in New York</span>
        <span className="siFeatures">{item.description}</span>
        <span className="siCancelOp">Free cancellation</span>
        <div className="siCancelOpSub">
          Get this price, cancel later if you want.
        </div>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">€{item.lowestprice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckBtn">Reserve</button>
          </Link>
        </div>
      </div>
      <img src={item.images[0]} alt="" className="siImg" />
    </div>
  );
};

export default SearchItem;
