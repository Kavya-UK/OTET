import React from 'react'
import Header from '../components/common/Header';
import Appointment from '../components/patient/Appointment';
import Footer from '../components/common/Footer';

export default function AppointmentSuccess() {
  return (
    <>
      <Header setDropShadow={true} />
      <Appointment />
      <Footer/>
    </>
  );
}
