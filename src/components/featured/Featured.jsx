import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://live.staticflickr.com/4613/25485358037_902d7e3843_b.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Prizren</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://koreankulture.com/wp-content/uploads/Gyeongbokgung-Palace-in-Seoul-South-Korea.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Seoul</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/1340496259/photo/camping-under-the-northern-lights.jpg?s=612x612&w=0&k=20&c=tsnT1-qIMcqg2swZA4LSHOSkuDU2rKxEJVPaK9LabDo="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Iseltwald</h1>
          <h2>123</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
