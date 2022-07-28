import Typist from 'react-typist';
import Link from 'next/link';

const Banner = () => {
  return (
    <>
      <div className='main-banner-area'>
        <div className='container'>
          <div className='main-banner-content'>
            <div className="banner-flexi">

            {/* <h1 className='banner-one-heading'>
              <span className='typewrite'> Find Nearby </span>
  
                <Typist>
                  <span>Hotels </span>
                  <Typist.Backspace count={15} delay={200} />
                  <span> Restaurants </span>
                  <Typist.Backspace count={15} delay={200} />
                  <span> Beauty </span>
                  <Typist.Backspace count={15} delay={200} />
                  <span> Fitness </span>
                  <Typist.Backspace count={15} delay={200} />
                  <span> Shopping </span>
                </Typist>
                <span className='wrap'></span>
  
            </h1> */}
            </div>
            {/* <p>Expolore top-rated attractions, activities and more...</p> */}
            {/* <form>
              <div className='row m-0 align-items-center'>
                <div className='col-lg-4 col-md-12 p-0'>
                  <div className='form-group'>
                    <label>
                      <i className='flaticon-search'></i>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='What are you looking for?'
                    />
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 p-0'>
                  <div className='form-group'>
                    <label>
                      <i className='flaticon-pin'></i>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Location'
                    />
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 p-0'>
                  <div className='form-group category-select'>
                    <label className='category-icon'>
                      <i className='flaticon-category'></i>
                    </label>
                    <select className='banner-form-select'>
                      <option>All Categories</option>
                      <option>Restaurants</option>
                      <option>Events</option>
                      <option>Clothing</option>
                      <option>Bank</option>
                      <option>Fitness</option>
                      <option>Bookstore</option>
                      <option>Shopping</option>
                      <option>Hotels</option>
                      <option>Hospitals</option>
                      <option>Culture</option>
                      <option>Beauty</option>
                    </select>
                  </div>
                </div>

                <div className='col-lg-2 col-md-12 p-0'>
                  <div className='submit-btn'>
                    <button type='submit'>Search Now</button>
                  </div>
                </div>
              </div>
            </form> */}
            {/* <ul className='popular-search-list'>
              <li>Popular:</li>
              <li>
                <Link href="/grid-listings-with-map">

                <a>Restaurants</a>
                </Link>
              </li>
              <li>
                <Link href="/grid-listings-with-map">

                <a>Events</a>
                </Link>
              </li>
              <li>
                <Link href="/grid-listings-with-map">

                <a>Clothing</a>
                </Link>
              </li>
              <li>
                <Link href="/grid-listings-with-map">

                <a>Bank</a>
                </Link>
              </li>
              <li>
                <Link href="/grid-listings-with-map">

                <a>Fitness</a>
                </Link>
              </li>
              <li>
                <Link href="/grid-listings-with-map">

                <a>Bookstore</a>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
