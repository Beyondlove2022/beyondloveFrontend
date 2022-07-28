import react, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import router from "next/router";

const BusinessLogin = () => {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [category, setCategory] = useState("")
    const [error, setError] = useState(false);

    const loginSubmit = async (e) => {
        e.preventDefault();
        const d = {
            mobile,
            password,
            category
        }
        console.log(d)
        if (mobile === "" || password === "" || category === "") {
            setError(true)
        } else {
            try {
                const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/business/login`, d);
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
                    const user = JSON.stringify(data.business);
                    localStorage.setItem("user", user)
                    localStorage.setItem("token", data.token);
                    const cate = category.toLowerCase();
                    localStorage.setItem("category", cate)
                    router.push({ pathname: `/dashboard/category/${cate}` })
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

    return (
        <>
            <div className='tab-pane fade show active' id='login'>
                <ToastContainer />
                <div className='miran-login'>
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
                                <option value="PetFood">Pet Food</option>
                            </select>
                            {error && category.length == "" ? (
                                <span className="text-danger">Please Select Category</span>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Mobile number'
                                className='form-control'
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            {error && mobile == "" ? (
                                <span className="text-danger">Please Enter Mobile Number</span>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className='form-group'>
                            <input
                                type='password'
                                placeholder='Password'
                                className='form-control'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && password == "" ? (
                                <span className="text-danger">Please Enter Password</span>
                            ) : (
                                <></>
                            )}
                        </div>

                        <button type='submit'>Login Now</button>
                    </form>
                    <span className='dont-account'>
                        Don't have an account? <a href='#'>Register Now</a>
                    </span>
                </div>
            </div>
        </>
    );
}

export default BusinessLogin;