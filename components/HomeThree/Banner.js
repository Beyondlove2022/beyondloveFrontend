import Typist from 'react-typist';

const Banner = () => {
  return (
    <>
      <section className='banner-wrapper-area'>
        <div className='container'>
          <div className='banner-wrapper-content'>
            <h1 className="banner-three-heading">
              <span className="typewrite">Find Nearby</span>
                <Typist>
                  <span>Hotels </span>
                  <Typist.Backspace count={15} delay={200}/>
                  <span> Restaurants </span>
                  <Typist.Backspace count={15} delay={200} />
                  <span> Beauty </span>
                  <Typist.Backspace count={15} delay={200} />
                  <span> Fitness </span>
                  <Typist.Backspace count={15} delay={200} />
                  <span> Shopping </span>
                </Typist>

                <span className='wrap'></span>
              
            </h1>
            <p>Expolore top-rated attractions, activities and more...</p>
            <form>
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
                  <div className='form-group category-select banner-three-select-custom'>
                    <label className='category-icon'>
                      <i className='flaticon-category'></i>
                    </label>
                    <select className="banner-form-select-two">
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
            </form>
            <ul className='popular-search-list'>
              <li>Popular:</li>
              <li>
                <a href='#'>Restaurants</a>
              </li>
              <li>
                <a href='#'>Events</a>
              </li>
              <li>
                <a href='#'>Clothing</a>
              </li>
              <li>
                <a href='#'>Bank</a>
              </li>
              <li>
                <a href='#'>Fitness</a>
              </li>
              <li>
                <a href='#'>Bookstore</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
