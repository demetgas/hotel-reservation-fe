import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="https://i.insider.com/5db763fa045a312d752323b2?width=750&format=jpeg&auto=webp" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://apartrooms.co.uk/wp-content/uploads/elementor/thumbs/Apartrooms-No-6-Yellow_10-scaled-1-ovwpk2vdq755v2z9k97reht146qqtpmxso0qe2a7b0.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Aparts</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/16:9/w_2580,c_limit/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://cdn1.matadornetwork.com/blogs/1/2021/03/secluded-smoky-mountains-cabins.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>123</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
