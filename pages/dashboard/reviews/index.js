import Link from 'next/link';
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';

const Reviews = () => {
  return (
    <>
      <DashboardNavbar />

      <div className='main-content d-flex flex-column'>
        <NavbarThree />

        <div className='breadcrumb-area'>
          <h1>Reviews</h1>
          <ol className='breadcrumb'>
            <li className='item'>
            <Link href='/dashboard'>

              <a>Home</a>
            </Link>
            </li>
            <li className='item'>
            <Link href='/dashboard'>

              <a>Dashboard</a>
            </Link>
            </li>
            <li className='item'>Reviews</li>
          </ol>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='visitor-reviews-box'>
              <h3>Visitor Reviews</h3>

              <div className='user-review'>
                <img src='/images/user4.jpg' className='user' alt='image' />
                <div className='review-rating'>
                  <div className='review-stars'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <span className='d-inline-block'>
                    James Anderson{' '}
                    <span>
                      on <a href='#'>Farmis Hotel</a>
                    </span>
                  </span>
                </div>
                <span className='date'>
                  <i className='bx bx-calendar'></i> 20 June 2020
                </span>
                <p>
                  Very well built theme, couldn't be happier with it. Can't wait
                  for future updates to see what else they add in.
                </p>
                <div className='review-image'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                      <a
                        data-fancybox='gallery'
                        href='/images/gallery/gallery1.jpg'
                      >
                        <img src='/images/gallery/gallery1.jpg' alt='image' />
                      </a>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                      <a
                        data-fancybox='gallery'
                        href='/images/gallery/gallery2.jpg'
                      >
                        <img src='/images/gallery/gallery2.jpg' alt='image' />
                      </a>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                      <a
                        data-fancybox='gallery'
                        href='/images/gallery/gallery3.jpg'
                      >
                        <img src='/images/gallery/gallery3.jpg' alt='image' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='btn-box'>
                  <a href='#' className='default-btn'>
                    <i className='bx bx-reply'></i> Reply
                  </a>
                  <a href='#' className='default-btn danger ml-3'>
                    <i className='bx bx-trash'></i> Delete
                  </a>
                </div>
              </div>

              <div className='user-review'>
                <img src='/images/user2.jpg' className='user' alt='image' />
                <div className='review-rating'>
                  <div className='review-stars'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                  </div>
                  <span className='d-inline-block'>
                    Sarah Taylor{' '}
                    <span>
                      on <a href='#'>Shopping Complex</a>
                    </span>
                  </span>
                </div>
                <span className='date'>
                  <i className='bx bx-calendar'></i> 19 June 2020
                </span>
                <p>
                  Very well built theme, couldn't be happier with it. Can't wait
                  for future updates to see what else they add in.
                </p>
                <div className='review-image'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                      <a
                        data-fancybox='gallery'
                        href='/images/gallery/gallery1.jpg'
                      >
                        <img src='/images/gallery/gallery1.jpg' alt='image' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='btn-box'>
                  <a href='#' className='default-btn'>
                    <i className='bx bx-reply'></i> Reply
                  </a>
                  <a href='#' className='default-btn danger ml-3'>
                    <i className='bx bx-trash'></i> Delete
                  </a>
                </div>
              </div>

              <div className='user-review'>
                <img src='/images/user3.jpg' className='user' alt='image' />
                <div className='review-rating'>
                  <div className='review-stars'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bx-star'></i>
                  </div>
                  <span className='d-inline-block'>
                    David Warner{' '}
                    <span>
                      on <a href='#'>Gym Training</a>
                    </span>
                  </span>
                </div>
                <span className='date'>
                  <i className='bx bx-calendar'></i> 18 June 2020
                </span>
                <p>
                  Very well built theme, couldn't be happier with it. Can't wait
                  for future updates to see what else they add in.
                </p>
                <div className='btn-box'>
                  <a href='#' className='default-btn'>
                    <i className='bx bx-reply'></i> Reply
                  </a>
                  <a href='#' className='default-btn danger ml-3'>
                    <i className='bx bx-trash'></i> Delete
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12'>
            <div className='visitor-reviews-box'>
              <h3>Your Reviews</h3>

              <div className='user-review'>
                <img src='/images/user1.jpg' className='user' alt='image' />
                <div className='review-rating'>
                  <div className='review-stars'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bx-star'></i>
                  </div>
                  <span className='d-inline-block'>
                    You{' '}
                    <span>
                      on <a href='#'>Gym Training</a>
                    </span>
                  </span>
                </div>
                <span className='date'>
                  <i className='bx bx-calendar'></i> 18 June 2020
                </span>
                <p>
                  Very well built theme, couldn't be happier with it. Can't wait
                  for future updates to see what else they add in.
                </p>
                <div className='btn-box'>
                  <a href='#' className='default-btn'>
                    <i className='bx bx-edit'></i> Edit
                  </a>
                </div>
              </div>

              <div className='user-review'>
                <img src='/images/user1.jpg' className='user' alt='image' />
                <div className='review-rating'>
                  <div className='review-stars'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <span className='d-inline-block'>
                    You{' '}
                    <span>
                      on <a href='#'>Farmis Hotel</a>
                    </span>
                  </span>
                </div>
                <span className='date'>
                  <i className='bx bx-calendar'></i> 20 June 2020
                </span>
                <p>
                  Very well built theme, couldn't be happier with it. Can't wait
                  for future updates to see what else they add in.
                </p>
                <div className='btn-box'>
                  <a href='#' className='default-btn'>
                    <i className='bx bx-edit'></i> Edit
                  </a>
                </div>
              </div>

              <div className='user-review'>
                <img src='/images/user1.jpg' className='user' alt='image' />
                <div className='review-rating'>
                  <div className='review-stars'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                  </div>
                  <span className='d-inline-block'>
                    You{' '}
                    <span>
                      on <a href='#'>Shopping Complex</a>
                    </span>
                  </span>
                </div>
                <span className='date'>
                  <i className='bx bx-calendar'></i> 19 June 2020
                </span>
                <p>
                  Very well built theme, couldn't be happier with it. Can't wait
                  for future updates to see what else they add in.
                </p>
                <div className='btn-box'>
                  <a href='#' className='default-btn'>
                    <i className='bx bx-edit'></i> Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-grow-1'></div>

        <div className='copyrights-area'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-sm-6 col-md-6'>
              <p>
                <i className='bx bx-copyright'></i>2020 <a href='#'>Indice</a>. All
                rights reserved
              </p>
            </div>

            <div className='col-lg-6 col-sm-6 col-md-6 text-right'>
              <p>
                Designed by ❤️{' '}
                <a href='https://envytheme.com/' target='_blank' rel="noreferrer">
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
