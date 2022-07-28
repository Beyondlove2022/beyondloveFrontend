import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

//components
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  items: 1,
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const UserProfile = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Author' pageName='Author' />

      <section className='author-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <div className='author-sidebar'>
                <div className='user-profile'>
                  <div className='d-flex align-items-center'>
                    <img src='/images/user3.jpg' alt='image' />

                    <div className='title'>
                      <h4>James Andy</h4>
                      <span className='sub-title'>Own Company</span>
                      <div className='rating d-flex align-items-center'>
                        <span className='bx bxs-star checked'></span>
                        <span className='bx bxs-star checked'></span>
                        <span className='bx bxs-star checked'></span>
                        <span className='bx bxs-star checked'></span>
                        <span className='bx bxs-star checked'></span>
                        <span className='rating-count'>(5 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='user-contact-info'>
                  <h3>Contact</h3>

                  <ul className='user-contact'>
                    <li>
                      <a href='#'>
                        <i className='bx bx-phone-call'></i> (+44) - 45789 - 5789
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='bx bx-envelope'></i> hello@jamesandy.com
                      </a>
                    </li>
                  </ul>

                  <ul className='social-profiles'>
                    <li>
                      <a href='#' className='facebook'>
                        <i className='bx bxl-facebook'></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href='#' className='twitter'>
                        <i className='bx bxl-twitter'></i> Twitter
                      </a>
                    </li>
                  </ul>

                  <form>
                    <div className='row'>
                      <div className='col-lg-12 col-md-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            name='name'
                            className='form-control'
                            id='name'
                            required
                            placeholder='Your name'
                          />
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-6'>
                        <div className='form-group'>
                          <input
                            type='email'
                            name='email'
                            className='form-control'
                            id='email'
                            required
                            placeholder='Your email address'
                          />
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='form-group'>
                          <input
                            type='text'
                            name='phone_number'
                            className='form-control'
                            id='phone_number'
                            required
                            placeholder='Your phone number'
                          />
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='form-group'>
                          <textarea
                            name='message'
                            id='message'
                            className='form-control'
                            cols='30'
                            rows='6'
                            required
                            placeholder='Write your message...'
                          ></textarea>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <button type='submit' className='default-btn'>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className='col-lg-8 col-md-12'>
              <div className='author-all-listings'>
                <h2>James's Listings</h2>

                <div className='row'>
                  <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings7.jpg' alt='image' />
                        <a href='#' className='link-btn'></a>
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
                              <i className='flaticon-furniture-and-household'></i>
                              Restaurant
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Francisco, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <a href='#'>The Mad Made Grill</a>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <span className='count'>(18)</span>
                          </div>
                          <div className='price'>
                            Start From <span>$121</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <div className='listings-image-slides owl-theme'>
                          {display ? (
                            <OwlCarousel className='owlNavOne' {...options}>
                              <div className='single-image'>
                                <img
                                  src='/images/listings/listings4.jpg'
                                  alt='image'
                                />
                                <a href='#' className='link-btn'></a>
                              </div>

                              <div className='single-image'>
                                <img
                                  src='/images/listings/listings2.jpg'
                                  alt='image'
                                />
                                <a href='#' className='link-btn'></a>
                              </div>
                            </OwlCarousel>
                          ) : (
                            ''
                          )}
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
                              <i className='flaticon-hotel'></i> Hotel
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Los Angeles, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <a href='#'>The Beverly Hills Hotel</a>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
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
                  </div>

                  <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings8.jpg' alt='image' />
                        <a href='#' className='link-btn'></a>
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
                            <img src='/images/user5.jpg' alt='image' />
                            <span>Lina</span>
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
                              <i className='flaticon-pin'></i> Seattle, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <a href='#'>Blue Water Shopping City</a>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <span className='count'>(55)</span>
                          </div>
                          <div className='price'>
                            Start From <span>$500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings1.jpg' alt='image' />
                        <a href='#' className='link-btn'></a>
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
                          <a href='#'>Chipotle Mexican Grill</a>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
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
                  </div>

                  <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings3.jpg' alt='image' />
                        <a href='#' className='link-btn'></a>
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
                          <a href='#'>Central Shopping Center</a>
                        </h3>
                        <span className='status status-close'>
                          <i className='flaticon-save'></i> Close Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
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
                  </div>

                  <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <div className='listings-image-slides owl-theme'>
                          {display ? (
                            <OwlCarousel className='owlNavOne' {...options}>
                              <div className='single-image'>
                                <img
                                  src='/images/listings/listings5.jpg'
                                  alt='image'
                                />
                                <a href='#' className='link-btn'></a>
                              </div>

                              <div className='single-image'>
                                <img
                                  src='/images/listings/listings6.jpg'
                                  alt='image'
                                />
                                <a href='#' className='link-btn'></a>
                              </div>
                            </OwlCarousel>
                          ) : (
                            ''
                          )}
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
                          <a href='#'>Indice Beauty Center</a>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
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
                  </div>

                  <div className='col-lg-12 col-md-12'>
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
          </div>
        </div>
      </section>
      <Footer bgColor='bg-f5f5f5' />
    </>
  );
};

export default UserProfile;
