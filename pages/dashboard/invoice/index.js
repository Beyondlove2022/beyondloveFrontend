import Link from 'next/link';
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';

const Invoice = () => {
  return (
    <>
      <DashboardNavbar />
      <div className='main-content d-flex flex-column'>
        <NavbarThree />

        <div className='breadcrumb-area'>
          <h1>Invoice</h1>
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
            <li className='item'>Invoice</li>
          </ol>
        </div>

        <div className='invoice-area'>
          <div className='invoice-header d-flex justify-content-between'>
            <div className='invoice-left-text'>
              <h3 className='mb-0'>Indice Admin</h3>
              <p className='mt-2 mb-0'>
                M/2750, <br />
                Quadra Street, <br />
                Victoria, <br />
                Canada.
              </p>
            </div>
            <div className='invoice-right-text'>
              <h3 className='mb-0 text-uppercase'>Invoice</h3>
            </div>
          </div>
          <div className='invoice-middle'>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='text'>
                  <h4 className='mb-2'>Bill To</h4>
                  <span className='d-block mb-1'>Jessie M Home</span>
                  <span className='d-block mb-1'>2019 Redbud Drive</span>
                  <span className='d-block'>New York, NY 10011</span>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='text'>
                  <h4 className='mb-2'>Ship To</h4>
                  <span className='d-block mb-1'>Jessie M Home</span>
                  <span className='d-block mb-1'>2019 Redbud Drive</span>
                  <span className='d-block'>New York, NY 10011</span>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='text text-right'>
                  <h5>
                    Invoice # <sub>Int-001</sub>
                  </h5>
                  <h5>
                    Invoice Date # <sub>11/12/2019</sub>
                  </h5>
                  <h5>
                    P.O # <sub>2412/2019</sub>
                  </h5>
                  <h5 className='mb-0'>
                    Due Date # <sub>26/12/2019</sub>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className='invoice-table table-responsive'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Apple iPhone XR (64GB)</td>
                  <td className='text-right'>$100.00</td>
                  <td className='text-right'>$100.00</td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Apple iPhone XR Black</td>
                  <td className='text-right'>$25.00</td>
                  <td className='text-right'>$50.00</td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>HeadPhone</td>
                  <td className='text-right'>$15.00</td>
                  <td className='text-right'>$45.00</td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>HeadPhone</td>
                  <td className='text-right'>$15.00</td>
                  <td className='text-right'>$45.00</td>
                </tr>
                <tr>
                  <td className='text-right' colspan='3'>
                    <strong>Subtotal</strong>
                  </td>
                  <td className='text-right'>$195.00</td>
                </tr>
                <tr>
                  <td className='text-right' colspan='3'>
                    <strong>Sales Tax 5.0%</strong>
                  </td>
                  <td className='text-right'>$9.75</td>
                </tr>
                <tr>
                  <td className='text-right total' colspan='3'>
                    <strong>Total</strong>
                  </td>
                  <td className='text-right total-price'>
                    <strong>$204.75</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='invoice-btn-box text-right'>
            <a href='#' className='default-btn'>
              <i className='bx bx-printer'></i> Print
            </a>
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

export default Invoice;
