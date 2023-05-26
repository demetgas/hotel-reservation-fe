import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=england,korea,finland"
  );
  return (
    <div className="featured">
      {loading ? (
        "It is loading"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.goldentours.com/travelblog/wp-content/uploads/2015/07/shutterstock_555823393-973x649.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>england</h1>
              <h2>{data[0]} properties </h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://koreankulture.com/wp-content/uploads/Gyeongbokgung-Palace-in-Seoul-South-Korea.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>korea</h1>
              <h2>{data[1]} properties </h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/17/39/75.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>finland</h1>
              <h2>{data[2]} properties </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
