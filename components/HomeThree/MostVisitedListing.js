import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

const OwlCarousel = dynamic(import('react-owl-carousel3'));

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
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};
const MostVisitedListing = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='listings-area listings-area-three pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Most Visited Listings</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>
          <Tabs>
            <div className='shorting-menu'>
              <TabList>
                <Tab>
                  <button className='filter' data-filter='all'>
                    <i className='flaticon-category'></i> All
                  </button>
                </Tab>

                <Tab>
                  <button className='filter' data-filter='.restaurant'>
                    <i className='flaticon-cooking'></i> Restaurant
                  </button>
                </Tab>

                <Tab>
                  <button className='filter' data-filter='.shopping'>
                    <i className='flaticon-shopping-bags'></i> Shopping
                  </button>
                </Tab>

                <Tab>
                  <button className='filter' data-filter='.hotel'>
                    <i className='flaticon-hotel'></i> Hotel
                  </button>
                </Tab>

                <Tab>
                  <button className='filter' data-filter='.fitness'>
                    <i className='flaticon-exercise'></i> Fitness
                  </button>
                </Tab>

                <Tab>
                  <button className='filter' data-filter='.beautySpa'>
                    <i className='flaticon-cleansing'></i> Beauty & Spa
                  </button>
                </Tab>
              </TabList>
            </div>

            <div className='shorting'>
              <div className='row'>
                <TabPanel>
                  <div className='row'>
                    <div className='col-xl-4 col-lg-6 col-md-6 restaurant'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings7.jpg'
                            alt='image'
                          />
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
                                <i className='flaticon-furniture-and-household'></i>{' '}
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
                          <div className='d-flex align-items-center justify-content-between'>
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

                    <div className='col-xl-4 col-lg-6 col-md-6 hotel'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <div className='listings-image-slides  owl-theme'>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings2.jpg'
                                alt='image'
                              />
                              <a href='#' className='link-btn'></a>
                            </div>
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
                    </div>

                    <div className='col-xl-4 col-lg-6 col-md-6 shopping'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings8.jpg'
                            alt='image'
                          />
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
                          <div className='d-flex align-items-center justify-content-between'>
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

                    <div className='col-xl-4 col-lg-6 col-md-6 restaurant'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings1.jpg'
                            alt='image'
                          />
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
                                <i className='flaticon-furniture-and-household'></i>{' '}
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
                    </div>

                    <div className='col-xl-4 col-lg-6 col-md-6 shopping'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings3.jpg'
                            alt='image'
                          />
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
                    </div>

                    <div className='col-xl-4 col-lg-6 col-md-6 beautySpa fitness'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <div className='listings-image-slides  owl-theme'>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings5.jpg'
                                alt='image'
                              />
                              <a href='#' className='link-btn'></a>
                            </div>
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
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='row'>
                    <div className='col-xl-4 col-lg-6 col-md-6 restaurant'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings7.jpg'
                            alt='image'
                          />
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
                                <i className='flaticon-furniture-and-household'></i>{' '}
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
                          <div className='d-flex align-items-center justify-content-between'>
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

                    <div className='col-xl-4 col-lg-6 col-md-6 restaurant'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings1.jpg'
                            alt='image'
                          />
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
                                <i className='flaticon-furniture-and-household'></i>{' '}
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
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='row'>
                    <div className='col-xl-4 col-lg-6 col-md-6 shopping'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings8.jpg'
                            alt='image'
                          />
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
                          <div className='d-flex align-items-center justify-content-between'>
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

                    <div className='col-xl-4 col-lg-6 col-md-6 shopping'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings3.jpg'
                            alt='image'
                          />
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
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='row'>
                    <div className=' col-lg-6 col-md-6 hotel'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <div className='listings-image-slides  owl-theme'>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings2.jpg'
                                alt='image'
                              />
                              <a href='#' className='link-btn'></a>
                            </div>
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
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='row'>
                    <div className=' col-lg-6 col-md-6 beautySpa fitness'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <div className='listings-image-slides  owl-theme'>
                            <div className='single-image'>
                              <img
                                src='/images/listings/listings5.jpg'
                                alt='image'
                              />
                              <a href='#' className='link-btn'></a>
                            </div>
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
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='row'>
                    <div className='col-xl-4 col-lg-6 col-md-6 shopping'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings8.jpg'
                            alt='image'
                          />
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
                          <div className='d-flex align-items-center justify-content-between'>
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

                    <div className='col-xl-4 col-lg-6 col-md-6 shopping'>
                      <div className='single-listings-box without-boxshadow'>
                        <div className='listings-image'>
                          <img
                            src='/images/listings/listings3.jpg'
                            alt='image'
                          />
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
                    </div>
                  </div>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default MostVisitedListing;
