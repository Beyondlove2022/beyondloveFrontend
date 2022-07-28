import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 30,
  nav: true,
  mouseDrag: false,
  items: 2,
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const PlacesArea = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='places-area pt-100 pb-0'>
        <div className='container'>
          <div className='section-title'>
            <h2>Popular Places for Future Trips</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='places-image text-center'>
                <img src='/images/boy-girl.png' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='places-slides owl-theme'>
                {display ? (
                  <OwlCarousel {...options}>
                    <div className='single-places-box'>
                      <div className='image'>
                        <img
                          src='/images/destinations/destinations11.jpg'
                          alt='image'
                        />
                        <div className='country'>FRANCE</div>
                      </div>
                      <div className='content'>
                        <h3>Paris</h3>
                        <span>20 Places</span>
                      </div>
                      <a href='#' className='link-btn'></a>
                    </div>

                    <div className='single-places-box'>
                      <div className='image'>
                        <img
                          src='/images/destinations/destinations12.jpg'
                          alt='image'
                        />
                        <div className='country'>UNITED KINGDOM</div>
                      </div>
                      <div className='content'>
                        <h3>London</h3>
                        <span>15 Places</span>
                      </div>
                      <a href='#' className='link-btn'></a>
                    </div>

                    <div className='single-places-box'>
                      <div className='image'>
                        <img
                          src='/images/destinations/destinations13.jpg'
                          alt='image'
                        />
                        <div className='country'>ABUDABI</div>
                      </div>
                      <div className='content'>
                        <h3>Dubai</h3>
                        <span>21 Places</span>
                      </div>
                      <a href='#' className='link-btn'></a>
                    </div>
                  </OwlCarousel>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacesArea;
