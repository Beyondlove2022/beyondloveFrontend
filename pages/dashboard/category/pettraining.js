import Link from 'next/link';
import NavbarThree from '../../../components/_App/NavbarThree';
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { states } from '../../../utils/state';
import { cities } from '../../../utils/cities';
import { locations } from '../../../utils/location';

const PetTraining = () => {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mobile, setMobile] = useState("");
  const [about, setAbout] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [pincode, setPincode] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [cityFilter, setCityFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [location, setLocation] = useState([]);
  const [packageName, setPackageName] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [established, setestablished] = useState("");
  const [token, setToken] = useState("")
  const [error, setError] = useState(false);
  const [apiprofileImg, setApiProfileImg] = useState();
  const [apiCoverImg, setApiCoverImg] = useState();
  const [profile, setProfile] = useState();
  const [cover, setCover] = useState();
  const [categoriesProfile, setCategoryProfile] = useState("");
  const [businessId, setBusinessid] = useState("");

  useEffect(() => {
    if (typeof window != "undefined") {
      console.log("we are running on the client")
      let token = localStorage.getItem("token");
      let user = JSON.parse(localStorage.getItem("user"));
      setCategoryProfile(user.category)
      let id = user._id;
      setBusinessid(id);
      getBusinessProfile(id)
      setToken(token)
      states.sort((a, b) => a.Geo_Name.toLowerCase() < b.Geo_Name.toLocaleLowerCase() ? -1 : 1);
    } else {
      console.log("we are running on the server");
    }
  }, [])

  const getBusinessProfile = async (id) => {
    try {
      const { data } = await axios.get(`${process.env.DOMAIN_NAME}/api/business/get-profile/PetTraining/${id}`);
      console.log(data.business.state)
      console.log(data.business.city)
      setEmail(data.business.email);
      setMobile(data.business.mobile);
      setBusinessName(data.business.businessName);
      setFacebookUrl(data.business.facebookUrl);
      setInstagramUrl(data.business.instagramUrl);
      setTwitterUrl(data.business.twitterUrl);
      setLandmark(data.business.landmark)
      setPincode(data.business.pincode);
      setestablished(data.business.establishedYear);
      setDoorNumber(data.business.address[0]);
      setStreet(data.business.address[1])
      setState(data.business.state)
      setCity(data.business.city)
      setLocation(data.business.location)
      setAbout(data.business.description)
    } catch (error) {
      console.log(error)
    }
  }

  const addProfileFormSubmit = async (e) => {
    e.preventDefault();
    const d = {
      email,
      businessName,
      mobile,
      description: about,
      facebookUrl,
      instagramUrl,
      twitterUrl,
      pincode,
      address: [doorNumber, street],
      landmark: landmark,
      state,
      city,
      location,
      establishedYear: established
    }
    console.log(d)
    if (email === "" && businessName === "" &&
      mobile === "" && pincode === "" && street === "" &&
      state === "" && city === "" && location === "") {
      setError(true);
    } else {
      try {
        const { data } = await axios.put(`${process.env.DOMAIN_NAME}/api/business/update-profile/PetTraining/${token}`, d);
        console.log(data)
        if (data.success) {
          toast.success(data.msg, {
            theme: "light",
            position: "top-right",
            autoClose: 5000,
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
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleClickState = (e) => {
    const stay = e.target.value
    setState(stay.split(","));
  }

  const handleOnChangeCity = (e) => {
    const cty = e.target.value
    setCity(cty.split(","))
  }

  const handleOnChangeLocation = (e) => {
    console.log(e.target.value)
    const loca = e.target.value
    setLocation(loca.split(","))
  }

  const handleClickCity = () => {
    if (state == "") {
      toast.error("Plese select state", {
        theme: "light",
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      const filterCity = cities.filter(citi => citi.Geo_Head == state[1])
      setCityFilter(filterCity)
    }
  }

  const handleClickLocation = () => {
    if (city == "") {
      toast.error("Plese select city", {
        theme: "light",
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      const filterLocation = locations.filter(loca => loca.Geo_City == city[2])
      setLocationFilter(filterLocation)
    }
  }

  const uploadProfilePhotos = (e) => {
    setProfile(URL.createObjectURL(e.target.files[0]));
    setApiProfileImg(e.target.files[0]);
  };

  const uploadCoverPhotos = (e) => {
    setCover(URL.createObjectURL(e.target.files[0]));
    setApiCoverImg(e.target.files[0]);
  };

  const profilePicSubmit = async (e) => {
    e.preventDefault();
    console.log(apiprofileImg);
    const formData = new FormData();
    formData.append("file", apiprofileImg);
    try {
      const { data } = await axios.post(
        `${process.env.DOMAIN_NAME}/api/business/update-profile-cover-picture/${businessId}/${categoriesProfile}/profile`,
        formData
      );
      console.log(data);
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

  const coverPicSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", apiCoverImg);
    try {
      const { data } = await axios.post(
        `${process.env.DOMAIN_NAME}/api/business/update-profile-cover-picture/${businessId}/${categoriesProfile}/cover`,
        formData
      );
      console.log(data);
      console.log(data.bussinessCoverImage);
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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <DashboardNavbar />
      <div className="main-content d-flex flex-column">
        <NavbarThree />
        <div className="row">
          <ToastContainer />
          <div className="col-lg-12 col-md-12">
            <div className="my-profile-box">
              <h3>Pet Training</h3>
              <div className="row mt-5">
                <div className="col-lg-6 col-md-12">
                  <form onSubmit={profilePicSubmit}>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="form-group profile-box">
                        <img
                          src={profile}
                          alt="imag"
                          className="profile-image"
                        />
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="inputfile p-5 w-10 file-upload input-size"
                          onChange={uploadProfilePhotos}
                        ></input>
                      </div>
                      <div className="mt-5">
                        <button type="submit">
                          <i className="bx bx-upload"></i> Upload Profile Photo
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 col-md-12">
                  <form onSubmit={coverPicSubmit}>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="form-group profile-box">
                        <img src={cover} alt="imag" className="profile-image" />
                        <input
                          type="file"
                          name="file"
                          id="cover"
                          className="inputfile p-5 w-10  file-upload input-size"
                          onChange={uploadCoverPhotos}
                        ></input>
                      </div>
                      <div className="mt-5">
                        <button type="submit">
                          <i className="bx bx-upload"></i> Upload Cover Photo
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <form onSubmit={addProfileFormSubmit}>
                <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      {error && email == "" ? (
                        <span className='text-danger'>Please enter email</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                      />
                      {error && mobile == "" ? (
                        <span className='text-danger'>Please enter mobile number</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Business Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                        onChange={(e) => setBusinessName(e.target.value)}
                        value={businessName}
                      />
                      {error && businessName == "" ? (
                        <span className='text-danger'>Please enter business name</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Established Year</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setestablished(e.target.value)}
                        value={established}
                      />
                    </div>
                  </div>

                  {/* <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label id="studio">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      {error && name == "" ? (
                        <span className='text-danger'>Please enter name</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div> */}

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>About</label>
                      <textarea
                        cols="30"
                        rows="6"
                        placeholder="Short description about you..."
                        className="form-control"
                        onChange={(e) => setAbout(e.target.value)}
                        value={about}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="form-group">
                      <label className="social-icons-style" id="facebook">
                        <i className="bx bxl-facebook-square"></i> Facebook URL
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Facebook Url"
                        onChange={(e) => setFacebookUrl(e.target.value)}
                        value={facebookUrl}
                      />
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="form-group">
                      <label className="social-icons-style">
                        <i className="bx bxl-instagram"></i>Instagram URL
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Instagram URL"
                        onChange={(e) => setInstagramUrl(e.target.value)}
                        value={instagramUrl}
                      />
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="form-group">
                      <label className="social-icons-style">
                        <i className="bx bxl-twitter"></i>Twitter URL
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="twitter URL"
                        onChange={(e) => setTwitterUrl(e.target.value)}
                        value={twitterUrl}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <h3 id="address">ADDRESS</h3>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Door No.</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Door No."
                        onChange={(e) => setDoorNumber(e.target.value)}
                        value={doorNumber}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Street, Sector, Area, Colony</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Street"
                        onChange={(e) => setStreet(e.target.value)}
                        value={street}
                      />
                      {error && street == "" ? (
                        <span className='text-danger'>Please enter street</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Landmark</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Landmark"
                        onChange={(e) => setLandmark(e.target.value)}
                        value={landmark}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>PIN code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pin Code"
                        onChange={(e) => setPincode(e.target.value)}
                        value={pincode}
                      />
                      {error && pincode == "" ? (
                        <span className='text-danger'>Please enter pincode</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-menu-alt-left"></i> State:
                      </label>
                      <select
                        className="dashbaord-category-select"
                        placeholder="Select the state"
                        onChange={handleClickState}
                        value={state}
                      >
                        <option>Select the State</option>
                        {states.map((state) => {
                          return (
                            <option
                              id={state.Geo_TinNo}
                              value={[state.Geo_Name, state.Geo_TinNo]}
                              key={state.Geo_TinNo}
                            >{state.Geo_Name}</option>
                          )
                        })}
                      </select>
                      {error && state.length == "" ? (
                        <span className="text-danger">Please select state</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-menu-alt-left"></i> City:
                      </label>
                      <select className="dashbaord-category-select"
                        onChange={handleOnChangeCity}
                        onFocus={handleClickCity}
                      >
                        <option>{city.length > 0 ? city[0] : "Select the City"}</option>
                        {cityFilter.map((cityMap) => {
                          return (
                            <option
                              value={[cityMap.Geo_Name, cityMap.Geo_Head, cityMap.id]}
                              key={cityMap.id}
                            >{cityMap.Geo_Name}</option>
                          )
                        })}
                      </select>
                      {error && city.length == "" ? (
                        <span className="text-danger">Please select city</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-menu-alt-left"></i> Location:
                      </label>
                      <select className="dashbaord-category-select"
                        onChange={handleOnChangeLocation}
                        onFocus={handleClickLocation}
                      >
                        <option>{location.length > 0 ? location[0] : "Select the Location"}</option>
                        {locationFilter.map((locaMap) => {
                          return (
                            <option
                              value={[locaMap.Geo_Name, locaMap.Geo_Head, locaMap.Geo_City, locaMap.id]}
                              key={locaMap.id}
                            >{locaMap.Geo_Name}</option>
                          )
                        })}
                      </select>
                      {error && location.length == "" ? (
                        <span className="text-danger">Please select location</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  {/* <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <h3 id="address">PACKAGES</h3>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setPackageName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        type="number"
                        className="form-control"
                        onChange={(e) => setPackagePrice(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        <br />
                      </label>
                      <span data-toggle="modal" activeClassName="active">
                        <a className="default-btn">
                          Add
                        </a>
                      </span>
                    </div>
                  </div> */}

                  {/* <div className="col-lg-12 col-md-12">
                    <div
                      className="add-listings-box"
                      style={{ boxShadow: "none" }}
                    >
                      <div className="form-group">
                        <h3>ADDITIONAL INFORMATION</h3>
                        <p>How long you have been into Business?</p>
                        <div className="col-xl-4 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Established Year</label>
                            <input
                              type="number"
                              className="form-control"
                              onChange={(e) => setestablished(e.target.value)}
                              value={established}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Payment terms</label>
                      <textarea
                        cols="30"
                        rows="6"
                        placeholder="..."
                        className="form-control"
                      ></textarea>
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Additional costs</label>
                      <textarea
                        cols="30"
                        rows="6"
                        placeholder="..."
                        className="form-control"
                      ></textarea>
                    </div>
                  </div> */}

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <button onClick={goToTop} type="submit">Save Changes</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex-grow-1"></div>
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
      </div>
    </>
  );
};
export default PetTraining;
