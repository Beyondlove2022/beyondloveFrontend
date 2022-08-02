import Link from "next/link";
import NavbarThree from "../../../components/_App/NavbarThree";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import ReactLoading from "react-loading";

const PetTraining = () => {
  const [files, setFiles] = useState([]);
  const [businessId, setBusinessid] = useState("");
  const [categoriesProfile, setCategoryProfile] = useState("");
  const [businessPhotos, setBusinessPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(categoriesProfile);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name} className="drop-gallery-thumb">
      <img src={file.preview} />
    </div>
  ));

  useEffect(() => {
    if (typeof window != "undefined") {
      let user = JSON.parse(localStorage.getItem("user"));
      setCategoryProfile(user.category);
      setBusinessid(user._id);
      console.log("we are running client side");
      if (categoriesProfile != "") {
        getBusinessProfile(user._id);
      }
    } else {
      console.log("we are running server side");
    }
  }, [categoriesProfile]);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const getBusinessProfile = async (id) => {
    try {
      console.log(categoriesProfile);
      const { data } = await axios.get(
        `${process.env.DOMAIN_NAME}/api/business/get-profile/${categoriesProfile}/${id}`
      );
      setBusinessPhotos(data.business.images);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadBusinessPhotos = async (e) => {
    e.preventDefault();
    if (files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        setLoading(true)
        const formData = new FormData();
        formData.append(`file`, files[i]);
        console.log(files);
        try {
          console.log(categoriesProfile);
          const { data } = await axios.post(
            `${process.env.DOMAIN_NAME}/api/business/update-profile-cover-picture/${businessId}/${categoriesProfile}/allphotos`,
            formData
          );
          console.log(data);
          setBusinessPhotos(data.businessImages);
        } catch (error) {
          console.log(error);
        }
      }
      setFiles([]);
      setLoading(false)
      toast.success("Photos Uploaded Successfully", {
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
      toast.error("Please Upload a Image...!", {
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
  };

  return (
    <>
      <DashboardNavbar />
      <div className="main-content d-flex flex-column">
        <NavbarThree />
        <ToastContainer />
        {/* <div className='breadcrumb-area'>
          <h1>Add Listings</h1>
          <ol className='breadcrumb'>
            <li className='item'>
              <Link href='/dashboard'>
                <a>Home</a>
              </Link>
            </li>
            <li className='item'>
              <Link href='/dashboard'>
                <a>Dashboard</a>
              </Link>
            </li>
            <li className='item'>Add Listings</li>
          </ol> 
        </div> */}

        {/* <div className='add-listings-box'>
          <h3>Basic Informations</h3>

          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-briefcase-alt'></i> Listing Title:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name of your business'
                />
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-duplicate'></i> Type / Category:
                </label>
                <select className='dashbaord-category-select'>
                  <option>Select Category</option>
                  <option>Shops</option>
                  <option>Hotels</option>
                  <option>Restaurants</option>
                  <option>Fitness</option>
                  <option>Events</option>
                </select>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bxs-key'></i> Keywords:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Maximum 15 , should be separated by commas'
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className='add-listings-box'>
          <h3>Location</h3>

          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-menu-alt-left'></i> City:
                </label>
                <select className='dashbaord-category-select'>
                  <option>Select City</option>
                  <option>New York</option>
                  <option>London</option>
                  <option>Paris</option>
                  <option>Moscow</option>
                  <option>Rome</option>
                </select>
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-menu-alt-left'></i> Address:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='e.g. 55 County Laois'
                />
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-menu-alt-left'></i> State:
                </label>
                <input type='text' className='form-control' />
              </div>
            </div>

            <div className='col-lg-6 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-menu-alt-left'></i> Zip-Code:
                </label>
                <input type='text' className='form-control' />
              </div>
            </div>
          </div>
        </div> */}

        <div className="add-listings-box">
          <div {...getRootProps()} className="dropzone">
            <h3>Training Gallery</h3>
            {files.length > 0 ? (
              <div className="gallery-flex">
                {thumbs}
                <input {...getInputProps()} />
              </div>
            ) : (
              <div className="file-upload-box">
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            )}
          </div>
          <br />
          <form onClick={uploadBusinessPhotos}>
            <div className="add-listings-btn" style={{ float: "right" }}>
              <button type="submit">Upload</button>
            </div>
          </form>
        </div>

        {/* react loading icons */}
        <div className="d-flex justify-content-center align-items-center">
          {loading && (
            <div className="loader">
              <ReactLoading type="spokes" color="#febc1e" />
            </div>
          )}
        </div>


        <div className="gallery add-listings-btn">
          {businessPhotos.map((photos) => {
            let photo = `${process.env.DOMAIN_NAME}/api/business/get-photos/${photos}`;
            return <img src={photo} alt="missing" className="gallery__img" />;
          })}
        </div>
        {/* <div className='add-listings-box'>
          <h3>Details</h3>

          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-text'></i> Description:
                </label>
                <textarea
                  cols='30'
                  rows='7'
                  className='form-control'
                  placeholder='Details...'
                ></textarea>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-envelope'></i> Email Address:{' '}
                  <span>(optional)</span>
                </label>
                <input type='email' className='form-control' />
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-globe'></i> Website: <span>(optional)</span>
                </label>
                <input type='text' className='form-control' />
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bx-phone-call'></i> Phone:{' '}
                  <span>(optional)</span>
                </label>
                <input type='text' className='form-control' />
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bxl-facebook-square'></i> Facebook:{' '}
                  <span>(optional)</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='https://www.facebook.com/'
                />
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bxl-twitter'></i> Twitter:{' '}
                  <span>(optional)</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='https://www.twitter.com/'
                />
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='form-group'>
                <label>
                  <i className='bx bxl-linkedin'></i> Linkedin:{' '}
                  <span>(optional)</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='https://www.linkedin.com/'
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className='add-listings-box'>
          <h3>Facilities</h3>

          <div className='form-group'>
            <ul className='facilities-list'>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='free-wifi'
                    checked
                  />
                  <span>Free WiFi</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='parking'
                  />
                  <span>Parking</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='fitness-center'
                    checked
                  />
                  <span>Fitness Center</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='non-smoking-rooms'
                  />
                  <span>Non-smoking Rooms</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='airport-shuttle'
                    checked
                  />
                  <span>Airport Shuttle</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='air-conditioning'
                  />
                  <span>Air Conditioning</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='events'
                  />
                  <span>Events</span>
                </label>
              </li>
              <li>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='facilities-list'
                    value='friendly-workspace'
                  />
                  <span>Friendly Workspace</span>
                </label>
              </li>
            </ul>
          </div>
        </div> */}

        {/* <div className='add-listings-box'>
          <h3>Sidebar Widgets</h3>

          <div className='form-group'>
            <div className='sidebar-widgets'>
              <div className='box'>
                <span className='title'>Booking Form</span>
                <label className='switch'>
                  <input type='checkbox' />
                  <span></span>
                </label>
              </div>

              <div className='box'>
                <span className='title'>Price Range</span>
                <label className='switch'>
                  <input type='checkbox' checked />
                  <span></span>
                </label>
              </div>

              <div className='box'>
                <span className='title'>Instagram</span>
                <label className='switch'>
                  <input type='checkbox' />
                  <span></span>
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className='add-listings-box'>
          <h3>Opening Hours</h3>

          <div className='row opening-day align-items-center'>
            <div className='col-lg-2 col-md-12'>
              <h5>Monday</h5>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>

          <div className='row opening-day align-items-center'>
            <div className='col-lg-2 col-md-12'>
              <h5>Tuesday</h5>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>

          <div className='row opening-day align-items-center'>
            <div className='col-lg-2 col-md-12'>
              <h5>Wednesday</h5>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>

          <div className='row opening-day align-items-center'>
            <div className='col-lg-2 col-md-12'>
              <h5>Thursday</h5>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>

          <div className='row opening-day align-items-center'>
            <div className='col-lg-2 col-md-12'>
              <h5>Friday</h5>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>

          <div className='row opening-day align-items-center'>
            <div className='col-lg-2 col-md-12'>
              <h5>Saturday</h5>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>

          <div className='row opening-day align-items-center'>
            <div className='col-lg-2 col-md-12'>
              <h5>Sunday</h5>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Opening Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>

            <div className='col-lg-5 col-md-6'>
              <select className='dashbaord-category-select'>
                <option>Closing Time</option>
                <option>Closed</option>
                <option>1 AM</option>
                <option>2 AM</option>
                <option>3 AM</option>
                <option>4 AM</option>
                <option>5 AM</option>
                <option>6 AM</option>
                <option>7 AM</option>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
                <option>11 AM</option>
                <option>12 AM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
                <option>12 PM</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* <div className='add-listings-box'>
          <h3>Pricing</h3>

          <div className='form-group'>
            <label>
              <i className='bx bx-purchase-tag'></i> Pricing:
            </label>
            <input type='text' className='form-control' placeholder='$542.00' />
          </div>
        </div> */}

        {/* <div className='add-listings-btn'>
          <button type='submit'>Submit Listings</button>
        </div> */}

        <div className="flex-grow-1"></div>

        <div className="copyrights-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <p>
                <i className="bx bx-copyright"></i>2020 <a href="#">Indice</a>.
                All rights reserved
              </p>
            </div>

            {/* <div className='col-lg-6 col-sm-6 col-md-6 text-right'>
              <p>
                Designed by ❤️{' '}
                <a href='https://envytheme.com/' target='_blank' rel="noreferrer">
                  EnvyTheme
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PetTraining;
