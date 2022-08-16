import axios from "axios";
import Link from "next/link";
import react, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { cities } from "../../utils/cities";
import { locations } from "../../utils/location";
import Typist from "react-typist";
// import { ToastContainer, toast, TypeOptions } from "react-toastify";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const Banner = () => {
    const [contactForm, setContactForm] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [error, setError] = useState(false);
    const [serviceProvider, setServiceProvider] = useState("")
    const [citiesLength, setCitiesLength] = useState("");
    const [locationLength, setLocationLength] = useState("");
    const [stateName, setStateName] = useState("");
    const [cityName, setCityName] = useState("");
    const [selectedCity, setSelectedCity] = useState([]);
    const [locationName, setLocationName] = useState("");
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [allBusinessDetail, setAllBusinessDetail] = useState([]);
    const [allStates, setAllStates] = useState([]);
    const [allCities, setAllCities] = useState([]);
    const [allLocations, setAllLocations] = useState([]);
    const [run, setRun] = useState(false);
    const [token, setToken] = useState("")

    const contactFormShow = () => {
        setContactForm(!contactForm)
    }

    useEffect(() => {
        if (typeof window != "undefined") {
            console.log("we are running the client")
            const token = localStorage.getItem('token')
            const user = JSON.parse(localStorage.getItem("user"))
            console.log(user)
            setName(user.customerName)
            setMobile(user.mobile)
            setCity(user.city[0])
            setLocation(user.location[0])
            setToken(token)
            getServiceProvide();
            setCitiesLength(cities.length)
            setLocationLength(locations.length)
        } else {
            console.log("we are running server side")
        }
    })

    // const handleClickCty = () => {
    //     if (state == undefined) {
    //         console.log("Please select the state")
    //     } else {
    //         console.log("this is else statement")
    //     }
    // }

    const getServiceProvide = async () => {
        try {
            const { data } = await axios.get(`${process.env.DOMAIN_NAME}/api/business/get-serviceproviderscount`)
            setServiceProvider(data.serviceProvidersCount)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const appointmentFormSubmit = async (e) => {
        e.preventDefault()
        const d = {
            name,
            mobile,
            category,
            city,
            location,
            appointmentDate: dateTime
        }
        console.log(d)
        if (name === "" || mobile === "" || category === "" ||
            city === "" || location === "" || dateTime === "") {
            setError(true);
        }
        else {
            try {
                const { data } = await axios.post(`${process.env.DOMAIN_NAME}/api/customer/appointment-booking/${token}`, d);
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
                    setName("")
                    setMobile("")
                    setCategory("")
                    setCity("")
                    setLocation("")
                    setDateTime("")
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
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(
            { categoryName },
            { stateName },
            { cityName },
            { locationName }
        );

        router.push({
            pathname: "/listings", query: { categoryName, stateName, cityName, locationName },
        });
    }
    const handleChangeCategory = (e) => {
        console.log(e.target.value);
        setCategoryName(e.target.value);
    };
    // location Change
    const handleChangeLocation = (e) => {
        const loc = e.target.value;
        setLocationName(loc.split(","));
    };
    // Filtering Cities by State

    const handleClickLocation = () => {
        console.log(cityName);
        if (cityName == "" || cityName[2] == undefined) {
            toast.error("Please Select City", {
                theme: "light",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            console.log(allCities);
            console.log(cityName);
            let arr = [];
            allLocations.map((loc) => {
                console.log(loc);
                if (loc[2] == cityName[2]) {
                    arr.push(loc);
                }
            });

            console.log(arr);
            setSelectedLocation(arr);
        }
    }
    const handleClickCity = () => {
        console.log(stateName);
        if (stateName == "" || stateName[1] == undefined) {
            toast.error("Please Select State", {
                theme: "light",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            console.log(allCities);
            console.log(stateName[1]);
            let arr = [];
            allCities.map((city) => {
                if (city[1] == stateName[1]) {
                    arr.push(city);
                }
            });

            console.log(arr);
            setSelectedCity(arr);
        }
    };
    const handleChangeCity = (e) => {
        const cty = e.target.value;
        console.log(cty.split(","));
        setCityName(cty.split(","));
    };

    // State Change

    const handleStateChange = (e) => {
        console.log("changed");
        const stateChange = e.target.value;
        console.log({ stateChange });
        setStateName(stateChange.split(","));
    };
    const getStateandCities = (details) => {
        // let stateArray = [];
        let cityArray = [];
        let locationArray = [];
        details.map((states) => {
            // console.log(states);
            //   if (states.state[0] !== undefined) {
            //     stateArray.push(states.state);
            //   }
            if (states.city[0] !== undefined) {
                cityArray.push(states.city);
            }
            if (states.location[0] !== undefined) {
                locationArray.push(states.location);
            }
        });
        // // unique state array
        // let stringStateArray = stateArray.map(JSON.stringify);
        // let uniqueStateString = new Set(stringStateArray);
        // let uniqueStateArray = Array.from(uniqueStateString, JSON.parse);
        // uniqueStateArray.sort((a, b) => (a[0] < b[0] ? -1 : 1));
        // console.log(uniqueStateArray);

        // unique city array
        let stringCityArray = cityArray.map(JSON.stringify);
        let uniqueCityString = new Set(stringCityArray);
        let uniqueCityArray = Array.from(uniqueCityString, JSON.parse);
        uniqueCityArray.sort((a, b) => (a[0] < b[0] ? -1 : 1));

        // unique location array
        let stringLocationArray = locationArray.map(JSON.stringify);
        let uniqueLocationString = new Set(stringLocationArray);
        let uniqueLocationArray = Array.from(uniqueLocationString, JSON.parse);
        uniqueLocationArray.sort((a, b) => (a[0] < b[0] ? -1 : 1));

        setAllStates(uniqueStateArray);
        setAllCities(uniqueCityArray);
        setAllLocations(uniqueLocationArray);
    };
    return (
        <>
            <section className='banner-wrapper-area-main-banner'>
                <ToastContainer />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 col-md-12'>

                            <div className="banner-content banner-form">
                                <h1 className="banner-two-heading">
                                    <span className="typewrite">Find Nearby</span>
                                    <Typist>
                                        <span>Pet Clinics</span>
                                        <Typist.Backspace count={15} delay={200} />
                                        <span> Pet Grooming </span>
                                        <Typist.Backspace count={15} delay={200} />
                                        <span> Pet Training </span>
                                        <Typist.Backspace count={15} delay={200} />

                                        <span> Pet Boarding </span>
                                    </Typist>
                                    <span className="wrap"></span>
                                </h1>

                                <form onSubmit={handleSubmit}>
                                    <div
                                        className="row m-0 align-items-center"
                                        style={{ padding: "6px" }}
                                    >
                                        <div class="col-lg-3 col-md-6 p-0">
                                            <div className="form-group category-select">
                                                <label className="category-icon">
                                                    <i className="flaticon-search"></i>
                                                </label>
                                                <select
                                                    className="banner-form-select-two"
                                                    onChange={handleChangeCategory}
                                                >
                                                    <option>Categories</option>
                                                    <option value={"PetClinic"}>Pet Clinic</option>
                                                    <option value={"PetGrooming"}>Pet Grooming</option>
                                                    <option value={"PetBoarding"}>Pet Boarding</option>
                                                    <option value={"PetTraining"}>Pet Training</option>

                                                </select>
                                            </div>
                                        </div>

                                        {/* <div class="col-lg-2 col-md-6 p-0">
                                            <div className="form-group category-select">
                                                <label className="category-icon">
                                                    <i className="flaticon-pin"></i>
                                                </label>
                                                <select
                                                    className="banner-form-select-two"
                                                    value={stateName}
                                                    onChange={handleStateChange}
                                                >
                                                    <option>State</option>

                                                    {allStates.map((state) => {
                                                        return (
                                                            <option
                                                                value={[state[0], state[1]]}
                                                                key={state[0]}
                                                            >
                                                                {state[0]}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div> */}

                                        <div class="col-lg-3 col-md-6 p-0">
                                            <div className="form-group category-select">
                                                <label className="category-icon">
                                                    <i className="flaticon-pin"></i>
                                                </label>
                                                <select
                                                    className="banner-form-select-two"
                                                    onFocus={handleClickCity}
                                                    onChange={handleChangeCity}
                                                >
                                                    <option>
                                                        {cityName.length > 0 ? cityName[0] : "City"}
                                                    </option>
                                                    {selectedCity.map((city) => {
                                                        return (
                                                            <option
                                                                value={[city[0], city[1], city[2]]}
                                                                key={city[0]}
                                                            >
                                                                {city[0]}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 p-0">
                                            <div className="form-group category-select">
                                                <label className="category-icon">
                                                    <i className="flaticon-pin"></i>
                                                </label>
                                                <select
                                                    className="banner-form-select-two"
                                                    onFocus={handleClickLocation}
                                                    onChange={handleChangeLocation}
                                                >
                                                    <option>
                                                        {locationName.length > 0
                                                            ? locationName[0]
                                                            : "Location"}
                                                    </option>
                                                    {selectedLocation.map((location) => {
                                                        return (
                                                            <option
                                                                value={[
                                                                    location[0],
                                                                    location[1],
                                                                    location[2],
                                                                    location[3],
                                                                ]}
                                                                key={location[0]}
                                                            >
                                                                {location[0]}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 p-0">
                                            <div className="submit-btn ">
                                                <button type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div style={{ display: "flex" }}>
                                {/* <div className='search-btn mr-2'>
                                    <Link href='/listings' >
                                        <button>Search Now</button>
                                    </Link>
                                </div> */}
                                <div className='search-btn'>
                                    <button onClick={contactFormShow}>Do Search Leave to us</button>
                                </div>
                            </div>

                            {/* <div className="row mt-5">
                                <div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
                                    <CountUp start={0} end={citiesLength} duration={3} className="countUp" />
                                    <p>Cities</p>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
                                    <CountUp start={0} end={locationLength} duration={3} className="countUp" />
                                    <p>Locations</p>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-md-6 text-center countUp-main">
                                    <CountUp start={0} end={serviceProvider} duration={3} className="countUp" />
                                    <p>Service Provider</p>
                                </div>
                            </div> */}

                        </div>

                        {contactForm && <div className='col-lg-6 col-sm-12 col-md-12'>
                            <div className='contact-form mt-5'>
                                <form id='contactForm' onSubmit={appointmentFormSubmit}>
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    className="dashbaord-category-select"
                                                    placeholder='Name'
                                                    style={{ border: "none" }}
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                {error && name == "" ? (
                                                    <span className="text-danger">Please enter name</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-lg-12 col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    className="dashbaord-category-select"
                                                    placeholder='Mobile'
                                                    style={{ border: "none" }}
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                                {error && mobile == "" ? (
                                                    <span className="text-danger">Please enter mobile number</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-lg-12 col-md-6'>
                                            <div className="form-group">
                                                <select
                                                    className="dashbaord-category-select"
                                                    placeholder="Select the state"
                                                    style={{ border: "none" }}
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option>Categories</option>
                                                    <option>Pet Clinic</option>
                                                    <option>Pet Grooming</option>
                                                    <option>Pet Boarding</option>
                                                    <option>Pet Training</option>
                                                    <option>Pet Food</option>
                                                </select>
                                                {error && category.length == "" ? (
                                                    <span className="text-danger">Please select category</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div>

                                        {/* <div className='col-lg-12 col-md-6'>
                                            <div className="form-group">
                                                <select
                                                    className="dashbaord-category-select"
                                                    placeholder="Select the state"
                                                    style={{ border: "none" }}
                                                    onChange={(e) => setState(e.target.value)}
                                                >
                                                    <option>State</option>
                                                    <option>Tamil Nadu</option>
                                                </select>
                                                {error && state.length == "" ? (
                                                    <span className="text-danger">Please select state</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div> */}

                                        <div className='col-lg-12 col-md-6'>
                                            <div className="form-group">
                                                <select
                                                    className="dashbaord-category-select"
                                                    placeholder="Select the state"
                                                    style={{ border: "none" }}
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                >
                                                    <option>City</option>
                                                    <option>Chennai</option>
                                                </select>
                                                {error && city.length == "" ? (
                                                    <span className="text-danger">Please select city</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-lg-12 col-md-6'>
                                            <div className="form-group">
                                                <select
                                                    className="dashbaord-category-select"
                                                    placeholder="Select the state"
                                                    style={{ border: "none" }}
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                >
                                                    <option>
                                                        {location.length > 0 ? location : "Location"}</option>
                                                    <option>Syna nagar</option>
                                                </select>
                                                {error && location.length == "" ? (
                                                    <span className="text-danger">Please select location</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6'>
                                            <div className='form-group'>
                                                <label>
                                                    <i className="bx bx-menu-alt-left"></i> Appoinment:
                                                </label>
                                            </div>
                                        </div>

                                        <div className='col-lg-12 col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type="datetime-local"
                                                    className='form-control'
                                                    placeholder='Appointment'
                                                    value={dateTime}
                                                    onChange={(e) => setDateTime(e.target.value)}
                                                />
                                                {error && dateTime == "" ? (
                                                    <span className="text-danger">Please select date</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-lg-12 col-md-12'>
                                            <button type='submit' className='default-btn'>
                                                Reach Us
                                            </button>
                                            <div id='msgSubmit' className='h3 text-center hidden'></div>
                                            <div className='clearfix'></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
