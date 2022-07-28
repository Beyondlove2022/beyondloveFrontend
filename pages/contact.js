import NavbarTwo from '../components/_App/NavbarTwo';
import Footer from '../components/_App/Footer';

const Contact = () => {
  return (
    <>
      <NavbarTwo />

      <div id='map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd'></iframe>
      </div>

      <section className='contact-info-area pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='contact-info-box'>
                <div className='back-icon'>
                  <i className='bx bx-map'></i>
                </div>
                <div className='icon'>
                  <i className='bx bx-map'></i>
                </div>
                <h3>Our Address</h3>
                <p>175 5th Ave, New York, NY 10010, United States</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='contact-info-box'>
                <div className='back-icon'>
                  <i className='bx bx-phone-call'></i>
                </div>
                <div className='icon'>
                  <i className='bx bx-phone-call'></i>
                </div>
                <h3>Contact</h3>
                <p>
                  Mobile: <a href='tel:+44457895789'>(+44) - 45789 - 5789</a>
                </p>
                <p>
                  E-mail: <a href='mailto:hello@indice.com'>hello@indice.com</a>
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
              <div className='contact-info-box'>
                <div className='back-icon'>
                  <i className='bx bx-time-five'></i>
                </div>
                <div className='icon'>
                  <i className='bx bx-time-five'></i>
                </div>
                <h3>Hours of Operation</h3>
                <p>Monday - Friday: 09:00 - 20:00</p>
                <p>Sunday & Saturday: 10:30 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact-area pb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Ready to Get Started?</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='contact-image'>
                <img src='/images/contact.png' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='contact-form'>
                <form id='contactForm'>
                  <div className='row'>
                    <div className='col-lg-12 col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='name'
                          className='form-control'
                          id='name'
                          required
                          data-error='Please enter your name'
                          placeholder='Your name'
                        />
                        <div className='help-block with-errors'></div>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          name='email'
                          className='form-control'
                          id='email'
                          required
                          data-error='Please enter your email'
                          placeholder='Your email address'
                        />
                        <div className='help-block with-errors'></div>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='phone_number'
                          className='form-control'
                          id='phone_number'
                          required
                          data-error='Please enter your phone number'
                          placeholder='Your phone number'
                        />
                        <div className='help-block with-errors'></div>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <textarea
                          name='message'
                          id='message'
                          className='form-control'
                          cols='30'
                          rows='6'
                          required
                          data-error='Please enter your message'
                          placeholder='Write your message...'
                        ></textarea>
                        <div className='help-block with-errors'></div>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <button type='submit' className='default-btn'>
                        Send Message
                      </button>
                      <div id='msgSubmit' className='h3 text-center hidden'></div>
                      <div className='clearfix'></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer bgColor="bg-f9f9f9"/>
    </>
  );
};

export default Contact;
