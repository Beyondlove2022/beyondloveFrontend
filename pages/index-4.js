import Navbar from '../components/_App/Navbar';
import Banner from '../components/HomeFour/Banner';
import Destinations from '../components/Common/Destinations';
import ListingAreaTwo from '../components/Common/ListingAreaTwo';
import CategoryTwo from '../components/Common/CategoryTwo';
import HowItWorks from '../components/Common/HowItWorks';
import Footer from '../components/_App/Footer';

const Index4 = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Destinations titleTwo={true}/>
      <ListingAreaTwo  />
      <CategoryTwo titleTwo={true} />
      <ListingAreaTwo titleTwo={true} />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Index4;
