import Link from 'next/link';
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [review, setReview] = useState([])

  useEffect(() => {
    if (typeof window != "undefined") {
      let user = JSON.parse(localStorage.getItem("user"));
      let id = user._id
      console.log(id)
      getReviews(id)
      console.log("we are running on the client");
    } else {
      console.log("we are running on the server");
    }
  }, [])

  const getReviews = async (id) => {
    try {
      const { data } = await axios.get(`${process.env.DOMAIN_NAME}/api/get-review/${id}`);
      console.log(data)
      setReview(data.review);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <DashboardNavbar />

      <div className='main-content d-flex flex-column'>
        <NavbarThree />
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='visitor-reviews-box'>
              <h3>Visitor Reviews</h3>
              <div className='row' style={{ marginRight: "0" }}>
                {console.log(review.length)}
                {review.map((rev) => {
                  let date = rev.createdAt;
                  let createDate = new Date(date);
                  let stringDate = createDate.toString()
                  let reviewDate = stringDate.split(" ")
                  return (
                    <div className="col-lg-6 col-md-6" key={rev._id}>
                      <div className='user-review'>
                        <img src='/images/user1.jpg' className='user' alt='image' />
                        <div className='review-rating'>
                          <div className='review-stars'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                          </div>
                          <span className='d-inline-block'>
                            {rev.customerName}{' '}
                            <span>
                              on <a href='#'>Farmis Hotel</a>
                            </span>
                          </span>
                        </div>
                        <span className='date'>
                          <i className='bx bx-calendar'></i> {reviewDate[2]} {reviewDate[1]} {reviewDate[3]} - {reviewDate[4]}
                        </span>
                        <p>
                          Very well built theme, couldn't be happier with it. Can't wait
                        </p>
                        <div className='btn-box'>
                          <a href='#' className='default-btn'>
                            <i className='bx bx-reply'></i> Reply
                          </a>
                          <a href='#' className='default-btn danger ml-3'>
                            <i className='bx bx-trash'></i> Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}

              </div>

            </div>

          </div>
        </div>
      </div>

      <div className='flex-grow-1'></div>
      <div className="copyrights-area">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <p>
              <i className="bx bx-copyright"></i>Copyright © 2020{" "}
              <a href="/">BEYONDLOVE</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
