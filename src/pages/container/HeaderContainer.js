import React, { useState } from "react";
import MobileHeader from '../../components/common/MobileHeader';
import Header from '../../components/common/Header';
import Footer from "../../components/common/Footer";
import AppointmentHeader from "../../components/home/AppointmentHeader";
import DoctorHeader from "../../components/doctor/DoctorHeader";

function HeaderContainer({
  setDropShadow,showDoctorHeader, showHomeHeader,
  showAppointmentHeader,
  children,
}) {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <MobileHeader setShowHeader={setShowHeader} showHeader={showHeader} />
      <div
        className={`${
          showHeader
            ? "   translate-x-[-100%] transition-all duration-[0.3s] ease-[linear]"
            : "  translate-x-[0] transition-all duration-[0.3s] ease-[linear]"
        }}`}
      >
        {showHomeHeader && <Header setDropShadow={setDropShadow} />}
        {showAppointmentHeader && <AppointmentHeader />}
        {showDoctorHeader && <DoctorHeader />}
        {children}
        <Footer />
      </div>
    </>
  );
}

export default HeaderContainer