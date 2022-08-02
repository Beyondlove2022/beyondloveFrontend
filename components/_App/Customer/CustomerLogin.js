import react, { useState } from "react";
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

    const loginPasswordVisibility = () => {
        setShowLogingPassword(!showLoginPassword)
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
                    const user = JSON.stringify(data.customer);
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
                    <button type='submit'>Login</button>
                </form>
                {/* <span className='dont-account'>
                    Don't have an account? <a href='#'>Register Now</a>
                </span> */}
            </div>

        </div>
    </>);
}

export default CustomerLogin;
