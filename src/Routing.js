import React from 'react'
import {Routes,Route} from 'react-router-dom' 
import Register from "./pages/Authentication/Register";
import OtpVerification from "./pages/Authentication/OtpVerification";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ChangePassword from "./pages/Authentication/ChangePassword";
import Home from "./pages/Home"
import AboutUs from './pages/AboutUs';
import AllSpeciality from './pages/AllSpeciality';
import BookAppointment from './pages/BookAppointment';
import DoctorListing from "./pages/DoctorListing"
import DoctorsProfileContainer from "./pages/DoctorsProfile";
import ScheduleAppointmentForm from './components/appointments/ScheduleAppointment';
import MyProfile from './pages/MyProfile';
import UpdateMyProfile from './pages/UpdateMyProfile';
import NoConnectivity from './pages/NoConnectivity';
import SiteUnderConstruction from './pages/SiteUnderConstruction';
import AppointmentSuccess from "./pages/AppointmentSuccess";
import MyAppointmentList from './pages/MyAppointmentList';
import Contact from './pages/Contact';
const Routing=()=> {
  return (
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/otp-verification" element={<OtpVerification />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/change-password" element={<ChangePassword />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/all-speciality" element={<AllSpeciality />} />
      <Route exact path="/about-us" element={<AboutUs />} />
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
      <Route exact path="/my-profile" element={<MyProfile />} />
      <Route exact path="/myprofile-edit" element={<UpdateMyProfile />} />
      <Route exact path="/no-internet" element={<NoConnectivity />} />
      <Route
        exact
        path="/site-underconstruction"
        element={<SiteUnderConstruction />}
      />
      <Route
        exact
        path="/appointment-success"
        element={<AppointmentSuccess />}
      />
      <Route exact path="/my-appointments" element={<MyAppointmentList />} />
      <Route exact path="/contact-us" element={<Contact />} />
    </Routes>
  );
}

export default Routing; 
