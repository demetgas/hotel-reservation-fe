import "./searchItem.css";

const SearchItem = () => {
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
      <div className="siDetails">details</div>
      <img
        src="https://goop-img.com/wp-content/uploads/2015/07/greenwichhotel4.jpg"
        alt=""
        className="siImg"
      />
    </div>
  );
};

export default SearchItem;
