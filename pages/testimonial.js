import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Feedback from '../components/Common/Feedback';
import Footer from '../components/_App/Footer';

const Testimonial = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Testimonials' pageName='Testimonials' />
      <Feedback/>
      <Feedback bgImage="bg-image"/>
      <Footer />
    </>
  );
};

export default Testimonial;
