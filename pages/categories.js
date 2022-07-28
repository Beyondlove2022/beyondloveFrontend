import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CategoryTwo from '../components/Common/CategoryTwo';
import Category from '../components/Common/Category';
import Footer from '../components/_App/Footer';

const Categories = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Listings Category' pageName='Listings Category' />
      <CategoryTwo />
      <Category />
      <Footer />
    </>
  );
};

export default Categories;
