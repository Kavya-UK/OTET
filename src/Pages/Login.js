import React from 'react'
import InputText from "../Components/Common/InputText"
import {Link, useNavigate} from 'react-router-dom'
import InputCheckbox from '../Components/Common/InputCheckbox';

export default function Login() {
  const navigate= useNavigate();

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 h-[100%] hidden lg:block">
        <img
          className="h-full object-cover hidden lg:block"
          src={require("../assets/images/login/Login.jpg")}
          alt="login"
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
        <div className="px-[40px] sm:px-[100px] pt-[30px] text-left mt-[60px] min-h-[85vh]">
          <h1 className="text-[50px] font-BasicSans text-codGray mb-[20px] font-normal tracking-[4px]">
            Login
          </h1>
          <p className="font-BasicSans text-eastBay">
            We care for your body.It’s the only place you have to live in.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-[20px]">
            <div>
              <InputText
                type="phonenumber"
                label="Mobile Number"
                inputWidth={"w-[100%] sm:w-[85%]"}
                placeholder="XXX XXX XXXX"
              />
            </div>
            <div>
              <InputText
                type="password"
                label=" Password"
                inputWidth={"w-[100%] sm:w-[85%]"}
                placeholder="********"
              />
            </div>
            <div className="w-full flex justify-end text-codGray sm:w-[85%]">
              <Link to="/forgot-password" className="text-[18px] font-BasicSans underline font-normal opacity-50" onClick={()=>navigate("/forgot-password")}>
                Forgot your password?
              </Link>
            </div>
            <div className="mt-[20px] flex gap-1">
              <InputCheckbox />
              <span className="inline-block text-lightGray font-BasicSans text-[20px] pl-[20px]">
                I have read the Privacy Policy and agree to the Terms of
                Service.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-shadeBlue h-[90px]  flex justify-between items-center ">
          <p className="pl-[90px] text-white font-BasicSansLight text-[24px] opacity-[50px] tracking-[0px]">
            Don’t have an account? Signup
          </p>
          <button className="bg-white h-[40px] w-[20%] text-codGrayLight font-BasicSansLight rounded-[20px] mr-[30px] justify-end items-center">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
