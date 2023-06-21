import React from 'react'
import InputText from "../Components/Common/InputText";
import InputSelect from '../Components/Common/InputSelect';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate=useNavigate();

  const optionListGender=["Female","Male"];

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 h-[100%] hidden lg:block">
        <img
          className="h-full object-cover hidden lg:block"
          src={require("../assets/images/login/Register.jpg")}
          alt="register"
        />
      </div>
      <div className="col-span-5 lg:col-span-3 relative">
        <div className="h-[148px] w-[148px] absolute right-[30px] top-[10px]  flex items-center justify-center">
          <img
            className="w-[80%]"
            src={require("../assets/images/icons/Logo.png")}
            alt="logo"
          />
        </div>
        <div className="px-[40px] sm:px-[100px] pt-[60px] text-left">
          <h1 className="text-[50px] font-BasicSans text-codGray mb-[20px] font-normal tracking-[4px]">
            Register
          </h1>
          <p className="font-BasicSans text-eastBayLight">
            Let's get you setup so that you can manage your profile and start
            booking appointments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[50px]">
            <div>
              <InputText
                type="text"
                label=" First Name"
                inputWidth={"w-[100%] sm:w-[85%]"}
                placeholder="Your first name"
              />
            </div>
            <div>
              <InputText
                label=" Last Name"
                inputWidth={"w-[100%] sm:w-[85%]"}
                type="text"
                placeholder="Your last name"
              />
            </div>
            <div>
              <InputSelect
                label=" Gender"
                inputWidth={"w-[100%] sm:w-[85%]"}
                optionList={optionListGender}
              />
            </div>
            <div>
              <InputText
                noIcon={true}
                type="date"
                label=" DOB"
                inputWidth={"w-[100%] sm:w-[85%]"}
              />
            </div>
            <div>
              <InputText
                type="phonenumber"
                placeholder={"XXX XXX XXXX"}
                noIcon={true}
                label=" Mobile Number"
                inputWidth={"w-[100%] sm:w-[85%]"}
              />
            </div>
            <div>
              <InputText
                type="email"
                placeholder={"email@domain.com"}
                label=" Email ID"
                inputWidth={"w-[100%] sm:w-[85%]"}
              />
            </div>
            <div>
              <InputText
                type="password"
                placeholder={"*********"}
                label=" Enter Password"
                inputWidth={"w-[100%] sm:w-[85%]"}
              />
            </div>
            <div>
              <InputText
                type="password"
                placeholder={"*********"}
                label=" Confirm Password"
                inputWidth={"w-[100%] sm:w-[85%]"}
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-shadeBlue h-[90px] flex justify-end items-center mt-[50px] ">
          <button
            className="bg-white h-[40px] w-[20%] text-codGrayLight rounded-[20px] mr-[30px] justify-end items-center font-BasicSans"
            onClick={() => navigate("/otp-verification")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
