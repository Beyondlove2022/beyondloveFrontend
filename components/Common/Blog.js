import Link from 'next/link';

const Blog = ({ bgColor }) => {
  return (
    <>
      <section className={`blog-area ${bgColor} with-events pt-100 pb-70`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='blog-item-list'>
                <h2>Indice Recent Activities</h2>

                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-blog-post'>
                      <div className='post-image'>
                        <Link href='/single-blog-1'>
                          <a className='d-block'>
                            <img src='/images/blog/blog1.jpg' alt='image' />
                          </a>
                        </Link>
                      </div>

                      <div className='post-content'>
                        <ul className='post-meta d-flex align-items-center'>
                          <li>
                            <div className='d-flex align-items-center'>
                              <img src='/images/user1.jpg' alt='image' />
                              <span>
                                <a href='#'>Taylor</a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <i className='flaticon-calendar'></i> Aug 7, 2020
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-blog-1'>
                            <a>
                              10 Types of Social Proof and What Makes Them
                              Effective
                            </a>
                          </Link>
                        </h3>
                        <Link href='/single-blog-1'>
                          <a className='link-btn'>
                            <i className='flaticon-right-arrow'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-blog-post'>
                      <div className='post-image'>
                        <Link href='/single-blog-1'>
                          <a className='d-block'>
                            <img src='/images/blog/blog2.jpg' alt='image' />
                          </a>
                        </Link>
                      </div>

                      <div className='post-content'>
                        <ul className='post-meta d-flex align-items-center'>
                          <li>
                            <div className='d-flex align-items-center'>
                              <img src='/images/user2.jpg' alt='image' />
                              <span>
                                <a href='#'>Sarah</a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <i className='flaticon-calendar'></i> Aug 6, 2020
                          </li>
                        </ul>
                        <h3>
                          <Link href='/single-blog-1'>
                            <a>
                              Tech Products That Make It Easier to Stay Home
                            </a>
                          </Link>
                        </h3>
                        <Link href='/single-blog-1'>
                          <a className='link-btn'>
                            <i className='flaticon-right-arrow'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <div className='events-item-list'>
                <h2>Upcoming Events</h2>

                <div className='single-events-item'>
                  <span className='meta'>
                    <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30 am -
                    10:00 pm
                  </span>
                  <h3>
                    <Link href='/single-events'>
                      <a>International Agriculture and Technology Summit</a>
                    </Link>
                  </h3>
                  <Link href='/single-blog-1'>
                    <a className='link-btn'>
                      <i className='flaticon-right-arrow'></i>
                    </a>
                  </Link>
                </div>

                <div className='single-events-item'>
                  <span className='meta'>
                    <i className='flaticon-calendar'></i> Thu, Jul 29, 11:30 am -
                    10:00 pm
                  </span>
                  <h3>
                  <Link href='/single-blog-1'>
                    <a>
                      Digital Marketing: Customer Engagement & Social Media
                    </a>
                    </Link>
                  </h3>
                  <Link href='/single-blog-1'>

                  <a className='link-btn'>
                    <i className='flaticon-right-arrow'></i>
                  </a>
                  </Link>
                </div>

                <div className='single-events-item'>
                  <span className='meta'>
                    <i className='flaticon-calendar'></i> Thu, Jul 28, 11:30 am -
                    10:00 pm
                  </span>
                  <h3>
                  <Link href='/single-blog-1'>
                    <a>
                      Internet of Things Forum Africa Exhibition (IOTFA)
                    </a>
                    </Link>
                  </h3>
                  <Link href='/single-blog-1'>

                  <a  className='link-btn'>
                    <i className='flaticon-right-arrow'></i>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
