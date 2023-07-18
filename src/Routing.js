import React from 'react'
import {Routes,Route} from 'react-router-dom' 
import Register from "./Pages/Authentication/Register";
import OtpVerification from "./Pages/Authentication/OtpVerification";
import Login from "./Pages/Authentication/Login";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import ChangePassword from "./Pages/Authentication/ChangePassword";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import AllSpeciality from './Pages/AllSpeciality';
import BrowseDoctors from './Components/home/BrowseDoctor';
import BookAppointment from './Pages/BookAppointment';
import DoctorListing from "./Pages/DoctorListing"
import DoctorsProfileContainer from "./Pages/DoctorsProfile";
import ScheduleAppointmentForm from './Components/appointments/ScheduleAppointment';
const Routing=()=> {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/otp-verification" element={<OtpVerification />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/change-password" element={<ChangePassword />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/all-speciality" element={<AllSpeciality />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/browse-doctors" element={<BrowseDoctors />} />
      <Route exact path="/book-appointment" element={<BookAppointment />} />
      <Route exact path="/doctor-listing" element={<DoctorListing />} />
      <Route
        exact
        path="/doctor-profile"
        element={<DoctorsProfileContainer />}
      />
      <Route
        exact
        path="/schedule-appointment"
        element={<ScheduleAppointmentForm />}
      />
    </Routes>
  );
}

export default Routing; 
