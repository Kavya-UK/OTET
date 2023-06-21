import React from 'react'
import {Routes,Route} from 'react-router-dom' 
import Register from "./Pages/Register";
import OtpVerification from './Pages/OtpVerification';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import ChangePassword from './Pages/ChangePassword';


export default function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/otp-verification" element={<OtpVerification />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
}
