import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { BsFacebook, BsFillHeartFill, BsYoutube } from "react-icons/bs";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiWhatsappFill } from "react-icons/ri";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { MdEmail } from "react-icons/md";
//components
import NavbarTwo from "../components/_App/NavbarTwo";
import PopularPlacesFilter from "../components/Common/PopularPlacesFilter";
import Footer from "../components/_App/Footer";
import { useRouter } from "next/router";

const options = {
  loop: true,
  margin: 20,
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

const optionsTwo = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  items: 1,
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const SingleListings = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  // const [category, setCategory] = useState("");
  const [run, setRun] = useState(false);
  const [business, setBusiness] = useState(null);
  const [coverImg, setCoverImage] = useState(null);
  const [token, setToken] = useState("");
  const [categoryProfile, setCategoryProfile] = useState("");
  const [businessId, setBusinessid] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [userType, setUsetType] = useState("");
  const [like, setLike] = useState(null);
  const [likeCount, setLikeCount] = useState();
  const [customerName, SetCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(null);
  const [error, setError] = useState(false);
  const [averageRating, setAverageRating] = useState();
  const [review, setReview] = useState([]);
  const [displayDropdownShare, setDisplayDropdownShare] = useState(false);
  const [run2, setRun2] = useState(false);
  const router = useRouter();
  // console.log(router);
  // const shareUrl = `http://localhost:3000/single-listings/?category=${cate},${id}`;
  const shareUrl = `www.google.com`;
  useEffect(() => {
    if (typeof window !== "undefined") {
      let category = router.query.category;
      let id = router.query.id;
      setBusinessid(id);
      setisMounted(true);
      setDisplay(true);
      let token = localStorage.getItem("token");
      let user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        setUsetType(user.userType);
        setCustomerId(user._id);
        getCustomerProfile(user._id);
        setCustomerEmail(user.email);
        setToken(token);
      }
      setCategoryProfile(category);
      if (category != undefined && id != undefined) {
        console.log("not undefined");
        getUniqueProfile(category, id);
      } else {
        setRun(!run);
        console.log("undefined");
      }
      console.log(router.query.category);
    } else {
      console.log("we are running on the server");
    }
  }, [run]);

  const toggleDropdownShare = () => {
    setDisplayDropdownShare(!displayDropdownShare);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      let id = router.query.id;
      getReviews(id);
    } else {
      console.log("we are running on the server");
    }
  }, [run2]);

  const getCustomerProfile = async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.DOMAIN_NAME}/api/customer/get-profile/${id}`
      );
      SetCustomerName(data.customer.customerName);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueProfile = async (cate, id) => {
    console.log("running");
    try {
      const { data } = await axios.get(
        `${process.env.DOMAIN_NAME}/api/business/get-profile/${cate}/${id}`
      );
      setLikeCount(data.business.likes.length);
      setBusiness(data.business);
      setCoverImage(
        `${process.env.DOMAIN_NAME}/api/business/get-photos/${data.business.coverImage}`
      );
      if (data.success) {
        toast.success(data.msg, {
          theme: "light",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(data.msg, {
          theme: "light",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const businessLikeWithoutLogin = () => {
    toast.error("Please Login As Customer", {
      theme: "light",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const vendorLike = async (e) => {
    e.preventDefault();
    const d = {
      businessId,
      customerId,
    };
    try {
      const { data } = await axios.put(
        `${process.env.DOMAIN_NAME}/api/business/like-unlike/${categoryProfile}/${token}`,
        d
      );
      if (data.success) {
        toast.success(data.msg, {
          theme: "light",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLike(data.like);
        if (data.like) {
          setLikeCount(likeCount + 1);
        }
        if (!data.like) {
          setLikeCount(likeCount - 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reviewSubmit = async (e) => {
    e.preventDefault();
    if (reviewMsg !== " " && rating !== null) {
      setError(false);
      const d = {
        customerId,
        businessId,
        customerEmail,
        customerName,
        customerRating: rating,
        customerReview: reviewMsg,
      };
      console.log(d);
      try {
        const { data } = await axios.post(
          `${process.env.DOMAIN_NAME}/api/create-review/${token}`,
          d
        );
        console.log(data);
        if (data.success) {
          let custRating = 0;
          toast.success(data.msg, {
            theme: "light",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setReviewMsg(" ");
          data.review.map((rate) => {
            custRating = parseInt(rate.customerRating) + custRating;
          });
          const average = Math.round(custRating / data.review.length);
          setAverageRating(average);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };

  const getReviews = async (id) => {
    let custRating = 0;
    try {
      const { data } = await axios.get(
        `${process.env.DOMAIN_NAME}/api/get-review/${id}`
      );
      setReview(data.review);
      setRun2(!run2)
      data.review.map((rate) => {
        custRating = parseInt(rate.customerRating) + custRating;
      });
      const average = Math.round(custRating / data.review.length);
      setAverageRating(average);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReview = async (e, reviewId, businessId) => {
    e.preventDefault();
    // const d = {
    //   businessId,
    //   reviewId,
    // };
    // console.log(d);
    try {
      const { data } = await axios.delete(
        `${process.env.DOMAIN_NAME}/api/delete-review/${reviewId}/${token}`
      );
      console.log(data);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <>
      <NavbarTwo />
      <section className="listings-details-area pb-70">
        <div className="listings-details-image">
          <ToastContainer />
          {coverImg !== null && (
            <img src={coverImg} alt="image" className="cover-img" />
          )}

          <div className="container">
            <div className="container">
              <div className="listings-details-content">
                <span className="meta">
                  <i className="flaticon-furniture-and-household"></i>
                  {business !== null && business.category}
                </span>
                {business !== null && <h3>{business.businessName}</h3>}
                {/* <----Rating----> */}
                <div className="rating d-flex align-items-center">
                  {averageRating >= 1 && (
                    <span className="bx bxs-star checked"></span>
                  )}
                  {averageRating >= 2 && (
                    <span className="bx bxs-star checked"></span>
                  )}
                  {averageRating >= 3 && (
                    <span className="bx bxs-star checked"></span>
                  )}
                  {averageRating >= 4 && (
                    <span className="bx bxs-star checked"></span>
                  )}
                  {averageRating >= 5 && (
                    <span className="bx bxs-star checked"></span>
                  )}
                  {/*  */}
                  {averageRating < 5 && (
                    <span className="bx bx-star checked"></span>
                  )}
                  {averageRating < 4 && (
                    <span className="bx bx-star checked"></span>
                  )}
                  {averageRating < 3 && (
                    <span className="bx bx-star checked"></span>
                  )}
                  {averageRating < 2 && (
                    <span className="bx bx-star checked"></span>
                  )}
                  {averageRating < 1 && (
                    <span className="bx bx-star checked"></span>
                  )}
                  {/* <span className="rating-count">-{averageRating}</span> */}
                </div>
                <ul className="d-flex align-items-center">
                  {business !== null && (
                    <li className="phone-number">
                      <a href="#">
                        <i className="bx bx-phone-call"></i> {business.mobile}
                      </a>
                    </li>
                  )}
                  {/* <------Opening and Closing Time------> */}
                  {/* <li className="time">
                    <i className="bx bx-time-five"></i>
                    <span>Currently Open</span>
                    08:00 AM - 10:00 PM
                  </li> */}
                  {business !== null && (
                    <li className="location">
                      <i className="bx bx-map"></i>
                      <span>Location</span>
                      <p>
                        {" "}
                        {business.location[0]}, {business.city[0]},{" "}
                        {business.state[0]}
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* <----Share And Save----> */}
          <div className="container-fluid">
            <ul className="share-save">
              <li>
                <div className="share" onClick={toggleDropdownShare}>
                  <i className="bx bx-share-alt"></i> Share
                </div>
                <div
                  className={
                    displayDropdownShare
                      ? "dropdown-menu show pad-none"
                      : "dropdown-menu "
                  }
                >
                  <div className="share-icons">
                    <div>
                      <FacebookShareButton
                        url={shareUrl}
                        quote={""}
                        hashtag={""}
                      >
                        <BsFacebook size="27px" color="3B5998" />
                      </FacebookShareButton>
                    </div>
                    <div>
                      <EmailShareButton url={shareUrl} quote={""} hashtag={""}>
                        <MdEmail size="27px" color="red" />
                      </EmailShareButton>
                    </div>
                    <div>
                      <WhatsappShareButton
                        url={shareUrl}
                        quote={""}
                        hashtag={""}
                      >
                        <RiWhatsappFill size="27px" color="rgb(78 197 91)" />
                      </WhatsappShareButton>
                    </div>
                  </div>
                </div>

                <div className="social">
                  <a href="#">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-pinterest"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                </div>
              </li>

              <li>
                <div className="like-btn">
                  {/* <button onClick={vendorLike}>
                    <BsFillHeartFill fill="red" className="mr-1" />
                  </button> */}
                  {userType == "Customer" ? (
                    <button onClick={vendorLike}>
                      {like ? (
                        <>
                          <BsFillHeartFill fill="red" className="mr-1" />
                          {likeCount}
                        </>
                      ) : (
                        <>
                          <BsFillHeartFill className="mr-1" />
                          {likeCount}
                        </>
                      )}
                    </button>
                  ) : (
                    <button onClick={businessLikeWithoutLogin}>
                      <>
                        <BsFillHeartFill className="mr-1" />
                        {likeCount}
                      </>
                    </button>
                  )}
                </div>
                {/* <a href="#">
                  <i className="bx bx-heart"></i> Like
                </a> */}
              </li>
            </ul>
          </div>
        </div>

        {/* <div className='listings-details-nav'>
          <div className='container'>
            <ul className='nav nav-tabs'>
              <li className='nav-item'>
                <a className='nav-link active' href='#overview'>
                  Overview
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#gallery'>
                  Gallery
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#pricing'>
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#review'>
                  Review
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#add-review'>
                  Add Review
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="listings-details-desc">
                <h3>Details</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>

                {/* Review show secttion */}
                {review.length > 0 && (
                  <div id="review">
                    <h3>Review</h3>
                    <div className="listings-review-comments">
                      {review.map((rev) => {
                        let date = rev.createdAt;
                        let createDate = new Date(date);
                        let stringDate = createDate.toString();
                        let reviewDate = stringDate.split(" ");
                        return (
                          <div className="user-review">
                            <div className="row m-0">
                              <div className="col-lg-6 col-md-4 p-0">
                                <div className="user">
                                  <div className="d-flex">
                                    <img
                                      src="/images/user1.jpg"
                                      alt="image"
                                      style={{ width: "85px" }}
                                    />
                                    <div className="title">
                                      <h4>{rev.customerName}</h4>
                                      <span>{rev.customerEmail}</span>
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-8 p-0">
                                {rev.customerId == customerId && (
                                  <button className="image-trash"
                                    onClick={(e) =>
                                      deleteReview(e, rev._id, rev.businessId)
                                    }
                                  >
                                    <RiDeleteBin6Line color="white" size="20" />
                                  </button>
                                )}
                                <div className="comments">
                                  <div className="rating">
                                    {rev.customerRating >= 1 && (
                                      <span className="bx bxs-star checked"></span>
                                    )}
                                    {rev.customerRating >= 2 && (
                                      <span className="bx bxs-star checked"></span>
                                    )}
                                    {rev.customerRating >= 3 && (
                                      <span className="bx bxs-star checked"></span>
                                    )}
                                    {rev.customerRating >= 4 && (
                                      <span className="bx bxs-star checked"></span>
                                    )}
                                    {rev.customerRating >= 5 && (
                                      <span className="bx bxs-star checked"></span>
                                    )}
                                    {/*  */}
                                    {rev.customerRating <= 4 && (
                                      <span className="bx bx-star checked"></span>
                                    )}
                                    {rev.customerRating <= 3 && (
                                      <span className="bx bx-star checked"></span>
                                    )}
                                    {rev.customerRating <= 2 && (
                                      <span className="bx bx-star checked"></span>
                                    )}
                                    {rev.customerRating <= 1 && (
                                      <span className="bx bx-star checked"></span>
                                    )}
                                  </div>
                                  <p>
                                    <span className="review-reply">
                                      Review:{" "}
                                    </span>
                                    {rev.customerReview}
                                  </p>
                                  <p>
                                    <span className="review-reply">
                                      Reply:{" "}
                                    </span>
                                    {rev.reply}
                                  </p>
                                  <div className="row m-0">
                                    <div className="col-lg-8 col-md-8 col-8 col-sm-8 p-0">
                                      <ul className="like-unlike">
                                        <li>
                                          <a>{reviewDate[2]}</a>
                                        </li>
                                        <li>
                                          <a>{reviewDate[1]}</a>
                                        </li>
                                        <li>
                                          <a>{reviewDate[3]}</a>
                                        </li>
                                        <li>
                                          <a>{reviewDate[4]}</a>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* <div
                                    className="
                                  col-lg-4 col-md-4 col-4 col-sm-4
                                  p-0
                                  text-right
                                "
                                  >
                                    <a href="#">Comment</a>
                                  </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="listings-sidebar">
                {/* Booking Online */}
                {/* <div className="listings-widget book_listings">
                  <h3>Booking Online</h3>
                  <a href="#" className="default-btn">
                    Book Now
                  </a>
                  <span>
                    By <a href="#">Booking.com</a>
                  </span>
                </div> */}

                <div className="listings-widget listings_contact_details">
                  <h3>Contact Details</h3>
                  <ul>
                    {/* <li>
                      <i className="bx bx-globe"></i>
                      <a href="#">www.indice.com</a>
                    </li> */}
                    {business !== null && (
                      <li>
                        <i className="bx bx-phone-call"></i>
                        <a href="tel:+2122791456">{business.mobile}</a>
                      </li>
                    )}
                    {/* <li>
                      <i className="bx bx-directions"></i>
                      <a href="#">Get Directions</a>
                    </li> */}
                    {business !== null && (
                      <li>
                        <i className="bx bx-map"></i>
                        {business.location[0]}, {business.city[0]},{" "}
                        {business.state[0]}
                      </li>
                    )}
                  </ul>
                </div>

                <div className="listings-details-desc">
                  {/* <------Amenities-----> */}
                  {/* <h3>Amenities</h3>
                <ul className="amenities-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Parking Street
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Vegan Options
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Kids Activities Nearby
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Accepts Apple Pay
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Accepts Google Pay
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Wheelchair Accessible
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Takes Reservations
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Offers Takeout
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Bike Parking
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Good for Kids
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Accepts Cryptocurrency
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Accepts Credit Cards
                    </span>
                  </li>
                </ul> */}

                  {/* <h3>Gallery</h3>
                <div id="gallery">
                  <div className="gallery-slides owl-theme">
                    {display ? (
                      <OwlCarousel {...options}>
                        <div className="single-image-bpx">
                          <img src="/images/gallery/gallery1.jpg" alt="image" />
                        </div>
                        <div className="single-image-bpx">
                          <img src="/images/gallery/gallery2.jpg" alt="image" />
                        </div>
                        <div className="single-image-bpx">
                          <img src="/images/gallery/gallery3.jpg" alt="image" />
                        </div>
                      </OwlCarousel>
                    ) : (
                      ""
                    )}
                  </div>
                </div> */}

                  {/* <------Pricing Section ----> */}
                  {/* <h3>Pricing</h3>
                <div id="pricing">
                  <ul className="pricing-list">
                    <li>
                      Pizza <span>$15</span>
                    </li>
                    <li>
                      Burger <span>$10</span>
                    </li>
                    <li>
                      Cool Drink <span>$12</span>
                    </li>
                    <li>
                      Fried Rice <span>$08</span>
                    </li>
                    <li>
                      Orange Juice <span>$05</span>
                    </li>
                  </ul>
                </div> */}

                  {/* <------Review Section ----> */}
                  {/* <h3>Review</h3>
                <div className="listings-review">
                  <div className="rating d-flex align-items-center">
                    <span className="bx bxs-star checked"></span>
                    <span className="bx bxs-star checked"></span>
                    <span className="bx bxs-star checked"></span>
                    <span className="bx bxs-star checked"></span>
                    <span className="bx bxs-star checked"></span>

                    <span className="overall-rating">5.0</span>
                    <span className="rating-count">(5 reviews)</span>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="row m-0">
                        <div className="side">
                          <div>Cleanliness</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-4"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>4.0</div>
                        </div>

                        <div className="side">
                          <div>Accuracy</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-5"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>5.0</div>
                        </div>

                        <div className="side">
                          <div>Location</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-5"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>5.0</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="row m-0">
                        <div className="side">
                          <div>Check-in</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-4"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>4.0</div>
                        </div>

                        <div className="side">
                          <div>Communication</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-5"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>5.0</div>
                        </div>

                        <div className="side">
                          <div>Value</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-5"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>5.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="write-a-review">
                  <h4>Tell people what you think.</h4>
                  <p>
                    Help others by sharing your experience with this business.
                  </p>
                  <a href="#" className="default-btn">
                    Write A Review
                  </a>
                </div>



                 */}
                  <div id="add-review">
                    {userType == "Customer" && (
                      <div className="review-form-wrapper">
                        <h3>Add A Review</h3>
                        {/* <p className="comment-notes">
                      Your email address will not be published. Required fields
                      are marked <span>*</span>
                    </p> */}

                        <form onSubmit={reviewSubmit}>
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="sub-ratings">
                                <div className="row">
                                  <div className="col-lg-12 col-md-4 col-6 col-sm-6">
                                    <div className="add-sub-rating">
                                      <h4>Rating</h4>
                                      <div className="cleanliness-rating">
                                        <input
                                          type="radio"
                                          id="cleanlinessStar5"
                                          name="cleanliness-rating"
                                          // value="5"
                                          onChange={() => setRating(5)}
                                        />
                                        <label htmlFor="cleanlinessStar5"></label>
                                        <input
                                          type="radio"
                                          id="cleanlinessStar4"
                                          name="cleanliness-rating"
                                          // value="4"
                                          onChange={() => setRating(4)}
                                        />
                                        <label htmlFor="cleanlinessStar4"></label>
                                        <input
                                          type="radio"
                                          id="cleanlinessStar3"
                                          name="cleanliness-rating"
                                          value="3"
                                          onChange={() => setRating(3)}
                                        />
                                        <label htmlFor="cleanlinessStar3"></label>
                                        <input
                                          type="radio"
                                          id="cleanlinessStar2"
                                          name="cleanliness-rating"
                                          value="2"
                                          onChange={() => setRating(2)}
                                        />
                                        <label htmlFor="cleanlinessStar2"></label>
                                        <input
                                          type="radio"
                                          id="cleanlinessStar1"
                                          name="cleanliness-rating"
                                          value="1"
                                          onChange={() => setRating(1)}
                                        />
                                        <label htmlFor="cleanlinessStar1"></label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name *"
                                  value={customerName}
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-6">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email *"
                                  value={customerEmail}
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <textarea
                                  placeholder="Your review"
                                  className="form-control"
                                  cols="30"
                                  rows="6"
                                  value={reviewMsg}
                                  onChange={(e) => setReviewMsg(e.target.value)}
                                ></textarea>
                              </div>
                              {error && (
                                <p style={{ color: "red" }}>
                                  Please give ratings and review
                                </p>
                              )}
                            </div>

                            {/* <div className="col-lg-12 col-md-12">
                          <p className="comment-form-cookies-consent">
                            <input type="checkbox" id="test1" />
                            <label htmlFor="test1">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </p>
                        </div> */}

                            <div className="col-lg-12 col-md-12">
                              <button type="submit">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                  {/* <--------Other Services-------> */}
                  {/* <h3>Other Nearby Services</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-listings-box">
                      <div className="listings-image">
                        <img src="/images/listings/listings1.jpg" alt="image" />
                        <a href="#" className="link-btn"></a>
                        <a href="#" className="bookmark-save">
                          <i className="flaticon-heart"></i>
                        </a>
                        <a href="#" className="category">
                          <i className="flaticon-cooking"></i>
                        </a>
                      </div>

                      <div className="listings-content">
                        <div className="author">
                          <div className="d-flex align-items-center">
                            <img src="/images/user1.jpg" alt="image" />
                            <span>Taylor</span>
                          </div>
                        </div>
                        <ul className="listings-meta">
                          <li>
                            <a href="#">
                              <i className="flaticon-furniture-and-household"></i>
                              Restaurant
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="flaticon-pin"></i> New York, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <a href="#">Chipotle Mexican Grill</a>
                        </h3>
                        <span className="status">
                          <i className="flaticon-save"></i> Open Now
                        </span>
                        <div
                          className="
                          d-flex
                          align-items-center
                          justify-content-between
                        "
                        >
                          <div className="rating">
                           <span className="bx bxs-star checked"></span>
                           <span className="bx bxs-star checked"></span>
                           <span className="bx bxs-star checked"></span>
                           <span className="bx bxs-star checked"></span>
                           <span className="bx bxs-star checked"></span>
                            <span className="count">(45)</span>
                          </div>
                          <div className="price">
                            Start From <span>$150</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-listings-box">
                      <div className="listings-image">
                        <div className="listings-image-slides owl-theme">
                          {display ? (
                            <OwlCarousel {...optionsTwo}>
                              <div className="single-image">
                                <img
                                  src="/images/listings/listings2.jpg"
                                  alt="image"
                                />
                                <a href="#" className="link-btn"></a>
                              </div>

                              <div className="single-image">
                                <img
                                  src="/images/listings/listings4.jpg"
                                  alt="image"
                                />
                                <a href="#" className="link-btn"></a>
                              </div>
                            </OwlCarousel>
                          ) : (
                            ""
                          )}
                        </div>
                        <a href="#" className="bookmark-save">
                          <i className="flaticon-heart"></i>
                        </a>
                        <a href="#" className="category">
                          <i className="flaticon-cooking"></i>
                        </a>
                      </div>

                      <div className="listings-content">
                        <div className="author">
                          <div className="d-flex align-items-center">
                            <img src="/images/user2.jpg" alt="image" />
                            <span>Sarah</span>
                          </div>
                        </div>
                        <ul className="listings-meta">
                          <li>
                            <a href="#">
                              <i className="flaticon-furniture-and-household"></i>
                              Hotel
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="flaticon-pin"></i> Los Angeles, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <a href="#">The Beverly Hills Hotel</a>
                        </h3>
                        <span className="status">
                          <i className="flaticon-save"></i> Open Now
                        </span>
                        <div
                          className="
                          d-flex
                          align-items-center
                          justify-content-between
                        "
                        >
                          <div className="rating">
                           <span className="bx bxs-star checked"></span>
                           <span className="bx bxs-star checked"></span>
                           <span className="bx bxs-star checked"></span>
                           <span className="bx bxs-star checked"></span>
                            <i className="bx bx-star"></i>
                            <span className="count">(10)</span>
                          </div>
                          <div className="price">
                            Start From <span>$200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>

                {/* Hosted By Profile */}
                {/* <div className="listings-widget listings_author">
                  <h3>Hosted By</h3>
                  <div className="author">
                    <div className="d-flex align-items-center">
                      <img src="/images/user1.jpg" alt="image" />
                      <div className="title">
                        <h4>
                          <a href="#">John Smith</a>
                        </h4>
                        <span>20 Places Hosted</span>
                      </div>
                    </div>
                     <div className="author-profile">
                      <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5">
                          <a href="#" className="view-profile">
                            View Profile
                          </a>
                        </div>

                        <div className="col-lg-7 col-md-7">
                          <ul className="social">
                            <li>
                              <a href="#">
                                <i className="bx bxl-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bx bxl-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bx bxl-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bx bxl-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer bgColor="bg-f5f5f5" />
    </>
  );
};

export default SingleListings;
