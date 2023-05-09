import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://media.cntraveler.com/photos/61d2c535d34478cd18de0ded/16:9/w_2560,c_limit/Greenwich-Hotel-Lobby-CourtesyHotel.jpeg"
        alt=""
        className="siImg"
      />
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
      <div className="siDetails"></div>
    </div>
  );
};

export default SearchItem;
