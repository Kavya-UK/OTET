import React from 'react'
import SideBar from '../components/common/SideBar'
import ProfileInfo from '../components/patient/ProfileInfo';

export default function PatientProfile() {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-2 ">
        <SideBar />
      </div>
      <div className="col-span-10 flex flex-col items-center h-[100vh] overflow-auto">
        <h1 className=" font-BasicSans tracking-[3px] text-codGray text-[30px] my-[40px]">
          Profile Details
        </h1>
        <ProfileInfo />
        
      </div>
    </div>
  );
}
