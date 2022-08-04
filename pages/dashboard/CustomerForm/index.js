import Link from 'next/link';

import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';
import NavbarThree from '../../../components/_App/NavbarThree';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { states } from '../../../utils/state';
import { cities } from '../../../utils/cities';
import { locations } from '../../../utils/location';

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [pincode, setPincode] = useState("");
    const [doorNumber, setDoorNumber] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [token, setToken] = useState("")
    const [petName, setPetName] = useState("");
    // const [breed, setBreed] = useState("");
    const [breedOptional, setBreedOptional] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [active, setActive] = useState("");
    const [vaccinationName, setVaccinationName] = useState("");
    const [vaccinationDate, SetVaccinationDate] = useState("");
    const [vaccinationDueDate, SetVaccinationDueDate] = useState("");
    const [vaccinationDocsUpload, setVaccinationDocsUpload] = useState("");
    const [allergies, setAllergies] = useState("");
    const [error, setError] = useState(false);
    const [petDetailForm, setPetDetailFomr] = useState(true)
    const [cityFilter, setCityFilter] = useState([]);
    const [trainedPet, setTrainedPet] = useState("");
    const [breed,setBreed] = useState("");
    const [showOptionalBreed,setShowOptionalBreed] =useState(false)

    const [locationFilter, setLocationFilter] = useState([]);

    useEffect(() => {
        if (typeof window != "undefined") {
            console.log("we are running on the client");
            let token = localStorage.getItem("token")
            let user = JSON.parse(localStorage.getItem("user"));
            if(user != null && user != undefined){

                let id = user._id;
                getCustomerProfile(id)
                setToken(token)
            }
            states.sort((a, b) => a.Geo_Name.toLowerCase() < b.Geo_Name.toLocaleLowerCase() ? -1 : 1);
        } else {
            console.log("we are running on the server");
        }
    }, [])

    const handleClickState = (e) => {
        const stay = e.target.value;
        setState(stay.split(","));
    };

    const handleOnChangeCity = (e) => {
        const cty = e.target.value
        setCity(cty.split(","));
    };

    const handleOnChangeLocation = (e) => {
        const loca = e.target.value;
        setLocation(loca.split(","));
    };

    const getCustomerProfile = async (id) => {
        try {
            const { data } = await axios.get(`${process.env.DOMAIN_NAME}/api/customer/get-profile/${id}`);
            console.log(data)
            setName(data.customer.customerName)
            setEmail(data.customer.email)
            setMobile(data.customer.mobile)
            setPincode(data.customer.pincode)
            setDoorNumber(data.customer.address[0])
            setStreet(data.customer.address[1])
            setLandmark(data.customer.address[2])
            setState(data.customer.state)
            setCity(data.customer.city)
            setLocation(data.customer.location)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickCity = () => {
        if (state == "") {
            toast.error("Plese select state", {
                theme: "light",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } else {
            console.log(cities)
            console.log(state[1])
            const filterCity = cities.filter((citi) => citi.Geo_Head == state[1]);
            setCityFilter(filterCity);
            console.log(filterCity)
        }
    };

    const handleClickLocation = () => {
        if (city == "") {
            toast.error("Plese select city", {
                theme: "light",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } else {
            const filterLocation = locations.filter((loca) => loca.Geo_City == city[2]);
            console.log(filterLocation)
            setLocationFilter(filterLocation);
        }
    };

    const customerDetails = async (e) => {
        e.preventDefault();
        const d = {
            customerName: name,
            email,
            mobile,
            pincode,
            address: [doorNumber, street, landmark],
            state,
            city,
            location
        }
        console.log(d)
        if (name === "" || email === "" || mobile === "" || pincode === "" || street === "" ||
            state === "" || city === "" || location === "") {
            setError(true);
        } else {
            try {
                const { data } = await axios.put(`${process.env.DOMAIN_NAME}/api/customer/update-profile/${token}`, d)
                console.log(data)
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
    };

    const petInformation = async(e) => {
        e.preventDefault();
        const d = {
            petName,
            breed,
            breedOptional,
            dob,
            age,
            gender,
            weight,
            active,
            vaccinationName,
            vaccinationDate,
            vaccinationDueDate,
            vaccinationDocsUpload,
            allergies,
            trainedPet

        }
        console.log(breed);
        console.log(d)
        // if (petName === "" || breed === "" || breedOptional === "" || dob === "" || age === "" ||
        //     gender === "" || weight === "" || active === "" || vaccinationName === "" || vaccinationDate === "" ||
        //     vaccinationDueDate === "" || vaccinationDocsUpload === "" || allergies === "" || trainedPet === ""
        // ) {
        //     console.log("error")
        //     setError(true); 
        // }else{
            try {
                const {data} = await axios.post(`${process.env.DOMAIN_NAME}/api/customer/pet/create/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGY3NTNlMDMwYjkwZDc4YzFlYTVjMiIsImlhdCI6MTY1OTQ0MDUzNSwiZXhwIjoxNjU5NTI2OTM1fQ.XG3PkUPL0zTgW4bcjY8VkZ-eopgwJfYQ7qxppBBCCAI`, d);
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
                        autoClose: 5000,
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
        // }
    };

    // Breed Selection
    const handleBreed =(e)=>{
        console.log(e.target.value)
        if(e.target.value == "others"){
            setShowOptionalBreed(true)
            setBreed("")
        }
        else{
            setShowOptionalBreed(false)
            console.log(e.target.value);
            setBreed(e.target.value)
        }
    }


    return (
        <>
            <DashboardNavbar />
            <div className="main-content d-flex flex-column">
                <NavbarThree />
                <div className="row">
                    <ToastContainer />
                    <div className="col-lg-12 col-md-12">
                        <div className="my-profile-box">
                            <h3>User Details</h3>

                            <form onSubmit={customerDetails} >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="form-group" >
                                            <label> Name</label>
                                            <input
                                                type="text"
                                                className="form-control form-color"
                                                placeholder="Name"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                            />
                                            {error && name == "" ? (
                                                <span className='text-danger'>Please enter business name</span>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="form-group ">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control form-color"
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
                                                className="form-control form-color"
                                                placeholder="Phone Number"
                                                maxlength={10}
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
                                                className="form-control form-color"
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
                                                className="form-control form-color"
                                                placeholder="Street"
                                                onChange={(e) => setStreet(e.target.value)}
                                                value={street}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Landmark</label>
                                            <input
                                                type="text"
                                                className="form-control form-color"
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
                                                className="form-control form-color"
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
                                                className="dashbaord-category-select form-color"
                                                placeholder="Select the state"
                                                onChange={handleClickState}
                                                value={state}
                                            >
                                                <option>Select the State</option>
                                                {states.map((state) => {
                                                    return (
                                                        <option id={state.Geo_TinNo}
                                                            value={[state.Geo_Name, state.Geo_TinNo]}
                                                            key={state.Geo_TinNo}>  {state.Geo_Name}</option>)
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
                                            <select
                                                className="dashbaord-category-select form-color"
                                                onChange={handleOnChangeCity}
                                                onFocus={handleClickCity}
                                            >
                                                <option>{city.length > 0 ? city[0] : "Select the City"}</option>
                                                {cityFilter.map((cityMap) => {
                                                    return (
                                                        <option
                                                            value={[
                                                                cityMap.Geo_Name,
                                                                cityMap.Geo_Head,
                                                                cityMap.id,
                                                            ]}
                                                            key={cityMap.id}
                                                        >
                                                            {cityMap.Geo_Name}
                                                        </option>
                                                    );
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
                                            <select className="dashbaord-category-select form-color"
                                                onChange={handleOnChangeLocation}
                                                onFocus={handleClickLocation}
                                            >
                                                <option>
                                                    {location.length > 0 ? location[0] : "Select the Location"}
                                                </option>
                                                {locationFilter.map((locaMap) => {
                                                    return (
                                                        <option
                                                            value={[
                                                                locaMap.Geo_Name,
                                                                locaMap.Geo_Head,
                                                                locaMap.Geo_City,
                                                                locaMap.id,
                                                            ]}
                                                            key={locaMap.id}
                                                        >
                                                            {locaMap.Geo_Name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            {error && location.length == "" ? (
                                                <span className="text-danger">Please select location</span>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <button type="submit">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>


                {petDetailForm && (<div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="my-profile-box">
                            <h3>Pet Details</h3>
                            <div className="row mt-5">
                                <div className="col-lg-6 col-md-12">
                                    <form >
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="form-group profile-box">
                                                <input
                                                    type="file"
                                                    name="file"
                                                    id="file"
                                                    className="inputfile p-5 w-10 file-upload input-size"
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
                            </div>
                            <form onSubmit={petInformation} >
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label> Name</label>
                                            <input
                                                type="text"
                                                className="form-control form-color"
                                                placeholder="Pet Name"
                                                onChange={(e) => setPetName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12 " >
                                        <div className="form-group">
                                            <label>
                                                <i className="bx bx-menu-alt-left"></i> Breed:
                                            </label>
                                            <select
                                                className="dashbaord-category-select form-color"
                                                onChange={(e) => handleBreed(e)} 
                                                >                                           
                                                <option>Select the Breed </option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                    </div>

                               <div className="col-xl-6 col-lg-12 col-md-12">
                                {showOptionalBreed && 
                                        <div className="form-group">
                                            <label>option:</label>
                                            <input
                                                type="text"
                                                className="form-control form-color"
                                                placeholder="Breed Name"
                                               onChange={(e) => setBreed(e.target.value)}
                                            ></input>
                                        </div>
                                        }
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>DOB</label>
                                            <input
                                                type="date"
                                                className="form-control form-color"
                                                placeholder="Date of Birth"
                                                onChange={(e) => setDob(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-12 col-md-12'>
                                        <div className="form-group">
                                            <label>Age</label>
                                            <input
                                                type="text"
                                                className="form-control form-color"
                                                placeholder="Age"
                                                onChange={(e) => setAge(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-12 col-md-12'>
                                        <div className='form-group'>
                                            <label>Gender</label>
                                            <div class="row">
                                                <div class="col-lg-6 py-3" >
                                                    <label className='checkbox'>
                                                        <input
                                                            type='radio'
                                                            name='Gender'
                                                            value="Male"
                                                            onChange={(e) => setGender(e.target.value)}
                                                            />
                                                        <span>Male</span>
                                                    </label>
                                                </div>
                                                <div class="col-lg-6 py-3">
                                                    <label className='checkbox check'>
                                                        <input
                                                            type='radio'
                                                            name='Gender'
                                                            value="Female"
                                                            className='checked1'                                                           
                                                            
                                                            onChange={(e) => setGender(e.target.value)}
                                                            />
                                                        <span>Female</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Weight</label>
                                            <input
                                                type="Number"
                                                className="form-control form-color"
                                                placeholder="Weight"
                                                onChange={(e) => setWeight(e.target.value)}

                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Active</label>
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <label className='checkbox'>
                                                        <input
                                                            type='radio'
                                                            name='Active'
                                                            value="High"
                                                            onChange={(e) => setActive(e.target.value)}
                                                            
                                                            />
                                                        <span> High</span>
                                                    </label>
                                                </div>
                                                <div class="col-lg-4">
                                                    <label className='checkbox'>
                                                        <input
                                                            type='radio'
                                                            name='Active'
                                                            value="Medium"
                                                            onChange={(e) => setActive(e.target.value)}
                                                            
                                                            />
                                                        <span> Medium</span>
                                                    </label>
                                                </div>
                                                <div class="col-lg-4">
                                                    <label className='checkbox'>
                                                        <input
                                                            type='radio'
                                                            name='Active'
                                                            value="Low"
                                                            onChange={(e) => setActive(e.target.value)}
                                                            />
                                                        <span> Low</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Trained Pet</label>
                                            
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <label className='checkbox'>
                                                        <input
                                                            type='radio'
                                                            name='TrainedPet'
                                                            value="yes"
                                                            className='form-radio'
                                                            onChange={(e) => setTrainedPet(e.target.value)}
                                                        />
                                                        <span> Yes</span>
                                                    </label>
                                                </div>
                                                <div class="col-lg-4">
                                                    <label className='checkbox'>
                                                        <input
                                                            type='radio'
                                                            name='TrainedPet' 
                                                            value="No"    
                                                            onChange={(e) => setTrainedPet(e.target.value)}                                           

                                                        />
                                                        <span > No</span>
                                                    </label>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <h3 id="address">vaccination Details</h3>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control form-color"
                                                onChange={(e) => setVaccinationName(e.target.value)}

                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input
                                                type="date"
                                                className="form-control form-color"
                                                onChange={(e) => SetVaccinationDate(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Due Date</label>
                                            <input
                                                type="date"
                                                className="form-control form-color"
                                                onChange={(e) => SetVaccinationDueDate(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-2 col-lg-12 col-md-12"
                                    >
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
                                    </div>
                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>vaccination</label>
                                            <input
                                                type="file"
                                                className="form-control form-color"
                                                onChange={(e) => setVaccinationDocsUpload(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Allergies</label>
                                            <textarea
                                                cols="5"
                                                rows="3"
                                                placeholder="..."
                                                className="form-control form-color"
                                            ></textarea>
                                        </div>
                                    </div>



                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <button type="submit">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>)}









                <div className="flex-grow-1"></div>
                <div className="copyrights-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <p>
                                <i className="bx bx-copyright"></i>Copyright © 2022{" "}
                                <a href="/">BEYONDLOVE</a>. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Profile;
