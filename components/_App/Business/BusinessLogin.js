import react, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useDispatch } from "react-redux";
import { addBusiness } from "../../../Redux/businessSlice";
import router from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const BusinessLogin = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [showLoginPassword, setShowLogingPassword] = useState(false)
  const [fotgotPopup, setForgotPop] = useState(false);
  const [forgotPassword, setForgotPassword] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [displayConfirm, setDisplayConfirm] = useState(false);
  const [otp, setOtp] = useState("");
  const [resetPasswordChange, setResetPasswordChange] = useState("");
  const [confirmPasswordChange, setConfirmPasswordChange] = useState("")
  const [passwordDidntMatch, setPasswordDidntMatch] = useState(false);

  const loginPasswordVisibility = () => {
    setShowLogingPassword(!showLoginPassword)
  }

  const forgotPasswordPopUp = () => {
    setForgotPop(!fotgotPopup)
  }

  const forgotClose = () => {
    setForgotPop(!fotgotPopup)
  }

  const resetPasswordVisibilityClick = () => {
    setShowResetPassword(!showResetPassword);
  };

  const closeConfirmPasswordPopup = () => {
    setDisplayConfirm(!displayConfirm)
  }

  const resetPasswordOnChange = (e) => {
    setResetPasswordChange(e.target.value)
    setPasswordDidntMatch(false)
  }

  const confirmPasswordOnChange = (e) => {
    setConfirmPasswordChange(e.target.value)
    setPasswordDidntMatch(false)
  }

  const resetPasswordSubmit = async (e) => {
    e.preventDefault();
    if (resetPasswordChange === confirmPasswordChange) {
      try {
        const d = {
          password: resetPasswordChange,
          type: "Business",
          mobile,
          category
        }
        const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/verify-otp/${otp}/`, d);
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
          setMobile("")
          setCategory("")
          setOtp("");
          setResetPasswordChange("")
          setConfirmPasswordChange("")
          setDisplayConfirm(false)
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
      }
      catch (error) {
        console.log(error)
      }
    } else {
      setPasswordDidntMatch(true)
    }
  }

  const forgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const d = {
        type: "Business"
      }
      const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/forget-password/${category}/${mobile}`, d);
      console.log(data);
      if (data.success) {
        setForgotPop(false);
        setDisplayConfirm(!displayConfirm)
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
      console.log(error)
    }
  }


  const loginSubmit = async (e) => {
    e.preventDefault();
    const d = {
      mobile,
      password,
      category,
    };
    console.log(d);
    if (mobile === "" || password === "" || category === "") {
      setError(true);
    } else {
      try {
        const { data } = await axios.post(
          `${process.env.DOMAIN_NAME}/api/business/login`,
          d
        );
        console.log(data);
        if (data.success) {
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

          const user = JSON.stringify(data.business);
          localStorage.setItem("user", user);
          localStorage.setItem("token", data.token);
          dispatch(addBusiness(data.business));
          const cate = (data.business.category.toLowerCase());
          router.push({ pathname: `/dashboard/category/${cate}` });
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
    }
  };

  return (
    <>
      <div className={fotgotPopup ? 'body_overlay open' : 'body_overlay'}></div>
      <div className={displayConfirm ? 'body_overlay open' : 'body_overlay'}></div>
      <div className="tab-pane fade show active" id="login">
        <ToastContainer />
        <div className="miran-login">
          <form onSubmit={loginSubmit}>
            <div className="form-group">
              <select
                className="dashbaord-category-select"
                placeholder="Select the state"
                style={{ background: "none" }}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Category</option>
                <option value="PetClinic">Pet Clinic</option>
                <option value="PetGrooming">Pet Grooming</option>
                <option value="PetBoarding">Pet Boarding</option>
                <option value="PetTraining">Pet Training</option>
                {/* <option value="PetFood">Pet Food</option> */}
              </select>
              {error && category.length == "" ? (
                <span className="text-danger">Please Select Category</span>
              ) : (
                <></>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Mobile number"
                className="form-control"
                onChange={(e) => setMobile(e.target.value)}
              />
              {error && mobile == "" ? (
                <span className="text-danger">Please Enter Mobile Number</span>
              ) : (
                <></>
              )}
            </div>

            <div className="form-group reset">
              <input
                type={showLoginPassword ? "text" : "password"}
                placeholder="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showLoginPassword ? (<AiOutlineEye
                className="password-icon"
                onClick={loginPasswordVisibility}
              />) : (
                <AiOutlineEyeInvisible
                  fill="grey"
                  className="password-icon"
                  onClick={loginPasswordVisibility}
                />)}
              {error && password == "" ? (
                <span className="text-danger">Please Enter Password</span>
              ) : (
                <></>
              )}
            </div>
            <div className="forgot-pass">
              <p onClick={forgotPasswordPopUp}>Forgot Password</p>
            </div>
            <button type="submit">Login Now</button>
          </form>
          {/* <span className="dont-account">
            Don't have an account? <a href="#">Register Now</a>
          </span> */}
        </div>
      </div>


      {/* ------------ Forgot password sectoin ------- */}
      <div
        className={
          fotgotPopup
            ? "modal loginRegisterModal show scroll-popup"
            : "modal loginRegisterModal"
        }
        id="loginRegisterModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="close" onClick={forgotClose}>
              <i className="bx bx-x"></i>
            </button>
            <h2 className="vendor-register-head">Forgot Password</h2>

            <form onSubmit={forgotPasswordSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Mobile No."
                  className="form-control"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  className="dashbaord-category-select"
                  placeholder="Select the state"
                  style={{ background: "none" }}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Category</option>
                  <option value="PetClinic">Pet Clinic</option>
                  <option value="PetGrooming">Pet Grooming</option>
                  <option value="PetBoarding">Pet Boarding</option>
                  <option value="PetTraining">Pet Training</option>
                  {/* <option value="PetFood">Pet Food</option> */}
                </select>
                {error && category.length == "" ? (
                  <span className="text-danger">Please Select Category</span>
                ) : (
                  <></>
                )}
              </div>

              <button className="popup-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* ------------ Confirm password section ------- */}
      <div
        className={
          displayConfirm
            ? "modal loginRegisterModal show scroll-popup"
            : "modal loginRegisterModal"
        }
        id="loginRegisterModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={closeConfirmPasswordPopup}
            >
              <i className="bx bx-x"></i>
            </button>
            <h2 className="vendor-register-head">Enter a New Password </h2>

            <form onSubmit={resetPasswordSubmit}>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="OTP"
                  className="form-control"
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <div className="form-group reset">
                <input
                  type={showResetPassword ? "text" : "password"}
                  placeholder="Password"
                  className="form-control"
                  onChange={resetPasswordOnChange}
                />
                {showResetPassword ? (
                  <AiOutlineEye
                    className="password-icon"
                    onClick={resetPasswordVisibilityClick}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    fill="grey"
                    className="password-icon"
                    onClick={resetPasswordVisibilityClick}
                  />
                )}
              </div>
              <div className="form-group reset">
                <input
                  type={showResetPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="form-control"
                  onChange={confirmPasswordOnChange}
                />
                {showResetPassword ? (
                  <AiOutlineEye
                    className="password-icon"
                    onClick={resetPasswordVisibilityClick}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    fill="grey"
                    className="password-icon"
                    onClick={resetPasswordVisibilityClick}
                  />
                )}
              </div>
              {passwordDidntMatch && (
                <p style={{ color: "red" }}>Passwords did not match</p>
              )}
              <button className="popup-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default BusinessLogin;
