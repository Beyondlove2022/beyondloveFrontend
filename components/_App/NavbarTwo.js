import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from '../../utils/ActiveLink';
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from 'react-tabs';
import BusinessLogin from './Business/BusinessLogin';
import BusinessRegister from './Business/BusinessRegister';
import CustomerRegister from './Customer/CustomerRegister';
import CustomerLogin from './Customer/CustomerLogin';
import router from 'next/router';
import axios from 'axios';
resetIdCounter();

const NavbarTwo = () => {
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [displayVendorRegister, setDisplayVendorRegister] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [displayDropdownProfile, setDisplayDropdownProfile] = useState(false);
  const [token, setToken] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const [categoryProfile, setCategoryProfile] = useState("");
  const [profile, setProfile] = useState();

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', showStickyMenu);
  }

  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };

  const toggleAuthRegister = () => {
    setDisplayVendorRegister(!displayVendorRegister);
  };

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };


  const toggleDropdownProfile = () => {
    setDisplayDropdownProfile(!displayDropdownProfile);
  };

  useEffect(() => {
    // let abortController = new AbortController();
    const tok = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null && user !== undefined) {
      setToken(tok);
      setUserDetail(user)
      let id = user._id;
      let category = user.category;
      getBusinessProfile(id, category)
      if (user.userType == "Business") {
        setCategoryProfile(category.toLowerCase())
      }
    }
    // your async action is here
    // return () => {
    // abortController.abort();
    // }
  }, []);

  const getBusinessProfile = async (id, category) => {
    try {
      const { data } = await axios.get(`${process.env.DOMAIN_NAME}/api/business/get-profile/${category}/${id}`);
      console.log(data)
      setProfile(`${process.env.DOMAIN_NAME}/api/business/get-photos/${data.business.profileImage}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <>
      <div className={displayAuth ? 'body_overlay open' : 'body_overlay'}></div>
      <div className={displayVendorRegister ? 'body_overlay open' : 'body_overlay'}></div>
      <div className={sticky ? 'is-sticky navbar-area' : 'navbar-area'}>
        <div className='miran-responsive-nav'>
          <div className='container'>
            <div className='miran-responsive-menu'>
              <div
                onClick={() => toggleMenu()}
                className='hamburger-menu hamburger-two'
              >
                {showMenu ? (
                  <i className='bx bx-x'></i>
                ) : (
                  <i className='bx bx-menu'></i>
                )}
              </div>
              <div className='logo'>
                <Link href='/'>
                  <a>
                    <img src='/images/black-logo1.png' alt='logo' style={{ maxWidth: "50%" }} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={showMenu ? 'miran-nav show' : 'miran-nav'}>
          <div className='container-fluid'>
            <nav className='navbar navbar-expand-md navbar-light'>
              <Link href='/'>
                <a className='navbar-brand'>
                  <img src='/images/black-logo1.png' alt='logo' style={{ maxWidth: "50%" }} />
                </a>
              </Link>
              <div className='collapse navbar-collapse mean-menu'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link href='/' activeClassName='active'>
                      <a href='#' className='dropdown-toggle nav-link'>
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='' activeClassName='active'>
                      <a href='https://invisiblesuperhumans.org/' target="_blank" className='dropdown-toggle nav-link'>
                        Donate
                      </a>
                    </Link>
                  </li>

                  {/* <li className='nav-item'>
                    <Link href='/' activeClassName='active'>
                      <a href='#' className='dropdown-toggle nav-link'>
                        Community
                      </a>
                    </Link>
                  </li> */}

                  {/* <div className='main-donate-btn'>
                    <div className='donate-btn mr-3'>
                      <Link
                        href='/'
                        activeClassName='active'
                      >
                        <a className='default-btn'>
                          <i className='flaticon-more'></i> Donate
                        </a>
                      </Link>
                    </div>
                    <div className='donate-btn'>
                      <Link
                        href='/'
                        activeClassName='active'
                      >
                        <a className='default-btn'>
                          <i className='flaticon-more'></i> Community
                        </a>
                      </Link>
                    </div>
                  </div> */}
                </ul>

                <div style={{ marginRight: "85px" }}>
                  {token == null || token == "" ? (<div className='others-option d-flex align-items-center'>
                    <div className='option-item'>
                      <span
                        data-toggle='modal'
                        onClick={toggleAuthRegister}
                        className='auth-one'
                      >
                        <i className='flaticon-user'></i> Login / Register
                      </span>
                    </div>
                    <div className="option-item">
                      <span
                        data-toggle="modal"
                        onClick={toggleAuth}
                        className="active"
                      >
                        <a className="default-btn button-one">
                          <i className="flaticon-more"></i> Business Registeration
                        </a>
                      </span>
                    </div>
                  </div>
                  ) : (
                    <div className='others-option d-flex align-items-center'>
                      <div className='option-item'>
                        <div className='dropdown profile-nav-item menu-profile-one'>
                          <a
                            href='#'
                            className=''
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            <div className='menu-profile'>
                              {userDetail.profileImage !== undefined ?
                                (<img
                                  src={profile}
                                  className='rounded-circle'
                                  alt='image'
                                />) : (
                                  <img
                                    src='/images/user1.jpg'
                                    className='rounded-circle'
                                    alt='image'
                                  />)}
                              <span className='name' onClick={toggleDropdownProfile}>My Account</span>
                            </div>
                          </a>

                          <div className={
                            displayDropdownProfile
                              ? 'dropdown-menu show'
                              : 'dropdown-menu'
                          }>

                            <div className='dropdown-header d-flex flex-column align-items-center'>
                              <div className='figure mb-3'>
                                {userDetail.profileImage !== undefined ?
                                  (<img
                                    src={profile}
                                    className='rounded-circle'
                                    alt='image'
                                    style={{ height: "80px", width: "80px" }}
                                  />) : (
                                    <img
                                      src='/images/user1.jpg'
                                      className='rounded-circle'
                                      alt='image'
                                      style={{ height: "80px", width: "80px" }}
                                    />)}
                              </div>

                              <div className='info text-center'>
                                <span className='name'>{userDetail.businessName}</span>
                                <p className='mb-3 email'>{userDetail.email}</p>
                              </div>
                            </div>

                            <div className='dropdown-body'>
                              <ul className='profile-nav p-0 pt-3'>
                                {userDetail.userType == "Business" ? (<li className='nav-item'>
                                  <Link href={`/dashboard/category/${categoryProfile}`}>
                                    <a className='nav-link'>
                                      <i className='bx bx-user'></i> <span>Profile</span>
                                    </a>
                                  </Link>
                                </li>) : (
                                  <li className='nav-item'>
                                    <Link href={`/dashboard/CustomerForm/`}>
                                      <a className='nav-link'>
                                        <i className='bx bx-user'></i> <span>Profile</span>
                                      </a>
                                    </Link>
                                  </li>
                                )}
                              </ul>
                            </div>

                            <div className='dropdown-footer'>
                              <ul className='profile-nav'>
                                <li className='nav-item'>
                                  <a className='nav-link'
                                    onClick={handleLogout}
                                  >
                                    <i className='bx bx-log-out'></i> <span>Logout</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>

              </div>
            </nav>
          </div>
        </div>

        <div className='others-option-for-responsive'>
          <div className='container'>
            <div className='dot-menu' onClick={toggleMiniAuth}>
              <div className='inner'>
                <div className='circle circle-one'></div>
                <div className='circle circle-two'></div>
                <div className='circle circle-three'></div>
              </div>
            </div>

            <div className={displayMiniAuth ? 'container active' : 'container'}>
              <div className='option-inner'>
                {token == null || token == "" ?
                  (<div className='others-option'>
                    <div className='option-item'>
                      <span
                        data-toggle='modal'
                        data-target='#loginRegisterModal'
                        onClick={toggleAuthRegister}
                      >
                        <i className='flaticon-user'></i> Login / Register
                      </span>
                    </div>
                    <div className="option-item">
                      <span
                        data-toggle="modal"
                        onClick={toggleAuth}
                        className="active"
                      >
                        <a className="default-btn button-one">
                          <i className="flaticon-more"></i> Business Registeration
                        </a>
                      </span>
                    </div>
                  </div>) : (
                    <div className='others-option d-flex align-items-center'>
                      <div className='option-item'>
                        <div className='dropdown profile-nav-item menu-profile-one'>
                          <a
                            href='#'
                            className=''
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            <div className='menu-profile'>
                              {userDetail.profileImage !== undefined ?
                                (<img
                                  src={profile}
                                  className='rounded-circle'
                                  alt='image'
                                />) : (
                                  <img
                                    src='/images/user1.jpg'
                                    className='rounded-circle'
                                    alt='image'
                                  />)}
                              <span className='name' onClick={toggleDropdownProfile}>My Account</span>
                            </div>
                          </a>

                          <div className={
                            displayDropdownProfile
                              ? 'dropdown-menu show'
                              : 'dropdown-menu'
                          }>

                            <div className='dropdown-header d-flex flex-column align-items-center'>
                              <div className='figure mb-3'>
                                {userDetail.profileImage !== undefined ?
                                  (<img
                                    src={profile}
                                    className='rounded-circle'
                                    alt='image'
                                    style={{ height: "80px", width: "80px" }}
                                  />) : (
                                    <img
                                      src='/images/user1.jpg'
                                      className='rounded-circle'
                                      alt='image'
                                      style={{ height: "80px", width: "80px" }}
                                    />)}
                              </div>

                              <div className='info text-center'>
                                <span className='name'>{userDetail.businessName}</span>
                                <p className='mb-3 email'>{userDetail.email}</p>
                              </div>
                            </div>

                            <div className='dropdown-body'>
                              <ul className='profile-nav p-0 pt-3' style={{ listStyle: "none" }}>
                                <li className='nav-item'>
                                  <Link href={`/dashboard/category/${categoryProfile}`}>
                                    <a className='nav-link'>
                                      <i className='bx bx-user'></i> <span>Profile</span>
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className='dropdown-footer'>
                              <ul className='profile-nav pl-0' style={{ listStyle: "none" }}>
                                <li className='nav-item'>
                                  <a className='nav-link'
                                    onClick={handleLogout}
                                  >
                                    <i className='bx bx-log-out'></i> <span>Logout</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ Auth Modal Business------- */}
      <div
        className={
          displayAuth
            ? 'modal loginRegisterModal show'
            : 'modal loginRegisterModal'
        }
        id='loginRegisterModal'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <Tabs>
              <button type='button' className='close' onClick={toggleAuth}>
                <i className='bx bx-x'></i>
              </button>

              <ul className='nav nav-tabs' id='myTab'>
                <h3 className="vendor-register-head">
                  Sign up as Business Register
                </h3>
                <TabList>
                  <Tab className="nav-item">

                    <a className='nav-link' id='login-tab'>
                      Login
                    </a>

                  </Tab>
                  <Tab className="nav-item">

                    <a className='nav-link' id='register-tab'>
                      Register
                    </a>

                  </Tab>
                </TabList>
              </ul>

              <div className='tab-content' id='myTabContent'>
                <TabPanel>
                  <BusinessLogin />
                </TabPanel>

                <TabPanel>
                  <BusinessRegister />
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* ------------ Auth Modal Customer ------- */}
      <div
        className={
          displayVendorRegister
            ? 'modal loginRegisterModal show'
            : 'modal loginRegisterModal'
        }
        id='loginRegisterModal'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <Tabs>
              <button type='button' className='close' onClick={toggleAuthRegister}>
                <i className='bx bx-x'></i>
              </button>

              <ul className='nav nav-tabs' id='myTab'>
                <h3 className="vendor-register-head">
                  Welcome Back! Customer
                </h3>
                <TabList>
                  <Tab className="nav-item">
                    <a className='nav-link' id='login-tab'>
                      Login
                    </a>
                  </Tab>
                  <Tab className="nav-item">
                    <a className='nav-link' id='register-tab'>
                      Register
                    </a>
                  </Tab>
                </TabList>
              </ul>

              <div className='tab-content' id='myTabContent'>
                <TabPanel>
                  <CustomerLogin />
                </TabPanel>

                <TabPanel>
                  <CustomerRegister />
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

    </>
  );
};

export default NavbarTwo;
