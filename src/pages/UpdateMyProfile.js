import React from 'react'
import SideBar from '../components/common/SideBar';
import ProfileUpdate from '../components/patient/ProfileUpdate';
import SideBarContainer from './container/SideBarContainer';

export default function UpdateMyProfile() {
  return (
    <SideBarContainer
      childrenClass="w-full flex flex-col items-center h-[100vh] overflow-auto"
    >
      <h1 className=" font-BasicSans tracking-[3px] text-codGray text-[30px] my-[40px]">
        Update Profile
      </h1>
      <ProfileUpdate />
    </SideBarContainer>
    // <div className="grid grid-cols-12 h-[100vh] ">
    //   <div className="col-span-2 ">
    //     <SideBar />
    //   </div>
    //   <div className="col-span-10 flex flex-col items-center pl-[50px] pr-[80px]">

    //   </div>
    // </div>
  );
}
