import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <div className="siDesc">
        <h1 className="siTitle"> Courtesy The Greenwich</h1>
        <span className="siDistance">5 mins from central park</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSub">Greatest hotel in New York</span>
        <span className="siFeatures">1 bathroom - 2 rooms</span>
        <span className="siCancelOp">Free cancellation</span>
        <div className="siCancelOpSub">
          Get this price, cancel later if you want.
        </div>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">€123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckBtn">Reserve</button>
        </div>
      </div>
      <img src={item.images[0]} alt="" className="siImg" />
    </div>
  );
};

export default SearchItem;
