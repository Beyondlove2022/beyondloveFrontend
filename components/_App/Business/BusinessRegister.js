import axios from "axios";
import react, { useState } from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import { useDispatch } from "react-redux";
import { addBusiness } from "../../../Redux/businessSlice";
import "react-toastify/ReactToastify.min.css";
import router from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const BusinessRegister = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [showLoginPassword, setShowLogingPassword] = useState(false);

  let dispatch = useDispatch();

  const loginPasswordVisibility = () => {
    setShowLogingPassword(!showLoginPassword)
  }

  const submitOTP = async (e) => {
    e.preventDefault();
    const d = {
      businessName,
      email,
      mobile,
      password,
      category,
    };
    console.log(d);
    if (
      businessName === "" ||
      email === "" ||
      mobile === "" ||
      password === "" ||
      category === ""
    ) {
      setError(true);
    } else {
      try {
        const { data } = await axios.post(
          `${process.env.DOMAIN_NAME}/api/business/register`,
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
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          const user = JSON.stringify(data.businessDetails);
          localStorage.setItem("user", user);
          localStorage.setItem("token", data.token);
          dispatch(addBusiness(data.businessDetails));
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
      <div className="tab-pane" id="register">
        <ToastContainer />
        <div className="miran-register">
          <form onSubmit={submitOTP}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Business Name"
                className="form-control"
                onChange={(e) => setBusinessName(e.target.value)}
              />
              {error && businessName == "" ? (
                <span className="text-danger">Please Enter Name</span>
              ) : (
                <></>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && email == "" ? (
                <span className="text-danger">Please Enter Email</span>
              ) : (
                <></>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Mobile"
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
                <> </>
              )}
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

            <button type="submit">Register Now</button>
          </form>
          {/* <span className="already-account">
            Already have an account? <a href="#">Login Now</a>
          </span> */}
        </div>
      </div>
    </>
  );
};

export default BusinessRegister;
