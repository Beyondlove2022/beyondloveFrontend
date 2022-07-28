import CountUp from 'react-countup';

const Countdowns = () => {
    return (
        <>
            <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
              <div className='single-funfacts'>
                <i className='bx bx-bullseye'></i>
                <p>New Visitors</p>
                <h3 className='odometer' data-count='1421'>
                <CountUp end={999} duration={5} />
                </h3>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
              <div className='single-funfacts'>
                <i className='bx bx-group'></i>
                <p>Happy Customer</p>
                <h3 className='odometer' data-count='9579'>
                <CountUp end={363} duration={5}/>
                </h3>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
              <div className='single-funfacts'>
                <i className='bx bx-shape-polygon'></i>
                <p>Listings</p>
                <h3 className='odometer' data-count='1034'>
                <CountUp end={25} duration={5}/>
                </h3>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
              <div className='single-funfacts'>
                <i className='bx bx-trophy'></i>
                <p>Awards</p>
                <h3 className='odometer' data-count='52'>
                <CountUp end={100} duration={5} />
                </h3>
              </div>
            </div>
        </>
    )
}

export default Countdowns;
