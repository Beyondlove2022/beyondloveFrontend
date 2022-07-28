import React from 'react';

const Footer = ({ bgColor }) => {
  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <ul className='link-list'>
                  <li>
                    <a href='/'>
                      <i className='flaticon-left-chevron'></i> Home
                    </a>
                  </li>
                  <li>
                    <a href='/about'>
                      <i className='flaticon-left-chevron'></i> About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <ul className='link-list'>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i> Wedding Photography
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i> Pre Wedding Shoot
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i> Baby Shoot
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i>Post-Wedding Photography
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <ul className='link-list'>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i>Concept Photography
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i> Fashion Shoots
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i> Candid Photography
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i>Couple Portraits
                      Stories
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <ul className='link-list'>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i>Bridal Photography
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i>Traditional Photography
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i>Photo Album
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className='flaticon-left-chevron'></i>Digital Album
                    </a>
                  </li>

                </ul>
              </div>
              <h3>Social Media</h3>
              <div className='footer-social-media mt-4'>
                <div>
                  <a href="#" target="_blank">
                    <i className='bx bxl-facebook-square'></i>
                  </a>
                </div>
                <div>
                  <a href="#" target="_blank">
                    <i className='bx bxl-twitter'></i>
                  </a>
                </div>
                <div>
                  <a href="#" target="_blank">
                    <i className='bx bxl-instagram'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <p>
              <span> Copyright © 2022</span> {' '}<a href='/' rel="noreferrer">
                BEYONDLOVE
              </a> {' '}<span>All Rights Reserved</span>
            </p>
          </div>
        </div>

        <div className='footer-image text-center'>
          <img src='/images/footer-image.png' alt='image' />
        </div>
      </footer>
    </>
  );
};

export default Footer;
