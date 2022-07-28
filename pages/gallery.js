import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const Gallery = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Gallery' pageName='Gallery' />
      <section className='gallery-area bg-f9f9f9 pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery1.jpg'>
                  <img src='/images/gallery/gallery1.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery4.jpg'>
                  <img src='/images/gallery/gallery4.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery5.jpg'>
                  <img src='/images/gallery/gallery5.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery6.jpg'>
                  <img src='/images/gallery/gallery6.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery2.jpg'>
                  <img src='/images/gallery/gallery2.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery7.jpg'>
                  <img src='/images/gallery/gallery7.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery8.jpg'>
                  <img src='/images/gallery/gallery8.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery9.jpg'>
                  <img src='/images/gallery/gallery9.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery-item'>
                <a data-fancybox='gallery' href='/images/gallery/gallery3.jpg'>
                  <img src='/images/gallery/gallery3.jpg' alt='image' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
