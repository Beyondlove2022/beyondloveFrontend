import react, { useState } from "react";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import axios from "axios";
import "react-toastify/ReactToastify.min.css";
import router from "next/router";


const CustomerRegister= () => {
    const [customerName, setCustomerName] = useState("")
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password,setPassword] = useState("");     
    const [error, setError] = useState(false);
    
    const submit = async (e) => {
        e.preventDefault();
        const d = {
            customerName,
            email,
            mobile,
            password,
            
        }
        console.log(d);
        if (customerName === "" || email === "" || mobile === "" || password === "" ) {
            setError(true)
        }
        else {
            try {
                const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/customer/register`, d);
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
                    const user = JSON.stringify(data.businessDetails)
                    localStorage.setItem("user", user)
                    localStorage.setItem("token", data.token);
                    const cate = category.toLowerCase();
                    router.push({ pathname: `/dashboard/category/${cate}` })
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

    return (<>
        <div className='tab-pane' id='register'>
            <ToastContainer/>
            <div className='miran-register'>
                <form onSubmit={submit}>
                <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Name'
                            className='form-control' 
                            onChange={(e) => setCustomerName (e.target.value)}                           
                        /> 
                         {error && customerName == "" ? (
                            <span className="text-danger">Please Enter Name</span>
                        ) : (
                            <> </>
                        )}                     
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email'
                            className='form-control'   
                            onChange={(e) => setEmail (e.target.value)}                         
                        />   {error && email == "" ? (
                            <span className="text-danger">Please Enter Email Id</span>
                        ) : (
                            <> </>
                        )}                    
                    </div>
                    <div className='form-group'>
                        <input
                            type='mobile'
                            placeholder='Mobile No'
                            className='form-control' 
                            onChange={(e) => setMobile(e.target.value)}
                                                       
                        /> {error && mobile == "" ? (
                            <span className="text-danger">Please Enter Mobile</span>
                        ) : (
                            <> </>
                        )}                  
                    </div>
                    <div className='form-group'>
                        <input
                            type='Password'
                            placeholder='Password'
                            className='form-control' 
                            onChange={(e) => setPassword(e.target.value)}                          
                        /> {error && password == "" ? (
                            <span className="text-danger">Please Enter Password</span>
                        ) : (
                            <> </>
                        )}                     
                    </div>
                    <button type='submit'>Register Now</button>
                </form>
                <span className='already-account'>
                    Already have an account? <a href='#'>Login Now</a>
                </span>
            </div>
        </div>
    </>);
}

export default CustomerRegister;