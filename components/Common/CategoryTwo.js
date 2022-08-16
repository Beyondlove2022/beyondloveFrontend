import Link from "next/link";
import { FaClinicMedical } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import { TbBone } from "react-icons/tb";
import { MdPets, MdOutlineFoodBank } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const Category = ({ titleOne, titleTwo }) => {
  const [petBoardingCount, setPetBoardingCount] = useState("");
  const [petClinicCount, setPetClinicCount] = useState("");
  const [petFoodCount, setPetFoodCount] = useState("");
  const [petGroomingCount, setPetGroomingCount] = useState("");
  const [petTrainingCount, setTrainingCount] = useState("");
  const router = useRouter();
  const { t } = useTranslation("home");
  useEffect(() => {
    if (typeof window != "undefined") {
      console.log("we are running the client");
      getServiceProvide();
    } else {
      console.log("we are running server side");
    }
  });
  const getServiceProvide = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.DOMAIN_NAME}/api/business/get-serviceproviderscount`
      );
      console.log(data);
      setPetBoardingCount(data.petBoardingCount);
      setPetClinicCount(data.petClinicCount);
      setPetFoodCount(data.petFoodCount);
      setPetGroomingCount(data.petGroomingCount);
      setTrainingCount(data.petTrainingCount);
    } catch (error) {
      console.log(error);
    }
  };
  const getSpecificCategoryServices = (e, categoryName) => {
    e.preventDefault();
    router.push({
      pathname: "/listings",
      query: { categoryName },
    });
    // try {
    //   const { data } = await axios.get(
    //     `${process.env.DOMAIN_NAME}/api/business/get-profiles-from-unique-category/${category}`
    //   );
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <section className="category-area pt-100 pb-70 bakgrd">
        <div className="container">
          {titleOne ? (
            <div className="section-title">
              <h2>{t("Popular Categories")}</h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra.
              </p> */}
            </div>
          ) : titleTwo ? (
            <div className="section-title text-left">
              <h2>Explore by Category</h2>
              <a href="#" className="link-btn">
                Show All <i className="flaticon-right-chevron"></i>
              </a>
            </div>
          ) : (
            ""
          )}
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div
              className="col-lg-2 col-sm-6 col-md-4"
              onClick={(e) => getSpecificCategoryServices(e, "PetClinic")}
            >
              <div className="single-category-box">
                <div className="icon">
                  <FaClinicMedical />
                </div>
                <h3>{t("Pet Clinic")}</h3>
                <span>{petClinicCount}</span>
                {/* <Link href="/grid-listings-with-map">
                  <a className="link-btn"></a>
                </Link> */}
              </div>
            </div>
            <div
              className="col-lg-2 col-sm-6 col-md-4"
              onClick={(e) => getSpecificCategoryServices(e, "PetGrooming")}
            >
              <div className="single-category-box">
                <div className="icon">
                  <GiHairStrands />
                </div>
                <h3>{t("Pet Grooming")}</h3>
                <span>{petGroomingCount}</span>
                {/* <Link href="/grid-listings-with-map">
                  <a className="link-btn"></a>
                </Link> */}
              </div>
            </div>
            <div
              className="col-lg-2 col-sm-6 col-md-4"
              onClick={(e) => getSpecificCategoryServices(e, "PetTraining")}
            >
              <div className="single-category-box">
                <div className="icon">
                  <TbBone />
                </div>
                <h3>{t("Pet Training")}</h3>
                <span>{petTrainingCount}</span>
                {/* <Link href="/grid-listings-with-map">
                  <a className="link-btn"></a>
                </Link> */}
              </div>
            </div>
            <div
              className="col-lg-2 col-sm-6 col-md-4"
              onClick={(e) => getSpecificCategoryServices(e, "PetBoarding")}
            >
              <div className="single-category-box">
                <div className="icon">
                  <MdPets />
                </div>
                <h3>{t("Pet Boarding")}</h3>
                <span>{petBoardingCount}</span>
                {/* <Link href="/grid-listings-with-map">
                  <a className="link-btn"></a>
                </Link> */}
              </div>
            </div>
            {/* <div className="col-lg-2 col-sm-6 col-md-4">
              <div className="single-category-box">
                <div className="icon">
                  <MdOutlineFoodBank />
                </div>
                <h3>Pet Food</h3>
                <span>8 Places</span>
                <Link href="/grid-listings-with-map">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div> */}
            {/* <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-calendar'></i>
                </div>
                <h3>Events</h3>
                <span>12 Places</span>
                <Link href='/grid-listings-with-map'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-heart-1'></i>
                </div>
                <h3>Health Care</h3>
                <span>16 Places</span>
                <Link href='/grid-listings-with-map'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-airport'></i>
                </div>
                <h3>Travel & Public</h3>
                <span>8 Places</span>
                <Link href='/grid-listings-with-map'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-car-insurance'></i>
                </div>
                <h3>Auto Insurance</h3>
                <span>10 Places</span>
                <Link href='/grid-listings-with-map'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-attorney'></i>
                </div>
                <h3>Attorneys</h3>
                <span>25 Places</span>
                <Link href='/grid-listings-with-map'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box'>
                <div className='icon'>
                  <i className='flaticon-plumber'></i>
                </div>
                <h3>Plumbers</h3>
                <span>5 Places</span>
                <Link href='/grid-listings-with-map'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-4'>
              <div className='single-category-box more-categories'>
                <div className='icon'>
                  <i className='flaticon-more-1'></i>
                </div>
                <h3>More Categories</h3>
                <Link href='/categories'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Category;
