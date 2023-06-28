import React from 'react'
import Header from '../Components/Common/Header'
import HomeBanner from '../Components/Common/HomeBanner'
import Specialities from '../Components/Common/Specialities';
import CommonDiseases from '../Components/Common/CommonDiseases';
import FeaturedPractioners from '../Components/Common/FeaturedPractioners';
import OurProcess from '../Components/Common/OurProcess';
import ListPractise from '../Components/Common/ListPractise';
import DownloadApp from '../Components/Common/DownloadApp';
import Footer from '../Components/Common/Footer';

export default function Home() {
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
