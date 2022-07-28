import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const Faq = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Frequently Asked Questions' pageName='Frequently Asked Questions' />
      <section className='faq-area bg-f9f9f9 pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <div className='faq-item'>
                <h3>Q: What is Directory Listing?</h3>
                <p>
                  <strong>A:</strong> Sed perspiciatis unde omnis natus error
                  sit voluptatem totam rem aperiam, eaque quae architecto beatae
                  explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in
                  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='faq-item'>
                <h3>Q: Do I have to commit to a yearly subscription?</h3>
                <p>
                  <strong>A:</strong> Sed perspiciatis unde omnis natus error
                  sit voluptatem totam rem aperiam, eaque quae architecto beatae
                  explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in
                  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='faq-item'>
                <h3>Q: How much time does it take to get approval?</h3>
                <p>
                  <strong>A:</strong> Sed perspiciatis unde omnis natus error
                  sit voluptatem totam rem aperiam, eaque quae architecto beatae
                  explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in
                  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='faq-item'>
                <h3>Q: Can I create a free listing?</h3>
                <p>
                  <strong>A:</strong> Sed perspiciatis unde omnis natus error
                  sit voluptatem totam rem aperiam, eaque quae architecto beatae
                  explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in
                  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='faq-item'>
                <h3>Q: How many different listings can I make?</h3>
                <p>
                  <strong>A:</strong> Sed perspiciatis unde omnis natus error
                  sit voluptatem totam rem aperiam, eaque quae architecto beatae
                  explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in
                  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='faq-item'>
                <h3>Q: What if I want to delete the listing?</h3>
                <p>
                  <strong>A:</strong> Sed perspiciatis unde omnis natus error
                  sit voluptatem totam rem aperiam, eaque quae architecto beatae
                  explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in
                  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='faq-item'>
                <h3>Q: How do I sign up to get a directory listing added?</h3>
                <p>
                  <strong>A:</strong> Sed perspiciatis unde omnis natus error
                  sit voluptatem totam rem aperiam, eaque quae architecto beatae
                  explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in
                  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='faq-item'>
                <h3>
                  Q: What are the other features the Directory Listing have?
                </h3>
                <p>
                  <strong>A:</strong> Sed perspiciatis unde omnis natus error
                  sit voluptatem totam rem aperiam, eaque quae architecto beatae
                  explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in
                  pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                  consectetur nulla. Nulla posuere sapien vitae lectus suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faq;
