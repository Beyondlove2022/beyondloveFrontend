import Link from 'next/link';

import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';

const Shop = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Products List' pageName='Products List' />
      <div className='products-area ptb-100'>
        <div className='container'>
          <div className='miran-grid-sorting row align-items-center'>
            <div className='col-lg-6 col-md-6 result-count'>
              <p>
                We found <span className='count'>6</span> products available for you
              </p>
            </div>

            <div className='col-lg-6 col-md-6 ordering'>
              <div className='select-box'>
                <label>Sort By:</label>
                <select className="shop-select">
                  <option>Default</option>
                  <option>Popularity</option>
                  <option>Latest</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                <Link href='/product-details'>

                  <a>
                    <img
                      src='/images/products/products-img1.jpg'
                      className='main-image'
                      alt='image'
                    />
                  </a>
                </Link>
                </div>

                <div className='products-content'>
                  <h3>
                  <Link href='/product-details'>

                    <a>Note Book Mockup</a>
                  </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price'>$321</span>
                    <span className='new-price'>$250</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                <Link href='/product-details'>

                  <a>
                    <img
                      src='/images/products/products-img2.jpg'
                      className='main-image'
                      alt='image'
                    />
                  </a>
                </Link>

                  <div className='sale-tag'>Sale!</div>
                </div>

                <div className='products-content'>
                  <h3>
                  <Link href='/product-details'>

                    <a>Motivational Book Cover</a>
                  </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price'>$210</span>
                    <span className='new-price'>$200</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                <Link href='/product-details'>

                  <a >
                    <img
                      src='/images/products/products-img3.jpg'
                      className='main-image'
                      alt='image'
                    />
                  </a>
                </Link>
                </div>

                <div className='products-content'>
                  <h3>
                  <Link href='/product-details'>

                    <a>Book Cover Softcover</a>
                  </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price'>$210</span>
                    <span className='new-price'>$200</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                <Link href='/product-details'>

                  <a>
                    <img
                      src='/images/products/products-img4.jpg'
                      className='main-image'
                      alt='image'
                    />
                  </a>
                </Link>
                </div>

                <div className='products-content'>
                  <h3>
                  <Link href='/product-details'>

                    <a>Stop and Take a Second</a>
                  </Link>
                  </h3>
                  <div className='price'>
                    <span className='new-price'>$150</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                <Link href='/product-details'>

                  <a>
                    <img
                      src='/images/products/products-img5.jpg'
                      className='main-image'
                      alt='image'
                    />
                  </a>
                </Link>
                </div>

                <div className='products-content'>
                  <h3>
                  <Link href='/product-details'>

                    <a>Real Life Fairytale</a>
                  </Link>
                  </h3>
                  <div className='price'>
                    <span className='new-price'>$240</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                <Link href='/product-details'>

                  <a >
                    <img
                      src='/images/products/products-img6.jpg'
                      className='main-image'
                      alt='image'
                    />
                  </a>
                </Link>

                  <div className='new-tag'>New!</div>
                </div>

                <div className='products-content'>
                  <h3>
                  <Link href='/product-details'>

                    <a>Running From Me</a>
                  </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price'>$150</span>
                    <span className='new-price'>$100</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='pagination-area text-center'>
                <a href='#' className='prev page-numbers'>
                  <i className='bx bx-chevrons-left'></i>
                </a>
                <span className='page-numbers current' aria-current='page'>
                  1
                </span>
                <a href='#' className='page-numbers'>
                  2
                </a>
                <a href='#' className='page-numbers'>
                  3
                </a>
                <a href='#' className='page-numbers'>
                  4
                </a>
                <a href='#' className='next page-numbers'>
                  <i className='bx bx-chevrons-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
      <Footer />
    </>
  );
};

export default Shop;
