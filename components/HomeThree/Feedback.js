import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 30,
  nav: true,
  mouseDrag: false,
  items: 3,
  dots: true,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

const Feedback = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className='feedback-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>User’s Feedback About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='feedback-slides owl-theme'>
            {display ? (
              <OwlCarousel {...options}>
                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus viverra maecenas
                    accumsan.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <img src='/images/user1.jpg' alt='image' />
                      <div className='title'>
                        <h3>John Smith</h3>
                        <span>Restaurant Owner</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus viverra maecenas
                    accumsan.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <img src='/images/user2.jpg' alt='image' />
                      <div className='title'>
                        <h3>Sarah Taylor</h3>
                        <span>Hotel Owner</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bx-star'></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus viverra maecenas
                    accumsan.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <img src='/images/user3.jpg' alt='image' />
                      <div className='title'>
                        <h3>Alex Hales</h3>
                        <span>Developer</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='single-feedback-item'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                    <i className='bx bx-star'></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida. Risus viverra maecenas
                    accumsan.
                  </p>
                  <div className='client-info'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <img src='/images/user4.jpg' alt='image' />
                      <div className='title'>
                        <h3>Andy James</h3>
                        <span>Traveler</span>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
