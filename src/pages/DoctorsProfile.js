import React, { useEffect } from "react";
import Header from "../components/common/Header";
import DoctorProfile from "../components/doctor/DoctorProfile";
import Footer from "../components/common/Footer";
import HeaderContainer from "./container/HeaderContainer";

export default function DoctorsProfileContainer() {
  return (
    <HeaderContainer showHomeHeader={true} setDropShadow={true}>
      <DoctorProfile />
    </HeaderContainer>
    
  );
}
