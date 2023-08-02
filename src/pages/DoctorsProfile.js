import React, { useEffect } from "react";
import Header from "../components/common/Header";
import DoctorProfile from "../components/doctor/DoctorProfile";
import Footer from "../components/common/Footer";

export default function DoctorsProfileContainer() {
  return (
    <div>
      <Header setDropShadow={true} />
      <DoctorProfile />
      <Footer />
    </div>
  );
}
