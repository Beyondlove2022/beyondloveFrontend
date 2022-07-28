import dynamic from 'next/dynamic';
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='How it works' pageName='How it works' />
      <section className='pricing-area bg-f9f9f9 pt-100 pb-70'>
        <div className='container'>
          <div className='pricing-tabs'>
            <Tabs>
              <ul className='nav nav-tabs' id='myTab' role='tablist'>
                <TabList>
                  <Tab>
                    <li className='nav-item'>
                      <a className='nav-link monthly-button' id='monthly-tab'>
                        Monthly
                      </a>
                    </li>
                  </Tab>
                  <Tab>
                    <li className='nav-item'>
                      <a className='nav-link annual-button' id='annually-tab'>
                        Annually
                      </a>
                    </li>
                  </Tab>
                </TabList>
              </ul>

              <div className='tab-content' id='myTabContent'>
              <TabPanel>
                <div className='tab-pane' id='monthly'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='single-pricing-box'>
                        <h3>Starter Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 5 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Non-Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> 90 Days Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Online
                              Booking
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Limited
                              Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $9.99
                          <span>Per Month</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='single-pricing-box'>
                        <h3>Advance Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 10 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Non-Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Lifetime Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Online Booking
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Limited
                              Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $19.99
                          <span>Per Month</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'>
                      <div className='single-pricing-box'>
                        <h3>Premium Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 50 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Lifetime Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Online Booking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> 24/7 Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $29.99
                          <span>Per Month</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='tab-pane' id='annually'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='single-pricing-box'>
                        <h3>Starter Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 5 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Non-Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> 90 Days Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Online
                              Booking
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Limited
                              Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $119.99
                          <span>Per Year</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='single-pricing-box'>
                        <h3>Advance Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 10 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Non-Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Lifetime Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Online Booking
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Limited
                              Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $129.99
                          <span>Per Year</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'>
                      <div className='single-pricing-box'>
                        <h3>Premium Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 50 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Lifetime Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Online Booking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> 24/7 Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $139.99
                          <span>Per Year</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </TabPanel>

                <TabPanel>
                <div className='tab-pane' id='monthly'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='single-pricing-box'>
                        <h3>Monthly Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 5 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Non-Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> 90 Days Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Online
                              Booking
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Limited
                              Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $9.99
                          <span>Per Month</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='single-pricing-box'>
                        <h3>Annual Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 10 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Non-Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Lifetime Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Online Booking
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Limited
                              Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $19.99
                          <span>Per Month</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'>
                      <div className='single-pricing-box'>
                        <h3>Lifetime Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 50 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Lifetime Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Online Booking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> 24/7 Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $29.99
                          <span>Per Month</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='tab-pane' id='annually'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='single-pricing-box'>
                        <h3>Starter Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 5 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Non-Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> 90 Days Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Online
                              Booking
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Limited
                              Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $119.99
                          <span>Per Year</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6'>
                      <div className='single-pricing-box'>
                        <h3>Annual Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 10 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Non-Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Lifetime Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Online Booking
                            </li>
                            <li>
                              <i className='bx bx-x action-close'></i> Limited
                              Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $129.99
                          <span>Per Year</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'>
                      <div className='single-pricing-box'>
                        <h3>Premium Plan</h3>

                        <div className='pricing-features'>
                          <ul>
                            <li>
                              <i className='bx bx-check'></i> 50 Listing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Featured
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Lifetime Availability
                            </li>
                            <li>
                              <i className='bx bx-check'></i> One Time Fee
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Multi Team Tasking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Registration &
                              Ticketing
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Basic Features
                            </li>
                            <li>
                              <i className='bx bx-check'></i> Online Booking
                            </li>
                            <li>
                              <i className='bx bx-check'></i> 24/7 Support
                            </li>
                          </ul>
                        </div>

                        <div className='price'>
                          $139.99
                          <span>Per Year</span>
                        </div>

                        <a href='#' className='default-btn'>
                          Select Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
