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
          src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/05/busan.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Busan</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i0.wp.com/terakurat.com/wp-content/uploads/2020/04/images84_1586346880917.jpg?fit=604%2C452&ssl=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Iseltwald</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.tripsavvy.com/thmb/2CesnAjUtp6Of_ZftZgZo0RChWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-540594608-534b6364ee07485881b50354e9753f53.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Copenhangen</h1>
          <h2>123</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
