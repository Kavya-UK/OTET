import React from 'react'
import InputOtpScreen from '../Components/Common/InputOtpScreen';
import {Link,useNavigate} from 'react-router-dom';

export default function OtpVerification() {
  const navigate=useNavigate();
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 h-[100%] ">
        <img
          className="h-full object-cover hidden lg:block"
          src={require("../assets/images/login/Register.jpg")}
          alt="authentication"
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
        <div className="px-[40px] sm:px-[100px] pt-[60px] text-left mt-[90px] min-h-[85vh]">
          <h1 className="text-[36px] sm:text-[48px] font-BasicSans text-codGray mb-[20px] font-normal tracking-[4px]">
            OTP Verification
          </h1>
          <p className="font-BasicSans text-eastBayLight">
            Enter 4 digit verification code sent to your mobile number +1 XXXXX
            XXX25
          </p>
          <div className="grid grid-cols-10 mt-[40px]">
            <div className="col-span-8 col-start-1">
              <div className="grid grid-cols-6 gap-2 mb-[30px]">
                <div>
                  <InputOtpScreen />
                </div>
                <div>
                  <InputOtpScreen />
                </div>
                <div>
                  <InputOtpScreen />
                </div>
                <div>
                  <InputOtpScreen />
                </div>
                <div>
                  <InputOtpScreen />
                </div>
                <div>
                  <InputOtpScreen />
                  <span className="relative left-[20px] block text-lightBlue font-BasicSans  mt-[10px]">
                    0:23
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="inline-block font-BasicSansLight text-[18px] sm:text-[22px] lg:text-[24px] text-shadesofGray font-light tracking-[0px]">
              Didn’t receive OTP?
            </p>
            <Link className="inline-block font-BasicSansLight opacity-50 underline text-shadeBlue text-[18px] sm:text-[22px] lg:text-[24px] ml-[10px] font-light">
              Resend
            </Link>
          </div>
        </div>

        <div className="w-full bg-shadeBlue h-[90px] flex justify-end items-center absolute bottom-0">
          <button onClick={()=>navigate("/login")}className="bg-white h-[40px] w-[20%] text-codGrayLight rounded-[20px] mr-[30px] justify-end items-center font-BasicSans">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
