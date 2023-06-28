import React from 'react'
import {Routes,Route} from 'react-router-dom' 
import Register from "./Pages/Authentication/Register";
import OtpVerification from "./Pages/Authentication/OtpVerification";
import Login from "./Pages/Authentication/Login";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import ChangePassword from "./Pages/Authentication/ChangePassword";
import Home from './Pages/Home';
import AboutUs from './Components/Common/AboutUs';

const Routing=()=> {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/otp-verification" element={<OtpVerification />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/change-password" element={<ChangePassword />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default Routing; 
