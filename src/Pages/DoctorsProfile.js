import React from 'react'
import Header from "../Components/common/Header"
import DoctorProfile from '../Components/doctor/DoctorProfile'
import Footer from '../Components/common/Footer'

export default function DoctorsProfileContainer() {
  return (
    <div>
      <Header setDropShadow={true} />
      <DoctorProfile />
      <Footer />
    </div>
  );
}
