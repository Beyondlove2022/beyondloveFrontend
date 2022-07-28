import Link from 'next/link';

const Category = ({ title }) => {
  return (
    <>
      <section className='category-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>
              Venue <span></span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-8 col-sm-12 col-md-12 venue-img'>
            <img src='/images/mahal.png' alt='image' />
            </div>
            <div className='col-lg-4 col-sm-12 col-md-12 venue-add'>
              <span>Time:</span><span> 9:10 PM to 11:30 Pm</span>
              <br />
              <br />
              <span>Address:</span><span> R44, R Block 15th Street, Anna Nagar, Chennai - 600040, India</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
