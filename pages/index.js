// import Navbar from '../components/_App/Navbar';
// import Banner from '../components/HomeOne/Banner';
// import Features from '../components/HomeOne/Features';
// import ListingArea from '../components/Common/ListingArea';
// import Category from '../components/HomeOne/Category';
// import DestinationsTwo from '../components/Common/DestinationsTwo';
// import Feedback from '../components/Common/Feedback';
// import HowItWorks from '../components/Common/HowItWorks';
// import Blog from '../components/Common/Blog';
// import AppDownload from '../components/Common/AppDownload';
// import Footer from '../components/_App/Footer';

// const Index = () => {
//   return (
//     <>
//       <Navbar />
//       <Banner />
//       <Features />
//       <ListingArea />
//       <Category />
//       <DestinationsTwo />
//       <Feedback />
//       <HowItWorks bgColor="bg-f9f9f9" />
//       <Blog />
//       <AppDownload />
//       <Footer />
//     </>
//   );
// };

// export default Index;

import NavbarTwo from "../components/_App/NavbarTwo2";
import Banner from "../components/HomeTwo/Banner";
import MainBanner from "../components/HomeTwo/MainBanner";
import CategoryTwo from "../components/Common/CategoryTwo";
import ListingAreaTwo from "../components/Common/ListingAreaTwo";
import Destinations from "../components/Common/Destinations";
import Feedback from "../components/Common/Feedback";
import EventsArea from "../components/HomeTwo/EventsArea";
import HowItWorks from "../components/Common/HowItWorks";
import Blog from "../components/HomeTwo/Blog";
import AppDownload from "../components/Common/AppDownload";
import Footer from "../components/_App/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"], nextI18NextConfig)),
    },
  };
}

const Index2 = () => {
  return (
    <>
      <NavbarTwo />
      <MainBanner />
      <Banner />
      <CategoryTwo titleOne={true} />
      {/* <ListingAreaTwo bgColor="bg-f9f9f9" titleOne={true} /> */}
      {/* <Destinations titleOne={true} paddingBottom70="pb-70" /> */}
      {/* <Feedback title={true} bgColor="" bgImage="bg-image" /> */}
      {/* <EventsArea /> */}
      {/* <HowItWorks bgColor="bg-f9f9f9" /> */}
      {/* <Blog /> */}
      {/* <AppDownload /> */}
      <hr></hr>
      <Footer />
    </>
  );
};

export default Index2;
