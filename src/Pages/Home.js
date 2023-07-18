import React, { useEffect } from "react";
import Header from "../Components/common/Header";
import HomeBanner from "../Components/home/HomeBanner";
import Specialities from "../Components/home/Specialities";
import CommonDiseases from "../Components/home/CommonDiseases";
import FeaturedPractioners from "../Components/home/FeaturedPractioners";
import OurProcess from "../Components/home/OurProcess";
import ListPractise from "../Components/home/ListPractise";
import DownloadApp from "../Components/home/DownloadApp";
import Footer from "../Components/common/Footer";
import { useDispatch } from "react-redux";
import {
  fetchFeaturedSpeciality,
  fetchSpeciality,
} from "../Redux/thunk/speciality.thunk";
import { fetchConditions } from "../Redux/thunk/conditions.thunk";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeaturedSpeciality());
    dispatch(fetchSpeciality());
    dispatch(fetchConditions());
  }, []);

  return (
    <>
      <Header />
      <HomeBanner />
      <Specialities />
      <CommonDiseases />
      <FeaturedPractioners />
      <OurProcess />
      <ListPractise />
      <DownloadApp />
      <Footer />
    </>
  );
}
