import { useState, useContext, useEffect } from 'react';
import Link from '../../utils/ActiveLink';
import { IndiceContext } from "../../contexts";
import router from 'next/router';
import axios from 'axios';
const NavbarThree = () => {
  const { toggleSideMenu } = useContext(IndiceContext);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [displayDropdownProfile, setDisplayDropdownProfile] = useState(false);
  const [token, setToken] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const [categoryProfile, setCategoryProfile] = useState("");
  const [profile, setProfile] = useState();

  useEffect(() => {
    let abortController = new AbortController();
    const tok = localStorage.getItem("token");
    // const user = localStorage.getItem("user");
    const user = JSON.parse(localStorage.getItem("user"));
    // if (user !== null && user !== undefined) {
    //   setToken(tok);
    //   setUserDetail(JSON.parse(user))
    //   setCategoryProfile(user.category)
    // }
    setToken("")
    if (user !== null && user !== undefined) {
      setToken(tok);
      // setUserDetail(user)
      setUserDetail(user)
      let id = user._id;
      let category = user.category;
      getBusinessProfile(id, category)
      if (user.userType == "Business") {
        setCategoryProfile(category.toLowerCase())
      }
    }

    // your async action is here
    return () => {
      abortController.abort();
    }
  }, []);

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  const toggleDropdownProfile = () => {
    setDisplayDropdownProfile(!displayDropdownProfile);
  };

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
    router.push('/');
  }

  return (
    <>
      <div className='navbar-area py-md-3 py-lg-1'>
        <div className='miran-responsive-nav'>
          <div className='miran-responsive-menu'>
            <div
              onClick={() => toggleMenu()}
              className='hamburger-menu hamburger-two dashboard-hamburger'
            >
              {showMenu ? (
                <i className='bx bx-x'></i>
              ) : (
                <i className='bx bx-menu'></i>
              )}
            </div>
            <div className='responsive-burger-menu d-lg-none d-block' onClick={toggleSideMenu}>
              <span className='top-bar'></span>
              <span className='middle-bar'></span>
              <span className='bottom-bar'></span>
            </div>
          </div>
        </div>

        <div className={showMenu ? 'miran-nav show' : 'miran-nav py-3'} style={{ float: "right" }}>
          <nav className='navbar navbar-expand-md navbar-light'>
            <div className='collapse navbar-collapse mean-menu'>

              <div>
                {token == null || token == "" ? (<div className='others-option d-flex align-items-center'>
                  <div className='option-item'>
                    {/* <span
                      data-toggle='modal'
                      onClick={toggleAuth}
                      className='auth-one'
                    >
                      <i className='flaticon-user'></i> Login / Register
                    </span> */}
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
                                style={{ height: "40px", width: "40px" }}
                              />) : (
                                <img
                                  src='/images/user1.jpg'
                                  className='rounded-circle'
                                  alt='image'
                                  style={{ height: "40px", width: "40px" }}
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
                                />) : (
                                  <img
                                    src='/images/user1.jpg'
                                    className='rounded-circle'
                                    alt='image'
                                  />)}
                            </div>

                            <div className='info text-center'>
                              <span className='name'>{userDetail.businessName}</span>
                              <p className='mb-3 email'>{userDetail.email}</p>
                            </div>
                          </div>

                          <div className='dropdown-body'>
                            <ul className='profile-nav p-0 pt-3'>
                              {/* <li className='nav-item'>
                                <Link href={`/dashboard/category/${categoryProfile}`}>
                                  <a className='nav-link'>
                                    <i className='bx bx-user'></i> <span>Profile</span>
                                  </a>
                                </Link>
                              </li> */}

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

                              {userDetail.userType == "Business" ? (<li className='nav-item'>
                                <Link href={`/dashboard/add-listing/${categoryProfile}`}>
                                  <a className='nav-link'>
                                    <i className='bx bx-plus-circle'></i><span>Portfolio</span>
                                  </a>
                                </Link>
                              </li>) : (
                                <></>
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

        <div className='others-option-for-responsive'>
          <div className='container'>
            {/* <div className='dot-menu' onClick={toggleMiniAuth}>
              <div className='inner'>
                <div className='circle circle-one'></div>
                <div className='circle circle-two'></div>
                <div className='circle circle-three'></div>
              </div>
            </div> */}

            <div className={displayMiniAuth ? 'container active' : 'container'}>
              <div className='option-inner'>
                {token == null || token == "" ?
                  (<div className='others-option'>
                    <div className='option-item'>
                      <form className='navbar-search-box'>
                        <label>
                          <i className='flaticon-search'></i>
                        </label>
                        <input
                          type='text'
                          className='input-search'
                          placeholder='What are you looking for?'
                        />
                      </form>
                    </div>

                    <div className='option-item'>
                      <span
                        data-toggle='modal'
                        data-target='#loginRegisterModal'
                        onClick={toggleAuth}
                      >
                        <i className='flaticon-user'></i> Login / Register
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
                              <img
                                src='/images/user1.jpg'
                                className='rounded-circle'
                                alt='image'
                              />
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
                                <img
                                  src='/images/user1.jpg'
                                  className='rounded-circle'
                                  alt='image'
                                />
                              </div>

                              <div className='info text-center'>
                                <span className='name'>{userDetail.businessName}</span>
                                <p className='mb-3 email'>{userDetail.email}</p>
                              </div>
                            </div>

                            <div className='dropdown-body'>
                              <ul className='profile-nav p-0 pt-3'>
                                {/* <li className='nav-item'>
                                  <Link href={`/dashboard/category/${categoryProfile}`}>
                                    <a className='nav-link'>
                                      <i className='bx bx-user'></i> <span>Profile</span>
                                    </a>
                                  </Link>
                                </li> */}
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

                                {userDetail.userType == "Business" ? (<li className='nav-item'>
                                  <Link href={`/dashboard/add-listing/${categoryProfile}`}>
                                    <a className='nav-link'>
                                      <i className='bx bx-plus-circle'></i><span>Portfolio</span>
                                    </a>
                                  </Link>
                                </li>) : (
                                  <></>
                                )}
                              </ul>
                            </div>

                            <div className='dropdown-footer'>
                              <ul className='profile-nav pl-0'>
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
    </>
  );
};

export default NavbarThree;
