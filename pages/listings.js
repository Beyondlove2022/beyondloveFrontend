import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

//components
import NavbarTwo from "../components/_App/NavbarTwo";
import PopularPlacesFilter from "../components/Common/PopularPlacesFilter";
import Footer from "../components/_App/Footer";
import axios from "axios";
import { useRouter } from "next/router";

const options = {
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

const GridListingsWithLeftSidebar = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const [categories, setCategories] = useState([]);
  const [business, setBusiness] = useState([]);
  // const [run, setRun] = useState(false);
  let router = useRouter();

  useEffect(() => {
    // setisMounted(true);
    // setDisplay(true);
    let categoryFilter = router.query.categoryName;
    let stateFilter = router.query.stateName;
    let cityFilter = router.query.cityName;
    let locationFilter = router.query.locationName;
    console.log(categoryFilter);
    console.log(stateFilter);
    console.log(cityFilter);
    console.log(locationFilter);
    // console.log(router.query, "router query");
    // if (router.query == "") {
    //   console.log(router.query.categoryName);
    //   console.log("empty");
    // } else if (router.query == undefined) {
    //   console.log(router.query.categoryName);
    //   console.log("have value");
    // } else if (router.query == "undefined") {
    //   console.log(router.query.categoryName);
    //   console.log("have value");
    // } else {
    //   console.log(router.query.categoryName);
    //   console.log("nothing comed");
    // }
    // setisMounted(false);

    // All Business filter
    if (
      (categoryFilter == "" || categoryFilter == undefined) &&
      (stateFilter == "" || stateFilter == undefined) &&
      (cityFilter == "" || cityFilter == undefined) &&
      (locationFilter == "" || locationFilter == undefined)
    ) {
      getBusinessWithoutCategory();
    }

    // Filter All Business by selected category
    if (
      categoryFilter != "" &&
      categoryFilter != undefined &&
      (stateFilter == "" || stateFilter == undefined) &&
      (cityFilter == "" || cityFilter == undefined) &&
      (locationFilter == "" || locationFilter == undefined)
    ) {
      console.log("business");
      getBusinessWithCategory(categoryFilter);
    }

    // Filter All Business by selected state
    if (
      (categoryFilter == "" || categoryFilter == undefined) &&
      stateFilter != "" &&
      stateFilter != undefined &&
      (cityFilter == "" || cityFilter == undefined) &&
      (locationFilter == "" || locationFilter == undefined)
    ) {
      console.log("state");
      getBusinessWithoutCategory(stateFilter[1], "state");
    }

    // Filter All business by selected city
    if (
      (categoryFilter == "" || categoryFilter == undefined) &&
      stateFilter != "" &&
      stateFilter != undefined &&
      cityFilter != "" &&
      cityFilter != undefined &&
      (locationFilter == "" || locationFilter == undefined)
    ) {
      console.log("state");
      getBusinessWithoutCategory(cityFilter[2], "city");
    }

    // Filter all business by selected location
    if (
      (categoryFilter == "" || categoryFilter == undefined) &&
      stateFilter != "" &&
      stateFilter != undefined &&
      cityFilter != "" &&
      cityFilter != undefined &&
      locationFilter != "" &&
      locationFilter != undefined
    ) {
      console.log(locationFilter[3]);
      getBusinessWithoutCategory(locationFilter[3], "location");
    }

    // Filter all business by category and state
    if (
      categoryFilter != "" &&
      categoryFilter != undefined &&
      stateFilter != "" &&
      stateFilter != undefined &&
      (cityFilter == "" || cityFilter == undefined) &&
      (locationFilter == "" || locationFilter == undefined)
    ) {
      console.log("state");
      getBusinessWithCategory(categoryFilter, stateFilter[1], "state");
    }

    // Filter all business by category and city
    if (
      categoryFilter != "" &&
      categoryFilter != undefined &&
      stateFilter != "" &&
      stateFilter != undefined &&
      cityFilter != "" &&
      cityFilter != undefined &&
      (locationFilter == "" || locationFilter == undefined)
    ) {
      console.log("state");
      getBusinessWithCategory(categoryFilter, cityFilter[2], "city");
    }

    // Filter all business by category and city
    if (
      categoryFilter != "" &&
      categoryFilter != undefined &&
      stateFilter != "" &&
      stateFilter != undefined &&
      cityFilter != "" &&
      cityFilter != undefined &&
      locationFilter != "" &&
      locationFilter != undefined
    ) {
      console.log("state");
      getBusinessWithCategory(categoryFilter, locationFilter[3], "location");
    }
  }, []);

  // Get Business without category function
  const getBusinessWithoutCategory = async (id, location) => {
    try {
      const { data } = await axios.get(
        `${process.env.DOMAIN_NAME}/api/business/get-profiles-from-all-categories`
      );
      console.log(data.profilesArray);
      if (data.success) {
        setBusiness([]);
        let arr;
        if (location === "state") {
          arr = data.profilesArray.filter((profile) => id == profile.state[1]);
        } else if (location === "city") {
          arr = data.profilesArray.filter((profile) => id == profile.city[2]);
        } else if (location === "location") {
          arr = data.profilesArray.filter(
            (profile) => id == profile.location[3]
          );
        } else {
          console.log("running");
          arr = data.profilesArray;
        }
        console.log(arr);
        setBusiness(arr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get Business with category function
  const getBusinessWithCategory = async (category, id, location) => {
    console.log(category);
    console.log(id);
    console.log(location);
    const { data } = await axios.get(
      `${process.env.DOMAIN_NAME}/api/business/get-profiles-from-unique-category/${category}`
    );
    console.log(data);
    if (data.success) {
      setBusiness([]);
      let arr;
      if (location === "state") {
        arr = data.business.filter((profile) => id == profile.state[1]);
      } else if (location === "city") {
        // console.log(id, profile.city[2]);
        console.log(data.business.filter((profile) => id == profile.city[2]));
        arr = data.business.filter((profile) => id == profile.city[2]);
      } else if (location === "location") {
        arr = data.business.filter((profile) => id == profile.location[3]);
      } else {
        console.log("running");
        arr = data.business;
        // setBusiness(data.profilesArray);
      }
      console.log(arr);
      setBusiness(arr);
    }
  };

  const categoriesChange = (e) => {
    const available = categories.find((category) => category == e.target.value);
    if (!available) setCategories((cate) => [...cate, e.target.value]);
    if (available) {
      const filtered = categories.filter((cate) => cate !== e.target.value);
      setCategories(filtered);
    }
  };

  const getBusinessByCategories = async (e) => {
    e.preventDefault();
    setBusiness([]);
    for (var i = 0; i < categories.length; i++) {
      try {
        const { data } = await axios.get(
          `${process.env.DOMAIN_NAME}/api/business/get-profiles-from-unique-category/${categories[i]}`
        );
        data.business.map((buss) => setBusiness((prev) => [...prev, buss]));
        // console.log(business);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const gotoSingleProfilePage = (e, category, id) => {
    e.preventDefault();
    console.log(id, "id");
    router.push({
      pathname: "single-listings",
      query: { category, id },
    });
  };

  return (
    <>
      <NavbarTwo />
      <PopularPlacesFilter />

      <section className="listings-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <aside className="listings-widget-area">
                {/* <section className='widget widget_filters'>
                  <h3 className='widget-title'>Filters</h3>

                  <ul>
                    <li>
                      <button type='button'>$</button>
                    </li>
                    <li>
                      <button type='button'>$$</button>
                    </li>
                    <li>
                      <button type='button'>$$$</button>
                    </li>
                    <li>
                      <button type='button'>$$$$</button>
                    </li>
                  </ul>
                </section> */}

                <section className="widget widget_categories">
                  <h3 className="widget-title">Categories</h3>
                  <form onSubmit={getBusinessByCategories}>
                    <ul>
                      <li>
                        <input
                          id="categories1"
                          type="checkbox"
                          value="PetClinic"
                          onChange={categoriesChange}
                        />
                        <label htmlFor="categories1">Clinic</label>
                      </li>
                      <li>
                        <input
                          id="categories2"
                          type="checkbox"
                          value="PetGrooming"
                          onChange={categoriesChange}
                        />
                        <label htmlFor="categories2">Grooming</label>
                      </li>
                      <li>
                        <input
                          id="categories3"
                          type="checkbox"
                          value="PetBoarding"
                          onChange={categoriesChange}
                        />
                        <label htmlFor="categories3">Boarding</label>
                      </li>
                      <li>
                        <input
                          id="categories4"
                          type="checkbox"
                          value="PetTraining"
                          onChange={categoriesChange}
                        />
                        <label htmlFor="categories4">Training</label>
                      </li>
                      <li>
                        <button type="submit" className="btn-filter">
                          Filter
                        </button>
                      </li>
                    </ul>
                  </form>
                </section>

                {/* <section className="widget widget_features">
                  <h3 className="widget-title">Features</h3>

                  <ul>
                    <li>
                      <input id="categories1" type="checkbox" />
                      <label htmlFor="categories1">Restaurant</label>
                    </li>
                    <li>
                      <input id="categories2" type="checkbox" />
                      <label htmlFor="categories2">Hotel</label>
                    </li>
                    <li>
                      <input id="categories3" type="checkbox" />
                      <label htmlFor="categories3">Beauty & Spa</label>
                    </li>
                    <li>
                      <input id="categories4" type="checkbox" />
                      <label htmlFor="categories4">Fitness</label>
                    </li>
                    <li>
                      <input id="categories5" type="checkbox" />
                      <label htmlFor="categories5">Shopping</label>
                    </li>
                    <li className="hide">
                      <input id="categories6" type="checkbox" />
                      <label htmlFor="categories6">Hospital</label>
                    </li>
                    <li className="hide">
                      <input id="categories7" type="checkbox" />
                      <label htmlFor="categories7">Events</label>
                    </li>
                    <li className="hide">
                      <input id="categories8" type="checkbox" />
                      <label htmlFor="categories8">Clothing</label>
                    </li>
                    <li className="see-all-btn">
                      <span>See All</span>
                    </li>
                  </ul>
                </section> */}

                {/* <section className="widget widget_distance">
                  <h3 className="widget-title">Distance</h3>

                  <ul>
                    <li>
                      <input id="distance1" type="checkbox" />
                      <label htmlFor="distance1">Driving (5 mi.)</label>
                    </li>
                    <li>
                      <input id="distance2" type="checkbox" />
                      <label htmlFor="distance2">Walking (1 mi.)</label>
                    </li>
                    <li>
                      <input id="distance3" type="checkbox" />
                      <label htmlFor="distance3">Biking (2 mi.)</label>
                    </li>
                    <li>
                      <input id="distance4" type="checkbox" />
                      <label htmlFor="distance4">Within 4 blocks</label>
                    </li>
                    <li>
                      <input id="distance5" type="checkbox" />
                      <label htmlFor="distance5">Bicycle (6 mi.)</label>
                    </li>
                    <li className="hide">
                      <input id="distance6" type="checkbox" />
                      <label htmlFor="distance6">Driving (10 mi.)</label>
                    </li>
                    <li className="hide">
                      <input id="distance7" type="checkbox" />
                      <label htmlFor="distance7">Walking (11 mi.)</label>
                    </li>
                    <li className="see-all-btn">
                      <span>See All</span>
                    </li>
                  </ul>
                </section> */}
              </aside>
            </div>

            <div className="col-lg-8 col-md-12">
              {/* <div className="listings-grid-sorting row align-items-center">
                <div className="col-lg-5 col-md-6 result-count">
                  <p>
                    We found <span className="count">9</span> listings available
                    for you
                  </p>
                </div>

                <div className="col-lg-7 col-md-6 ordering">
                  <div className="d-flex justify-content-end">
                    <div className="select-box">
                      <label>Sort By:</label>
                      <select className="blog-select">
                        <option>Recommended</option>
                        <option>Default</option>
                        <option>Popularity</option>
                        <option>Latest</option>
                        <option>Price: low to high</option>
                        <option>Price: high to low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="row">
                {business.map((bus) => {
                  let profileImg = `${process.env.DOMAIN_NAME}/api/business/get-photos/${bus.profileImage}`;
                  return (
                    <div className="col-xl-6 col-lg-6 col-md-6" key={bus._id}>
                      <div className="single-listings-box">
                        <div
                          className="listings-image"
                          onClick={(e) =>
                            gotoSingleProfilePage(e, bus.category, bus._id)
                          }
                        >
                          <img src={profileImg} alt="image" />
                          {/* <Link href="/single-listings">
                            <a className="link-btn"></a>
                          </Link> */}
                          {/* <a href="#" className="bookmark-save">
                            <i className="flaticon-heart"></i>
                          </a>
                          <a href="#" className="category">
                            <i className="flaticon-cooking"></i>
                          </a> */}
                        </div>

                        <div className="listings-content">
                          {/* <div className="author">
                            <div className="d-flex align-items-center">
                              <img src="/images/user1.jpg" alt="image" />
                              <span>Taylor</span>
                            </div>
                          </div> */}
                          <ul className="listings-meta">
                            <li>
                              <a href="#">
                                <i className="flaticon-furniture-and-household"></i>
                                {bus.category}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-pin"></i>{" "}
                                {bus.location[0]}, {bus.city[0]}
                              </a>
                            </li>
                          </ul>
                          <h3
                            onClick={(e) =>
                              gotoSingleProfilePage(e, bus.category, bus._id)
                            }
                          >
                            {/* <Link href="/single-listings"> */}
                            {bus.businessName}
                            {/* </Link> */}
                          </h3>
                          {/* <span className="status">
                            <i className="flaticon-save"></i> Open Now
                          </span> */}
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <div className="rating">
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <span className="count">(45)</span>
                            </div>
                            <div className="price">
                              Start From <span>$150</span>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="pagination-area text-center">
                    <a href="#" className="prev page-numbers">
                      <i className="bx bx-chevrons-left"></i>
                    </a>
                    <span className="page-numbers current" aria-current="page">
                      1
                    </span>
                    <a href="#" className="page-numbers">
                      2
                    </a>
                    <a href="#" className="page-numbers">
                      3
                    </a>
                    <a href="#" className="page-numbers">
                      4
                    </a>
                    <a href="#" className="next page-numbers">
                      <i className="bx bx-chevrons-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer bgColor="bg-f5f5f5" />
    </>
  );
};

export default GridListingsWithLeftSidebar;
