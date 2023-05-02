import Featured from "../../components/featured/Featured";
import FeaturedProps from "../../components/featuredProps/FeaturedProps";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Most preferred hotels</h1>
        <FeaturedProps />
        <MailList/>
      </div>
    </div>
  );
};
export default Home;
