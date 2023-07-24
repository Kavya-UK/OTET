import React from 'react'
import SideBar from '../components/common/SideBar';

export default function NoAppointments() {
  return (
    <div className="grid grid-cols-12 h-[100vh]">
      <div className="col-span-2 ">
        <SideBar />
      </div>
      <div className="col-span-10 flex flex-col justify-center items-center h-full">
        <img
          className="h-[300px] w-[350px]"
          src={require("../assets/images/home/noappointment.png")}
          alt="no-appointment"
        />
        <p className="text-headingShade font-BasicSansBold text-[20px] tracking-[2px] mt-[50px]">Sorry! No appointments found</p>
      </div>
    </div>
  );
}
