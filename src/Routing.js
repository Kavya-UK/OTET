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
import BrowseDoctors from "./components/home/BrowseDoctor";
import BookAppointment from './pages/BookAppointment';
import DoctorListing from "./pages/DoctorListing"
import DoctorsProfileContainer from "./pages/DoctorsProfile";
import ScheduleAppointmentForm from './components/appointments/ScheduleAppointment';
import SideBar from './components/common/SideBar';
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
      <Route
        exact
        path="/sidebar"
        element={<SideBar />}
      />
    </Routes>
  );
}

export default Routing; 
