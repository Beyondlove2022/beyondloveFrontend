import Link from 'next/link';

import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const FourZeroFour = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='404 Error' pageName='404 Error' />
      <section className='error-area bg-f9f9f9 ptb-100'>
        <div className='container'>
          <div className='error-content'>
            <img src='/images/error.png' alt='image' />
            <h3>Error 404 : Page Not Found</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href='/'>
              <a className='default-btn'>Back to Homepage</a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FourZeroFour;
