import react, { useEffect, useState } from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import axios from "axios";
import "react-toastify/ReactToastify.min.css";
import router from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const CustomerLogin = () => {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [showLoginPassword, setShowLogingPassword] = useState(false);
    const [fotgotPopup, setForgotPop] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [displayConfirm, setDisplayConfirm] = useState(false);
    const [passwordDidntMatch, setPasswordDidntMatch] = useState(false);
    const [resetPasswordChange, setResetPasswordChange] = useState("");
    const [confirmPasswordChange, setConfirmPasswordChange] = useState("")
    const [otp, setOtp] = useState("");

    const loginPasswordVisibility = () => {
        setShowLogingPassword(!showLoginPassword)
    }

    const forgotPasswordPopUp = () => {
        setForgotPop(!fotgotPopup)
    }

    // const forgotClose = () => {
    //     setForgotPop(!fotgotPopup)
    // }

    const resetPasswordVisibilityClick = () => {
        setShowResetPassword(!showResetPassword);
    };

    // const closeConfirmPasswordPopup = () => {
    //     setDisplayConfirm(!displayConfirm)
    // }

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
                    type: "Customer",
                    mobile
                }
                const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/verify-otp/${otp}`, d);
                console.log(data);
                if (data.success) {
                    setDisplayConfirm(false);
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
        } else {
            setPasswordDidntMatch(true)
        }
    }

    const forgotPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            const d = {
                type: "Customer"
            }
            const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/forget-password/Customer/${mobile}`, d);
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
        }
        console.log(d)
        if (mobile === "" || password === "") {
            setError(true)
        } else {
            try {
                const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/customer/login`, d);
                console.log(data);
                if (data.success) {
                    toast.success(data.msg, {
                        theme: "light",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    const user = JSON.stringify(data.customer)
                    localStorage.setItem("user", user);
                    localStorage.setItem("token", data.token);
                    router.push({ pathname: `/dashboard/CustomerForm/` })
                }
                else {
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

    return (<>
        <div className={fotgotPopup ? 'body_overlay open' : 'body_overlay'}></div>
        <div className={displayConfirm ? 'body_overlay open' : 'body_overlay'}></div>
        <div className='tab-pane' id='login'>
            <div className='miran-login'>
                <form onSubmit={loginSubmit}>
                    <div className='form-group'>
                        <input
                            type='mobile'
                            placeholder='Mobile No'
                            className='form-control'
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        {error && mobile == "" ? (
                            <span className="text-danger">Please Enter Mobile Number</span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='form-group reset'>
                        <input
                            type={showLoginPassword ? "text" : "password"}
                            placeholder='Password'
                            className='form-control'
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
                    <button type='submit'>Login</button>
                </form>
                {/* <span className='dont-account'>
                    Don't have an account? <a href='#'>Register Now</a>
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
                    {/* <button type="button" className="close" onClick={forgotClose}>
                        <i className="bx bx-x"></i>
                    </button> */}
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
                    {/* <button
                        type="button"
                        className="close"
                        onClick={closeConfirmPasswordPopup}
                    >
                        <i className="bx bx-x"></i>
                    </button> */}
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

    </>);
}

export default CustomerLogin;
