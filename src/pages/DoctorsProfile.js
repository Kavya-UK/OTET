import React, { useEffect } from 'react'
import Header from "../components/common/Header"
import DoctorProfile from '../components/doctor/DoctorProfile'
import Footer from '../components/common/Footer'

export default function DoctorsProfileContainer() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  
  return (
    <div>
      <Header setDropShadow={true} />
      <DoctorProfile />
      <Footer />
    </div>
  );
}
