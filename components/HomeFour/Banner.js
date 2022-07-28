import { useState, useEffect } from 'react';
import Typist from 'react-typist';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: true,
  items: 1,
  dots: true,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const Banner = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='home-slider-area'>
        <div className='home-slides owl-theme'>
          {display ? (
            <OwlCarousel {...options}>
              <div className='single-banner-item item-bg1'></div>
              <div className='single-banner-item item-bg2'></div>
              <div className='single-banner-item item-bg3'></div>
            </OwlCarousel>
          ) : (
            ''
          )}
        </div>
        <div className='banner-content'>
          <h1 className="banner-two-heading">
          <span className='typewrite'>
            Find Nearby
            </span>
           
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
                <div className='form-group category-select'>
                  <label className='category-icon'>
                    <i className='flaticon-category'></i>
                  </label>
                  <select className='banner-form-select-four'>
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
        </div>
      </section>
    </>
  );
};

export default Banner;
