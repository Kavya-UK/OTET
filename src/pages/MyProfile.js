import React from 'react'
import SideBar from '../components/common/SideBar'
import Profile from "../components/patient/Profile";
import SideBarContainer from './container/SideBarContainer';

export default function MyProfile() {

  return (
    <>
      <SideBarContainer
        showHamburger={true}
        childrenClass="w-full flex flex-col items-center h-[100vh] overflow-auto"
      >
        <h1 className=" font-BasicSans tracking-[3px] text-codGray text-[24px] sm:text-[30px] my-[20px]">
          Profile Details
        </h1>
        <Profile />
      </SideBarContainer>
    </>
  );
}
