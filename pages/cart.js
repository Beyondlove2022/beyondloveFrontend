import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';

const Cart = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Cart' pageName='Cart' />

      <section className='cart-area ptb-100'>
        <div className='container'>
          <form>
            <div className='cart-table table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th scope='col'>Product</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Unit Price</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className='product-thumbnail'>
                      <a href='#'>
                        <img
                          src='/images/products/products-img1.jpg'
                          alt='item'
                        />
                      </a>
                    </td>

                    <td className='product-name'>
                      <a href='#'>Note Book Mockup</a>
                    </td>

                    <td className='product-price'>
                      <span className='unit-amount'>$250.00</span>
                    </td>

                    <td className='product-quantity'>
                      <div className='input-counter'>
                        <span className='minus-btn'>
                          <i className='bx bx-minus'></i>
                        </span>
                        <input type='text' min='1' value='1' onChange={e => e} />
                        <span className='plus-btn'>
                          <i className='bx bx-plus'></i>
                        </span>
                      </div>
                    </td>

                    <td className='product-subtotal'>
                      <span className='subtotal-amount'>$250.00</span>

                      <a href='#' className='remove'>
                        <i className='bx bx-trash'></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className='product-thumbnail'>
                      <a href='#'>
                        <img
                          src='/images/products/products-img2.jpg'
                          alt='item'
                        />
                      </a>
                    </td>

                    <td className='product-name'>
                      <a href='#'>Motivational Book Cover</a>
                    </td>

                    <td className='product-price'>
                      <span className='unit-amount'>$200.00</span>
                    </td>

                    <td className='product-quantity'>
                      <div className='input-counter'>
                        <span className='minus-btn'>
                          <i className='bx bx-minus'></i>
                        </span>
                        <input type='text' min='1' value='1' onChange={e => e} />
                        <span className='plus-btn'>
                          <i className='bx bx-plus'></i>
                        </span>
                      </div>
                    </td>

                    <td className='product-subtotal'>
                      <span className='subtotal-amount'>$200.00</span>

                      <a href='#' className='remove'>
                        <i className='bx bx-trash'></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className='product-thumbnail'>
                      <a href='#'>
                        <img
                          src='/images/products/products-img3.jpg'
                          alt='item'
                        />
                      </a>
                    </td>

                    <td className='product-name'>
                      <a href='#'>Book Cover Softcover</a>
                    </td>

                    <td className='product-price'>
                      <span className='unit-amount'>$200.00</span>
                    </td>

                    <td className='product-quantity'>
                      <div className='input-counter'>
                        <span className='minus-btn'>
                          <i className='bx bx-minus'></i>
                        </span>
                        <input type='text' min='1' value='1' onChange={e => e} />
                        <span className='plus-btn'>
                          <i className='bx bx-plus'></i>
                        </span>
                      </div>
                    </td>

                    <td className='product-subtotal'>
                      <span className='subtotal-amount'>$200.00</span>

                      <a href='#' className='remove'>
                        <i className='bx bx-trash'></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className='product-thumbnail'>
                      <a href='#'>
                        <img
                          src='/images/products/products-img4.jpg'
                          alt='item'
                        />
                      </a>
                    </td>

                    <td className='product-name'>
                      <a href='#'>Stop and Take a Second</a>
                    </td>

                    <td className='product-price'>
                      <span className='unit-amount'>$150.00</span>
                    </td>

                    <td className='product-quantity'>
                      <div className='input-counter'>
                        <span className='minus-btn'>
                          <i className='bx bx-minus'></i>
                        </span>
                        <input type='text' min='1' value='1' onChange={e => e} />
                        <span className='plus-btn'>
                          <i className='bx bx-plus'></i>
                        </span>
                      </div>
                    </td>

                    <td className='product-subtotal'>
                      <span className='subtotal-amount'>$150.00</span>
                      <a href='#' className='remove'>
                        <i className='bx bx-trash'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='cart-buttons'>
              <div className='row align-items-center'>
                <div className='col-lg-7 col-sm-7 col-md-7'>
                  <div className='shopping-coupon-code'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Coupon code'
                      name='coupon-code'
                      id='coupon-code'
                    />
                    <button type='submit'>Apply Coupon</button>
                  </div>
                </div>

                <div className='col-lg-5 col-sm-5 col-md-5 text-right'>
                  <a href='#' className='default-btn'>
                    Update Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='cart-totals'>
              <h3>Cart Totals</h3>

              <ul>
                <li>
                  Subtotal <span>$800.00</span>
                </li>
                <li>
                  Shipping <span>$30.00</span>
                </li>
                <li>
                  Total <span>$830.00</span>
                </li>
              </ul>
              <Link href='/checkout'>
                <a className='default-btn'>Proceed to Checkout</a>
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Cart;
