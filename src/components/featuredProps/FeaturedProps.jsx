import useFetch from "../../hooks/useFetch";
import "./featuredProps.css";

const FeaturedProps = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fProps">
      {loading ? (
        "It is loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fPropsItem" key={item._id}>
              <img src={item.images[0]} alt="" className="fPropsImg" />
              <span className="fPropsName">{item.name}</span>
              <span className="fPropsCity">{item.cityname}</span>
              <span className="fPropsPrice">
                Starting from €{item.lowestprice}
              </span>
              {item.valuation && (
                <div className="fPropsRating">
                  <button>{item.valuation}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProps;
