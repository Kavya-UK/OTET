import React from 'react'

export default function SideBar() {
  return (
    <div className="w-[250px] h-[100vh] bg-shadeBlue relative shadow-3xl">
      <div className="flex justify-center items-center pt-[15px]">
        <img
          className="w-[140px] h-[140px]"
          src={require("../../assets/images/profile/Logo.png")}
          alt="logo"
        />
      </div>
      <div className="absolute bottom-8 w-full">
        <p className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px]">
          My Profile
        </p>
        <p className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px]">
          My Appointments
        </p>
        <p className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px]">
          Change Password
        </p>
        <p className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px]">
          Delete Account
        </p>
        <p className="text-white font-BasicSans text-[15px] py-[5px] hover:bg-white hover:text-shadeBlue pl-[30px]">
          Sign out
        </p>
      </div>
    </div>
  );
}
