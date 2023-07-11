import React from 'react'
import Header from "../Components/Common/Header"
import DoctorProfile from '../Components/Common/DoctorProfile'
import Footer from '../Components/Common/Footer'

export default function DoctorsProfileContainer() {
  return (
    <div>
      <Header setDropShadow={true} />
      <DoctorProfile />
      <Footer />
    </div>
  );
}
