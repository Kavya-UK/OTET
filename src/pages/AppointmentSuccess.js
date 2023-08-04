import React from 'react'
import Header from '../components/common/Header';
import Appointment from '../components/patient/Appointment';
import Footer from '../components/common/Footer';
import HeaderContainer from './container/HeaderContainer';

export default function AppointmentSuccess() {
  return ( 
  <HeaderContainer showHomeHeader={true} setDropShadow={true}>
       <Appointment />
    </HeaderContainer>
   
  );
}
