import "./featuredProps.css";

const FeaturedProps = () => {
  return (
    <div className="fProps">
        <div className="fPropsItem">
        <img src="https://secretlifeoffatbacks.com/wp-content/uploads/2018/12/00000IMG_00000_BURST20181206164743251_COVER-01.jpg" alt="" className="fPropsImg" />
        <span className="fPropsName">Conrad Tokyo</span>
        <span className="fPropsCity">Tokyo</span>
        <span className="fPropsPrice">Starting from $494</span>
        <div className="fPropsRating">
            <button>9.2</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fPropsItem">
        <img src="https://gulfbusiness.com/wp-content/uploads/2023/01/Dubai-Hotels-occupancy-rises-in-December-2022-E1BAv5VXsAAFIJl.jpg" alt="" className="fPropsImg" />
        <span className="fPropsName">Burj Al Arab</span>
        <span className="fPropsCity">Dubai</span>
        <span className="fPropsPrice">Starting from $985</span>
        <div className="fPropsRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fPropsItem">
        <img src="https://wildspinoftheworld.files.wordpress.com/2017/11/fordstue-fjaerland-norway-balcony-hotel-best_1.jpg?w=840" alt="" className="fPropsImg" />
        <span className="fPropsName">Fjærland Fjordstove</span>
        <span className="fPropsCity">Norway</span>
        <span className="fPropsPrice">Starting from $195</span>
        <div className="fPropsRating">
            <button>8.2</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fPropsItem">
        <img src="https://media.cntraveller.com/photos/6336cd8dd68dee18a8b96f0b/1:1/w_1707,h_1707,c_limit/Amanruya,%20Turkey%20-%20Main%20Swimming%20Pool_27493-Amanruya,%20Bodrum-sept22-courtesty%20of%20aman-global.jpeg" alt="" className="fPropsImg" />
        <span className="fPropsName">Amanruya</span>
        <span className="fPropsCity">Bodrum</span>
        <span className="fPropsPrice">Starting from $850</span>
        <div className="fPropsRating">
            <button>8.7</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
};

export default FeaturedProps;
