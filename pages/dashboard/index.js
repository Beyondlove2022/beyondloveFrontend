import Link from 'next/link';
import NavbarThree from '../../components/_App/NavbarThree';
import DashboardNavbar from '../../components/Dashboard/DashboardNavbar';

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarThree />

        <div className='breadcrumb-area'>
          <h1>Howdy, Andy!</h1>
          <ol className='breadcrumb'>
            <li className='item'>
            <Link href='/dashboard'>

              <a>Home</a>
            </Link>
            </li>
            <li className='item'>Dashboard</li>
          </ol>
        </div>

        <div
          className='notification-alert alert alert-success alert-dismissible fade show'
          role='alert'
        >
          Your listing <strong>Hills Hotel</strong> has been approved!
          <button
            type='button'
            className='close'
            data-dismiss='alert'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='stats-card-box'>
              <div className='icon-box'>
                <i className='bx bx-map-alt'></i>
              </div>
              <span className='sub-title'>Active Listings</span>
              <h3>10</h3>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='stats-card-box'>
              <div className='icon-box'>
                <i className='bx bx-line-chart'></i>
              </div>
              <span className='sub-title'>Total Views</span>
              <h3>854</h3>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='stats-card-box'>
              <div className='icon-box'>
                <i className='bx bx-star'></i>
              </div>
              <span className='sub-title'>Total Reviews</span>
              <h3>99</h3>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='stats-card-box'>
              <div className='icon-box'>
                <i className='bx bx-heart'></i>
              </div>
              <span className='sub-title'>Bookmarked</span>
              <h3>150</h3>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='recent-activities-box'>
              <h3>Recent Activities</h3>

              <ul>
                <li className='alert alert-dismissible fade show' role='alert'>
                  <div className='icon'>
                    <i className='bx bx-layer'></i>
                  </div>
                  Your listing{' '}
                  <strong>
                    <a href='#'>Hills Hotel</a>
                  </strong>{' '}
                  has been approved!
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </li>
                <li className='alert alert-dismissible fade show' role='alert'>
                  <div className='icon'>
                    <i className='bx bx-star'></i>
                  </div>
                  <strong>Andy Smith</strong> left a review{' '}
                  <div className='rating mid' data-rating='3.0'></div> on{' '}
                  <strong>
                    <a href='#'>Mad Grill</a>
                  </strong>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </li>
                <li className='alert alert-dismissible fade show' role='alert'>
                  <div className='icon'>
                    <i className='bx bx-heart'></i>
                  </div>
                  Someone bookmarked your{' '}
                  <strong>
                    <a href='#'>Mexican Grill</a>
                  </strong>{' '}
                  listings!
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </li>
                <li className='alert alert-dismissible fade show' role='alert'>
                  <div className='icon'>
                    <i className='bx bxs-star'></i>
                  </div>
                  Andy Smith left a review{' '}
                  <div className='rating high' data-rating='5.0'></div> on{' '}
                  <strong>
                    <a href='#'>Mad Grill</a>
                  </strong>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </li>
                <li className='alert alert-dismissible fade show' role='alert'>
                  <div className='icon'>
                    <i className='bx bxs-bookmark-star'></i>
                  </div>
                  Someone bookmarked your{' '}
                  <strong>
                    <a href='#'>Grill</a>
                  </strong>{' '}
                  listings!
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </li>
                <li className='alert alert-dismissible fade show' role='alert'>
                  <div className='icon'>
                    <i className='bx bx-layer'></i>
                  </div>
                  Your listing{' '}
                  <strong>
                    <a href='#'>Hotel Hills</a>
                  </strong>{' '}
                  has been approved!
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </li>
                <li className='alert alert-dismissible fade show' role='alert'>
                  <div className='icon'>
                    <i className='bx bxs-star-half'></i>
                  </div>
                  <strong>James Andy</strong> left a review{' '}
                  <div className='rating low' data-rating='2.5'></div> on{' '}
                  <strong>
                    <a href='#'>Mad Grill</a>
                  </strong>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-6 col-md-12'>
            <div className='invoices-box'>
              <h3>Invoices</h3>

              <ul>
                <li>
                  <div className='icon'>
                    <i className='bx bx-file-blank'></i>
                  </div>
                  <ul>
                    <li className='paid'>Paid</li>
                    <li>Order: #181815</li>
                    <li>Date: 14/08/2020</li>
                  </ul>
                  <span>Premium Plan</span>
                  <Link href='/dashboard/invoice'>

                  <a className='default-btn'>
                    View Invoice
                  </a>
                  </Link>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-file-blank'></i>
                  </div>
                  <ul>
                    <li className='unpaid'>Unpaid</li>
                    <li>Order: #181814</li>
                    <li>Date: 13/08/2020</li>
                  </ul>
                  <span>Advance Plan</span>
                  <Link href='/dashboard/invoice'>

                  <a className='default-btn'>
                    View Invoice
                  </a>
                  </Link>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-file-blank'></i>
                  </div>
                  <ul>
                    <li className='paid'>Paid</li>
                    <li>Order: #181813</li>
                    <li>Date: 12/08/2020</li>
                  </ul>
                  <span>Starter Plan</span>
                  <a href='#' className='default-btn'>
                    View Invoice
                  </a>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-file-blank'></i>
                  </div>
                  <ul>
                    <li className='unpaid'>Unpaid</li>
                    <li>Order: #181812</li>
                    <li>Date: 11/08/2020</li>
                  </ul>
                  <span>Basic Plan</span>
                  <Link href='/dashboard/invoice'>

                  <a  className='default-btn'>
                    View Invoice
                  </a>
                  </Link>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-file-blank'></i>
                  </div>
                  <ul>
                    <li className='paid'>Paid</li>
                    <li>Order: #181815</li>
                    <li>Date: 14/08/2020</li>
                  </ul>
                  <span>Premium Plan</span>
                  <Link href='/dashboard/invoice'>

                  <a className='default-btn'>
                    View Invoice
                  </a>
                  </Link>
                </li>
              </ul>
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
                <a href='https://envytheme.com/' target='_blank'>
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

export default Dashboard;
