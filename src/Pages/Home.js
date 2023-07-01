import React, { useEffect } from 'react'
import Header from '../Components/Common/Header'
import HomeBanner from '../Components/Common/HomeBanner'
import Specialities from '../Components/Common/Specialities';
import CommonDiseases from '../Components/Common/CommonDiseases';
import FeaturedPractioners from '../Components/Common/FeaturedPractioners';
import OurProcess from '../Components/Common/OurProcess';
import ListPractise from '../Components/Common/ListPractise';
import DownloadApp from '../Components/Common/DownloadApp';
import Footer from '../Components/Common/Footer';
import { useDispatch } from 'react-redux';
import {
  fetchFeaturedSpeciality,
  fetchSpeciality,
} from "../Redux/thunk/speciality.thunk";

export default function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log('TRIGGERED');
    dispatch(fetchFeaturedSpeciality());
    dispatch(fetchSpeciality());
  },[])
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
