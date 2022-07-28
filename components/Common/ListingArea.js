import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 20,
  nav: true,
  mouseDrag: false,
  items: 3,
  dots: true,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};
const optionsTwo = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  items: 1,
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i className='flaticon-left-chevron'></i>",
    "<i className='flaticon-right-chevron'></i>",
  ],
};

const ListingArea = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='listings-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Trending Listings Right Now</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='listings-slides owl-theme'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <img src='/images/listings/listings1.jpg' alt='image' />
                    <Link href="/single-listings">

                    <a className='link-btn'></a>
                    </Link>
                    <a href='#' className='bookmark-save'>
                      <i className='flaticon-heart'></i>
                    </a>
                    <a href='#' className='category'>
                      <i className='flaticon-cooking'></i>
                    </a>
                  </div>

                  <div className='listings-content'>
                    <div className='author'>
                      <div className='d-flex align-items-center'>
                        <img src='/images/user1.jpg' alt='image' />
                        <span>Taylor</span>
                      </div>
                    </div>
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i>
                          Restaurant
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='flaticon-pin'></i> New York, USA
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Chipotle Mexican Grill</a>
                    </Link>
                    </h3>
                    <span className='status'>
                      <i className='flaticon-save'></i> Open Now
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='rating'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <span className='count'>(45)</span>
                      </div>
                      <div className='price'>
                        Start From <span>$150</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <div className='listings-image-slides owl-theme'>
                   
                      <div className='single-image'>
                        <img src='/images/listings/listings2.jpg' alt='image' />
                        <Link href="/single-listings">

                        <a className='link-btn'></a>
                        </Link>
                      </div>
              {/* <OwlCarousel {...optionsTwo}>

                      <div className='single-image'>
                        <img src='/images/listings/listings4.jpg' alt='image' />
                        <a href='single-listings.html' className='link-btn'></a>
                      </div>
                      </OwlCarousel> */}
                    </div>
                    <a href='#' className='bookmark-save'>
                      <i className='flaticon-heart'></i>
                    </a>
                    <a href='#' className='category'>
                      <i className='flaticon-cooking'></i>
                    </a>
                  </div>

                  <div className='listings-content'>
                    <div className='author'>
                      <div className='d-flex align-items-center'>
                        <img src='/images/user2.jpg' alt='image' />
                        <span>Sarah</span>
                      </div>
                    </div>
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-furniture-and-household'></i> Hotel
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='flaticon-pin'></i> Los Angeles, USA
                        </a>
                      </li>
                    </ul>
                    <h3>
                      <Link href="/single-listings">

                      <a>The Beverly Hills Hotel</a>
                      </Link>
                    </h3>
                    <span className='status'>
                      <i className='flaticon-save'></i> Open Now
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='rating'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bx-star'></i>
                        <span className='count'>(10)</span>
                      </div>
                      <div className='price'>
                        Start From <span>$200</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <img src='/images/listings/listings3.jpg' alt='image' />
                    <Link href="/single-listings">

                    <a className='link-btn'></a>
                    </Link>

                    <a href='#' className='bookmark-save'>
                      <i className='flaticon-heart'></i>
                    </a>
                    <a href='#' className='category'>
                      <i className='flaticon-cooking'></i>
                    </a>
                  </div>

                  <div className='listings-content'>
                    <div className='author'>
                      <div className='d-flex align-items-center'>
                        <img src='/images/user3.jpg' alt='image' />
                        <span>James</span>
                      </div>
                    </div>
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-shopping-bags'></i> Shopping
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='flaticon-pin'></i> Bangkok, Thailand
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Central Shopping Center</a>
                    </Link>
                    </h3>
                    <span className='status status-close'>
                      <i className='flaticon-save'></i> Close Now
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='rating'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half'></i>
                        <span className='count'>(35)</span>
                      </div>
                      <div className='price'>
                        Start From <span>$110</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-listings-box'>
                  <div className='listings-image'>
                    <div className='listings-image-slides owl-theme'>
                      <div className='single-image'>
                        <img src='/images/listings/listings5.jpg' alt='image' />
                        <Link href="/single-listings">

                        <a className='link-btn'></a>
                        </Link>
                      </div>
                    {/* <OwlCarousel {...optionsTwo}>

                      <div className='single-image'>
                        <img src='/images/listings/listings6.jpg' alt='image' />
                        <a href='single-listings.html' className='link-btn'></a>
                      </div>
                      </OwlCarousel> */}
                    </div>
                    <a href='#' className='bookmark-save'>
                      <i className='flaticon-heart'></i>
                    </a>
                    <a href='#' className='category'>
                      <i className='flaticon-cooking'></i>
                    </a>
                  </div>

                  <div className='listings-content'>
                    <div className='author'>
                      <div className='d-flex align-items-center'>
                        <img src='/images/user4.jpg' alt='image' />
                        <span>Andy</span>
                      </div>
                    </div>
                    <ul className='listings-meta'>
                      <li>
                        <a href='#'>
                          <i className='flaticon-cleansing'></i> Beauty
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='flaticon-pin'></i> Suwanee, USA
                        </a>
                      </li>
                    </ul>
                    <h3>
                    <Link href="/single-listings">

                      <a>Indice Beauty Center</a>
                    </Link>
                    </h3>
                    <span className='status'>
                      <i className='flaticon-save'></i> Open Now
                    </span>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='rating'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bx-star'></i>
                        <i className='bx bx-star'></i>
                        <span className='count'>(15)</span>
                      </div>
                      <div className='price'>
                        Start From <span>$100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className='divider2'></div>
      </section>
    </>
  );
};

export default ListingArea;
