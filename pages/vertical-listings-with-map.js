import Link from "next/link";

import NavbarTwo from '../components/_App/NavbarTwo';
import PopularPlacesFilter from '../components/Common/PopularPlacesFilter';
import Footer from '../components/_App/Footer';

const VerticalListingsWihMap = () => {
  return (
    <>
      <NavbarTwo />
      <PopularPlacesFilter />

      <section className='listings-area ptb-100'>
        <div className='container-fluid'>
          <div className='row m-0'>
            <div className='col-xl-8 col-lg-12 col-md-12 p-0'>
              <div className='row'>
                <div className='col-lg-4 col-md-12'>
                  <aside className='listings-widget-area'>
                    <section className='widget widget_filters'>
                      <h3 className='widget-title'>Filters</h3>

                      <ul>
                        <li>
                          <button type='button'>$</button>
                        </li>
                        <li>
                          <button type='button'>$$</button>
                        </li>
                        <li>
                          <button type='button'>$$$</button>
                        </li>
                        <li>
                          <button type='button'>$$$$</button>
                        </li>
                      </ul>
                    </section>

                    <section className='widget widget_categories'>
                      <h3 className='widget-title'>Categories</h3>

                      <ul>
                        <li>
                          <input id='categories1' type='checkbox' />
                          <label htmlFor='categories1'>Restaurant</label>
                        </li>
                        <li>
                          <input id='categories2' type='checkbox' />
                          <label htmlFor='categories2'>Hotel</label>
                        </li>
                        <li>
                          <input id='categories3' type='checkbox' />
                          <label htmlFor='categories3'>Beauty & Spa</label>
                        </li>
                        <li>
                          <input id='categories4' type='checkbox' />
                          <label htmlFor='categories4'>Fitness</label>
                        </li>
                        <li>
                          <input id='categories5' type='checkbox' />
                          <label htmlFor='categories5'>Shopping</label>
                        </li>
                        <li className='hide'>
                          <input id='categories6' type='checkbox' />
                          <label htmlFor='categories6'>Hospital</label>
                        </li>
                        <li className='hide'>
                          <input id='categories7' type='checkbox' />
                          <label htmlFor='categories7'>Events</label>
                        </li>
                        <li className='hide'>
                          <input id='categories8' type='checkbox' />
                          <label htmlFor='categories8'>Clothing</label>
                        </li>
                        <li className='see-all-btn'>
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>

                    <section className='widget widget_features'>
                      <h3 className='widget-title'>Features</h3>

                      <ul>
                        <li>
                          <input id='categories1' type='checkbox' />
                          <label htmlFor='categories1'>Restaurant</label>
                        </li>
                        <li>
                          <input id='categories2' type='checkbox' />
                          <label htmlFor='categories2'>Hotel</label>
                        </li>
                        <li>
                          <input id='categories3' type='checkbox' />
                          <label htmlFor='categories3'>Beauty & Spa</label>
                        </li>
                        <li>
                          <input id='categories4' type='checkbox' />
                          <label htmlFor='categories4'>Fitness</label>
                        </li>
                        <li>
                          <input id='categories5' type='checkbox' />
                          <label htmlFor='categories5'>Shopping</label>
                        </li>
                        <li className='hide'>
                          <input id='categories6' type='checkbox' />
                          <label htmlFor='categories6'>Hospital</label>
                        </li>
                        <li className='hide'>
                          <input id='categories7' type='checkbox' />
                          <label htmlFor='categories7'>Events</label>
                        </li>
                        <li className='hide'>
                          <input id='categories8' type='checkbox' />
                          <label htmlFor='categories8'>Clothing</label>
                        </li>
                        <li className='see-all-btn'>
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>

                    <section className='widget widget_distance'>
                      <h3 className='widget-title'>Distance</h3>

                      <ul>
                        <li>
                          <input id='distance1' type='checkbox' />
                          <label htmlFor='distance1'>Driving (5 mi.)</label>
                        </li>
                        <li>
                          <input id='distance2' type='checkbox' />
                          <label htmlFor='distance2'>Walking (1 mi.)</label>
                        </li>
                        <li>
                          <input id='distance3' type='checkbox' />
                          <label htmlFor='distance3'>Biking (2 mi.)</label>
                        </li>
                        <li>
                          <input id='distance4' type='checkbox' />
                          <label htmlFor='distance4'>Within 4 blocks</label>
                        </li>
                        <li>
                          <input id='distance5' type='checkbox' />
                          <label htmlFor='distance5'>Bicycle (6 mi.)</label>
                        </li>
                        <li className='hide'>
                          <input id='distance6' type='checkbox' />
                          <label htmlFor='distance6'>Driving (10 mi.)</label>
                        </li>
                        <li className='hide'>
                          <input id='distance7' type='checkbox' />
                          <label htmlFor='distance7'>Walking (11 mi.)</label>
                        </li>
                        <li className='see-all-btn'>
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>
                  </aside>
                </div>

                <div className='col-lg-8 col-md-12'>
                  <div className='all-listings-list'>
                    <div className='listings-grid-sorting row align-items-center'>
                      <div className='col-lg-5 col-md-6 result-count'>
                        <p>
                          <span className='count'>9</span> Results
                        </p>
                      </div>

                      <div className='col-lg-7 col-md-6 ordering'>
                        <div className='d-flex justify-content-end'>
                          <div className='select-box'>
                            <label>Sort By:</label>
                            <select className="blog-select">
                              <option>Recommended</option>
                              <option>Default</option>
                              <option>Popularity</option>
                              <option>Latest</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-12 col-md-12'>
                        <div className='single-listings-item'>
                          <div className='row m-0'>
                            <div className='col-lg-4 col-md-4 p-0'>
                              <div className='listings-image bg-img1'>
                                <img
                                  src='/images/listings/listings9.jpg'
                                  alt='image'
                                />
                                <a href='#' className='bookmark-save'>
                                  <i className='flaticon-heart'></i>
                                </a>
                                <a href='#' className='category'>
                                  <i className='flaticon-cooking'></i>
                                </a>
                                <Link href='/single-listings'>

                                <a
                                  
                                  className='link-btn'
                                ></a>
                                </Link>
                                <div className='author'>
                                  <div className='d-flex align-items-center'>
                                    <img
                                      src='/images/user3.jpg'
                                      alt='image'
                                    />
                                    <span>James</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='col-lg-8 col-md-8 p-0'>
                              <div className='listings-content'>
                                <span className='status'>
                                  <i className='flaticon-save'></i> Open Now
                                </span>
                                <h3>
                                <Link href='/single-listings'>

                                  <a>
                                    The Mad Made Grill
                                  </a>
                                </Link>
                                </h3>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='single-listings-item'>
                          <div className='row m-0'>
                            <div className='col-lg-4 col-md-4 p-0'>
                              <div className='listings-image bg-img2'>
                                <img
                                  src='/images/listings/listings10.jpg'
                                  alt='image'
                                />
                                <a href='#' className='bookmark-save'>
                                  <i className='flaticon-heart'></i>
                                </a>
                                <a href='#' className='category'>
                                  <i className='flaticon-cooking'></i>
                                </a>
                                <Link href='/single-listings'>

                                <a

                                  className='link-btn'
                                ></a>
                                </Link>
                                <div className='author'>
                                  <div className='d-flex align-items-center'>
                                    <img
                                      src='/images/user2.jpg'
                                      alt='image'
                                    />
                                    <span>Sarah</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='col-lg-8 col-md-8 p-0'>
                              <div className='listings-content'>
                                <span className='status'>
                                  <i className='flaticon-save'></i> Open Now
                                </span>
                                <h3>
                                <Link href='/single-listings'>

                                  <a >
                                    The Beverly Hills Hotel
                                  </a>
                                </Link>
                                </h3>
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
                                <ul className='listings-meta'>
                                  <li>
                                    <a href='#'>
                                      <i className='flaticon-hotel'></i> Hotel
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <i className='flaticon-pin'></i> Los Angeles,
                                      USA
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='single-listings-item'>
                          <div className='row m-0'>
                            <div className='col-lg-4 col-md-4 p-0'>
                              <div className='listings-image bg-img3'>
                                <img
                                  src='/images/listings/listings11.jpg'
                                  alt='image'
                                />
                                <a href='#' className='bookmark-save'>
                                  <i className='flaticon-heart'></i>
                                </a>
                                <a href='#' className='category'>
                                  <i className='flaticon-cooking'></i>
                                </a>
                                <Link href='/single-listings'>

                                <a
                                  
                                  className='link-btn'
                                ></a>
                                </Link>
                                <div className='author'>
                                  <div className='d-flex align-items-center'>
                                    <img
                                      src='/images/user5.jpg'
                                      alt='image'
                                    />
                                    <span>Lina</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='col-lg-8 col-md-8 p-0'>
                              <div className='listings-content'>
                                <span className='status'>
                                  <i className='flaticon-save'></i> Open Now
                                </span>
                                <h3>
                                <Link href='/single-listings'>

                                  <a>
                                    Blue Water Shopping City
                                  </a>
                                </Link>
                                </h3>
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
                                <ul className='listings-meta'>
                                  <li>
                                    <a href='#'>
                                      <i className='flaticon-shopping-bags'></i>{' '}
                                      Shopping
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <i className='flaticon-pin'></i> Seattle, USA
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='single-listings-item'>
                          <div className='row m-0'>
                            <div className='col-lg-4 col-md-4 p-0'>
                              <div className='listings-image bg-img4'>
                                <img
                                  src='/images/listings/listings12.jpg'
                                  alt='image'
                                />
                                <a href='#' className='bookmark-save'>
                                  <i className='flaticon-heart'></i>
                                </a>
                                <a href='#' className='category'>
                                  <i className='flaticon-cooking'></i>
                                </a>
                                <Link href='/single-listings'>

                                <a
                                  
                                  className='link-btn'
                                ></a>
                                </Link>
                                <div className='author'>
                                  <div className='d-flex align-items-center'>
                                    <img
                                      src='/images/user1.jpg'
                                      alt='image'
                                    />
                                    <span>Taylor</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='col-lg-8 col-md-8 p-0'>
                              <div className='listings-content'>
                                <span className='status status-close'>
                                  <i className='flaticon-save'></i> Close Now
                                </span>
                                <h3>
                                <Link href='/single-listings'>

                                  <a>
                                    Chipotle Mexican Grill
                                  </a>
                                </Link>
                                </h3>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='single-listings-item'>
                          <div className='row m-0'>
                            <div className='col-lg-4 col-md-4 p-0'>
                              <div className='listings-image bg-img6'>
                                <img
                                  src='/images/listings/listings17.jpg'
                                  alt='image'
                                />
                                <a href='#' className='bookmark-save'>
                                  <i className='flaticon-heart'></i>
                                </a>
                                <a href='#' className='category'>
                                  <i className='flaticon-cooking'></i>
                                </a>
                                <Link href='/single-listings'>

                                <a
                                  
                                  className='link-btn'
                                ></a>
                                </Link>
                                <div className='author'>
                                  <div className='d-flex align-items-center'>
                                    <img
                                      src='/images/user1.jpg'
                                      alt='image'
                                    />
                                    <span>Taylor</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='col-lg-8 col-md-8 p-0'>
                              <div className='listings-content'>
                                <span className='status status-close'>
                                  <i className='flaticon-save'></i> Close Now
                                </span>
                                <h3>
                                <Link href='/single-listings'>

                                  <a>
                                    Thai Me Up Restaurant
                                  </a>
                                </Link>
                                </h3>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='single-listings-item'>
                          <div className='row m-0'>
                            <div className='col-lg-4 col-md-4 p-0'>
                              <div className='listings-image bg-img5'>
                                <img
                                  src='/images/listings/listings16.jpg'
                                  alt='image'
                                />
                                <a href='#' className='bookmark-save'>
                                  <i className='flaticon-heart'></i>
                                </a>
                                <a href='#' className='category'>
                                  <i className='flaticon-cooking'></i>
                                </a>
                                <Link href='/single-listings'>

                                <a
                                  
                                  className='link-btn'
                                ></a>
                                </Link>
                                <div className='author'>
                                  <div className='d-flex align-items-center'>
                                    <img
                                      src='/images/user5.jpg'
                                      alt='image'
                                    />
                                    <span>Lina</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='col-lg-8 col-md-8 p-0'>
                              <div className='listings-content'>
                                <span className='status'>
                                  <i className='flaticon-save'></i> Open Now
                                </span>
                                <h3>
                                <Link href='/single-listings'>

                                  <a>
                                    Skyview Shopping Complex
                                  </a>
                                </Link>
                                </h3>
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
                                <ul className='listings-meta'>
                                  <li>
                                    <a href='#'>
                                      <i className='flaticon-shopping-bags'></i>{' '}
                                      Shopping
                                    </a>
                                  </li>
                                  <li>
                                    <a href='#'>
                                      <i className='flaticon-pin'></i> Seattle, USA
                                    </a>
                                  </li>
                                </ul>
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
                          <span
                            className='page-numbers current'
                            aria-current='page'
                          >
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

            <div className='col-xl-4 col-lg-12 col-md-12 p-0'>
              <div className='map-container fw-map side-full-map'>
                <div id='main-full-map'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd'></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer bgColor="bg-f5f5f5" />
    </>
  );
};

export default VerticalListingsWihMap;
