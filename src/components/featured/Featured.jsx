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
          src="https://images.squarespace-cdn.com/content/v1/5ab8c43b25bf02bd9b349fa8/1541187300889-LLK88KMP68X6NHM3QNGR/David_Bj%C3%B6rken_Northern_lights_photography.jpg?format=1000w"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lapland</h1>
          <h2>123</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
