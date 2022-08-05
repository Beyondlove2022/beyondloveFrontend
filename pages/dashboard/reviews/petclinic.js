import Link from 'next/link';
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const Reviews = () => {
  const [review, setReview] = useState([])
  const [replay, setReplay] = useState("")
  const [error, setError] = useState(false)
  const [token, setToken] = useState("")
  const [reviewId, setReviewId] = useState("")
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (typeof window != "undefined") {
      let token = localStorage.getItem("token");
      setToken(token)
      let user = JSON.parse(localStorage.getItem("user"));
      setCategory(user.category)
      let id = user._id
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

  const replaySubmit = async (e, replayId) => {
    setReviewId(replayId)
    e.preventDefault();
    const d = {
      reviewId: replayId,
      reply: replay
    }
    if (replay === "") {
      setError(true);
    } else {
      try {
        const { data } = await axios.put(`${process.env.DOMAIN_NAME}/api/create-replay/${token}/${category}`, d);
        console.log(data)
        setReview(data.reviews)
        if (data.success) {
          setReplay("");
          toast.success(data.msg, {
            theme: "light",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        console.log(error)
      }
    }
  }


  return (
    <>
      <DashboardNavbar />

      <div className='main-content d-flex flex-column'>
        <NavbarThree />
        <ToastContainer />
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='visitor-reviews-box'>
              {review.length > 0 ? <h3>Visitor Reviews Clinic</h3> : <h3>No Reviews</h3>}
              <div className='row' style={{ marginRight: "0" }}>
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
                            {rev.customerRating >= 1 && (
                              <i className="bx bxs-star"></i>
                            )}
                            {rev.customerRating >= 2 && (
                              <i className="bx bxs-star"></i>
                            )}
                            {rev.customerRating >= 3 && (
                              <i className="bx bxs-star"></i>
                            )}
                            {rev.customerRating >= 4 && (
                              <i className="bx bxs-star"></i>
                            )}
                            {rev.customerRating >= 5 && (
                              <i className="bx bxs-star"></i>
                            )}
                            {/*  */}
                            {rev.customerRating <= 4 && (
                              <i className="bx bx-star"></i>
                            )}
                            {rev.customerRating <= 3 && (
                              <i className="bx bx-star"></i>
                            )}
                            {rev.customerRating <= 2 && (
                              <i className="bx bx-star"></i>
                            )}
                            {rev.customerRating <= 1 && (
                              <i className="bx bx-star"></i>
                            )}
                          </div>
                          <span className='d-inline-block'>
                            {rev.customerName}{' '}
                          </span> <br />
                          <span>
                            <a>{rev.customerEmail}</a>
                          </span>
                        </div>
                        <span className='date'>
                          <i className='bx bx-calendar'></i> {reviewDate[2]} {reviewDate[1]} {reviewDate[3]} - {reviewDate[4]}
                        </span>
                        <p>
                          {rev.customerReview}
                        </p>
                        <p style={{ textAlign: "center" }}>
                          {rev.reply}
                        </p>

                        {/* replay section */}
                        {review.reply !== "" && review.reply == undefined ?
                          (<div className='btn-box'>
                            <form onSubmit={(e) => replaySubmit(e, rev._id)}>
                              <div className="form-group replay-btn">
                                <input
                                  type="text"
                                  placeholder="replay here"
                                  className="form-control"
                                  onChange={(e) => setReplay(e.target.value)}
                                />

                                <div className='btn-box'>
                                  <button className='default-btn' type='submit'>
                                    <i className='bx bx-reply'></i> Reply
                                  </button>
                                </div>
                              </div>
                              {error && replay == "" && (reviewId == rev._id) ? (
                                <span className="text-danger">Please Enter message</span>
                              ) : (
                                <></>
                              )}
                            </form>
                          </div>) : (<></>)}

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
