import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import HomeBanner from "../components/home/HomeBanner";
import Specialities from "../components/home/Specialities";
import CommonDiseases from "../components/home/CommonDiseases";
import FeaturedPractioners from "../components/home/FeaturedPractioners";
import OurProcess from "../components/home/OurProcess";
import ListPractise from "../components/home/ListPractise";
import DownloadApp from "../components/home/DownloadApp";
import Footer from "../components/common/Footer";
import { useDispatch } from "react-redux";
import {
  fetchFeaturedSpeciality,
  fetchSpeciality,
} from "../redux/thunk/speciality.thunk";
import { fetchConditions } from "../redux/thunk/conditions.thunk";
import MobileHeader from "../components/common/MobileHeader";
import HeaderContainer from "./container/HeaderContainer";
export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeaturedSpeciality());
    dispatch(fetchSpeciality());
    dispatch(fetchConditions());
  }, []);

  return (
    <HeaderContainer showHomeHeader={true}>
      <HomeBanner />
      <Specialities />
      <CommonDiseases />
      <FeaturedPractioners />
      <OurProcess />
      <ListPractise />
      <DownloadApp />
    </HeaderContainer>
  );
}
