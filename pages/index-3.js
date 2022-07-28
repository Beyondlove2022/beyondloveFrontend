import NavbarTwo from '../components/_App/NavbarTwo';
import Banner from '../components/HomeThree/Banner';
import Category from '../components/Common/Category';
import ListingArea from '../components/HomeThree/ListingArea';
import PlacesArea from '../components/Common/PlacesArea';
import Feedback from '../components/HomeThree/Feedback';
import MostVisitedListing from '../components/HomeThree/MostVisitedListing';
import BusinessArea from '../components/HomeThree/BusinessArea';
import Blog from '../components/HomeThree/Blog';
import ManageBusiness from '../components/HomeThree/ManageBusiness';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';

const Index3 = () => {
  return (
    <>
      <NavbarTwo />
      <Banner />
      <Category />
      <ListingArea />
      <PlacesArea />
      <Feedback/>
      <MostVisitedListing/>
      <BusinessArea/>
      <Blog/>
      <ManageBusiness/>
      <Subscribe/>
      <Footer />
    </>
  );
};

export default Index3;
