import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';

import Link from 'next/link';

const Wallet = () => {
  return (
    <>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarThree />

        <div className='breadcrumb-area'>
          <h1>Wallet</h1>
          <ol className='breadcrumb'>
            <li className='item'>
            <Link href='/dashboard'>

              <a>Home</a>
            </Link>
            </li>
            <li className='item'>
            <Link href='/dashoboard'>

              <a>Dashboard</a>
            </Link>
            </li>
            <li className='item'>Wallet</li>
          </ol>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='stats-card-box'>
              <div className='icon-box'>
                <i className='bx bxs-badge-dollar'></i>
              </div>
              <span className='sub-title'>
                Withdrawable Balance{' '}
                <strong className='wallet-currency'>USD</strong>
              </span>
              <h3>100.88</h3>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='stats-card-box'>
              <div className='icon-box'>
                <i className='bx bx-dollar'></i>
              </div>
              <span className='sub-title'>
                Total Earnings <strong className='wallet-currency'>USD</strong>
              </span>
              <h3>542.64</h3>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'>
            <div className='stats-card-box'>
              <div className='icon-box'>
                <i className='bx bx-cart'></i>
              </div>
              <span className='sub-title'>Total Orders</span>
              <h3>08</h3>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='earnings-box'>
              <h3>
                Earnings <span className='comission-taken'>Fee: 10%</span>
              </h3>

              <ul>
                <li>
                  <div className='icon'>
                    <i className='bx bx-cart'></i>
                  </div>
                  <ul>
                    <li>Date: 17/08/2020</li>
                    <li>Order: #181812</li>
                    <li className='price'>$200.00</li>
                    <li className='fee-price'>Fee: $20.00</li>
                    <li className='price'>
                      Net Earning: <strong>$180.00</strong>
                    </li>
                  </ul>
                  <span>Farmis Restaurant</span>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-shopping-bag'></i>
                  </div>
                  <ul>
                    <li>Date: 16/08/2020</li>
                    <li>Order: #181811</li>
                    <li className='price'>$76.00</li>
                    <li className='fee-price'>Fee: $6.00</li>
                    <li className='price'>
                      Net Earning: <strong>$70.00</strong>
                    </li>
                  </ul>
                  <span>Shopping Complex Center</span>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-cart'></i>
                  </div>
                  <ul>
                    <li>Date: 15/08/2020</li>
                    <li>Order: #181810</li>
                    <li className='price'>$80.00</li>
                    <li className='fee-price'>Fee: $5.00</li>
                    <li className='price'>
                      Net Earning: <strong>$75.00</strong>
                    </li>
                  </ul>
                  <span>Gym Training Center</span>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-shopping-bag'></i>
                  </div>
                  <ul>
                    <li>Date: 14/08/2020</li>
                    <li>Order: #181809</li>
                    <li className='price'>$150.00</li>
                    <li className='fee-price'>Fee: $25.00</li>
                    <li className='price'>
                      Net Earning: <strong>$125.00</strong>
                    </li>
                  </ul>
                  <span>The Magician Restaurant</span>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-cart'></i>
                  </div>
                  <ul>
                    <li>Date: 13/08/2020</li>
                    <li>Order: #181808</li>
                    <li className='price'>$100.00</li>
                    <li className='fee-price'>Fee: $10.00</li>
                    <li className='price'>
                      Net Earning: <strong>$90.00</strong>
                    </li>
                  </ul>
                  <span>Oriental Shopping Center</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-6 col-md-12'>
            <div className='earnings-box'>
              <h3>Payout History</h3>

              <ul>
                <li>
                  <div className='icon'>
                    <i className='bx bx-wallet'></i>
                  </div>
                  <ul>
                    <li className='unpaid'>Unpaid</li>
                    <li>Period: 08/2020</li>
                  </ul>
                  <span>$100.00</span>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-wallet'></i>
                  </div>
                  <ul>
                    <li className='paid'>Paid</li>
                    <li>Period: 07/2020</li>
                  </ul>
                  <span>$70.00</span>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-wallet'></i>
                  </div>
                  <ul>
                    <li className='unpaid'>Unpaid</li>
                    <li>Period: 06/2020</li>
                  </ul>
                  <span>$75.00</span>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-wallet'></i>
                  </div>
                  <ul>
                    <li className='unpaid'>Unpaid</li>
                    <li>Period: 05/2020</li>
                  </ul>
                  <span>$125.00</span>
                </li>
                <li>
                  <div className='icon'>
                    <i className='bx bx-wallet'></i>
                  </div>
                  <ul>
                    <li className='paid'>Paid</li>
                    <li>Period: 04/2020</li>
                  </ul>
                  <span>$90.00</span>
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
                <a href='https://envytheme.com/' target='_blank' rel="noreferrer" rel="noreferrer">
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

export default Wallet;
