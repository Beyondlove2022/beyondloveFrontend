import axios from "axios";
import Link from "next/link";
import react, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { cities } from "../../utils/cities";
import { locations } from "../../utils/location";

const Banner = () => {
    const [contactForm, setContactForm] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [category, setCategory] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [error, setError] = useState(false);
    const [serviceProvider, setServiceProvider] = useState("")
    const [citiesLength, setCitiesLength] = useState("");
    const [locationLength, setLocationLength] = useState("");

    const contactFormShow = () => {
        setContactForm(!contactForm)
    }

    useEffect(() => {
        if (typeof window != "undefined") {
            console.log("we are running the client")
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

    const appointmentFormSubmit = (e) => {
        e.preventDefault()
        const d = {
            name,
            mobile,
            category,
            state,
            city,
            location,
            dateTime
        }
        console.log(d)
        if (name === "" || mobile === "" || category === "" ||
            state === "" || city === "" || location === "" || dateTime === "") {
            setError(true);
        }
    }

    return (
        <>
            <section className='banner-wrapper-area-main-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 col-md-12'>
                            <div style={{ display: "flex" }}>
                                <div className='search-btn mr-2'>
                                    <Link href='/listings' >
                                        <button>Search Now</button>
                                    </Link>
                                </div>
                                <div className='search-btn'>
                                    <button onClick={contactFormShow}>Do Search Leave to us</button>
                                </div>
                            </div>

                            <div className="row mt-5">
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
                            </div>

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

                                        {/* <div className='col-lg-12 col-md-6'>
                                            <div className="form-group">
                                                <select
                                                    className="dashbaord-category-select"
                                                    placeholder="Select the state"
                                                    style={{ border: "none" }}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                >
                                                    <option>Location</option>
                                                    <option>Ann nagar</option>
                                                </select>
                                                {error && location.length == "" ? (
                                                    <span className="text-danger">Please select location</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div> */}

                                        {/* <div className='col-lg-6 col-md-6'>
                                            <div className='form-group'>
                                                <label>
                                                    <i className="bx bx-menu-alt-left"></i> Appoinment:
                                                </label>
                                            </div>
                                        </div> */}

                                        {/* <div className='col-lg-12 col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type="datetime-local"
                                                    className='form-control'
                                                    placeholder='Appointment'
                                                    onChange={(e) => setDateTime(e.target.value)}
                                                />
                                                {error && dateTime == "" ? (
                                                    <span className="text-danger">Please select date</span>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </div> */}

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
