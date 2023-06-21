import React from 'react'
import InputText from '../Components/Common/InputText';

export default function ChangePassword() {
  return (
    <>
     <div className="grid grid-cols-5">
        <div className="col-span-2">
          <img
            className="h-full object-cover hidden lg:block"
            src={require("../assets/images/login/ChangePassword.jpg")}
            alt="change-password"
          />
        </div>
        <div className="col-span-5 lg:col-span-3 relative">
          <div className="h-[148px] w-[148px] absolute right-[30px] top-[10px] flex items-center justify-center">
            <img
              className="w-[80%]"
              src={require("../assets/images/icons/Logo.png")}
              alt="logo"
            />
          </div>

          <div className="min-h-[75vh]">
            <div className="px-[40px] sm:px-[100px] pt-[60px] text-left mt-[65px]">
              <h1 className="text-[40px] font-BasicSans text-codGray mb-[20px] font-normal tracking-[4px]">
                Change password?
              </h1>
            </div>
            <div className="px-[40px] sm:px-[100px] pt-[10px] mt-[10px]">
              <InputText
                type="password"
                label="Old Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[85%]"}
                customLabelStyle={"inline-block mb-[8px]"}
              />
            </div>
            <div className="px-[40px] sm:px-[100px] pt-[20px] ">
              <InputText
                type="password"
                label="New Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[85%]"}
                customLabelStyle={"inline-block mb-[8px]"}
              />
            </div>
            <div className="px-[40px] sm:px-[100px] pt-[20px] mt-[10px]">
              <InputText
                type="password"
                label="Confirm Password"
                placeholder={"******"}
                inputWidth={"w-[100%] sm:w-[85%]"}
                customLabelStyle={"inline-block mb-[8px]"}
              />
            </div>
          </div>
          <div className="w-full bg-shadeBlue h-[90px] flex justify-end items-center mt-[50px] ">
            <button className="bg-white h-[40px] w-[20%] text-codGrayLight rounded-[20px] mr-[30px] justify-end items-center font-BasicSans">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
