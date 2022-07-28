import NavbarTwo from '../components/_App/NavbarTwo';
import Banner from '../components/HomeTwo/Banner';
import CategoryTwo from '../components/Common/CategoryTwo';
import ListingAreaTwo from '../components/Common/ListingAreaTwo';
import Destinations from '../components/Common/Destinations';
import Feedback from '../components/Common/Feedback';
import EventsArea from '../components/HomeTwo/EventsArea';
import HowItWorks from '../components/Common/HowItWorks';
import Blog from '../components/HomeTwo/Blog';
import AppDownload from '../components/Common/AppDownload';
import Footer from '../components/_App/Footer';

const Index2 = () => {
  return (
    <>
      <NavbarTwo />
      <Banner />
      <CategoryTwo titleOne={true} />
      <ListingAreaTwo bgColor="bg-f9f9f9" titleOne={true} />
      <Destinations titleOne={true} paddingBottom70="pb-70" />
      <Feedback title={true} bgColor="" bgImage="bg-image" />
      <EventsArea />
      <HowItWorks bgColor="bg-f9f9f9" />
      <Blog />
      <AppDownload />
      <Footer />
    </>
  );
};

export default Index2;
