import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Destinations from '../components/Common/Destinations';
import PlacesArea from '../components/Common/PlacesArea';

import DestinationsTwo from '../components/Common/DestinationsTwo';
import Footer from '../components/_App/Footer';

const DestinationsPage = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle="Destinations" pageName="Destinations"/>
      <Destinations />
      <PlacesArea />
      <DestinationsTwo />
      <Footer />
    </>
  );
};

export default DestinationsPage;
