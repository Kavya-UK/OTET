import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate=useNavigate()
  return (
    <>
      <div className="h-[500px] w-[90%] md:w-[500px] rounded-[20px] border-[1px] border-shadeBlue py-[30px] px-[20px]">
        <p className=" font-HenrietteRegular text-[16px] md:text-[20px] font-bold text-center mb-[40px]">
          Alexander O. Babazadeh
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 border-[2px] border-shadeBlue rounded-[5px]">
          <div className="border-r-2 md:border-b-0 border-b-2 border-shadeBlue flex flex-col items-center py-[10px]">
            <img
              className="w-[25px] h-[25px] "
              src={require("../../assets/images/profile/Female.png")}
              alt="gender"
            />
            <p className=" font-BasicSansBold text-[10px] tracking-[1.2px] font-bold mt-[5px]">
              FEMALE
            </p>
          </div>
          <div className="md:border-r-2 md:border-b-0 border-b-2 border-shadeBlue flex flex-col items-center py-[10px]">
            <p className=" font-BasicSansLight text-[20px]">25</p>
            <p className="font-BasicSansBold text-[10px] tracking-[1.2px] font-bold ">
              YEARS OLD
            </p>
          </div>
          <div className="border-r-2 border-shadeBlue flex flex-col items-center py-[10px]">
            <img
              className="w-[25px] h-[25px]"
              src={require("../../assets/images/profile/Number.png")}
              alt="number"
            />
            <p className=" font-BasicSansBold text-[10px] tracking-[1.2px] font-bold mt-[5px]">
              +1 789955412
            </p>
          </div>
          <div className=" border-shadeBlue flex flex-col items-center py-[10px]">
            <img
              className="w-[25px] h-[25px]"
              src={require("../../assets/images/profile/Mail.png")}
              alt="mail"
            />
            <p className=" font-BasicSansBold text-[10px] tracking-[1.2px] font-bold mt-[5px]">
              xyz@email.com
            </p>
          </div>
        </div>
        <div className=" flex gap-4 mt-[60px] sm:pl-[30px] ">
          <img
            className="w-[40px] h-[40px] md:w-[64px] md:h-[64px]  inline-block"
            src={require("../../assets/images/profile/Address.png")}
            alt="location"
          />
          <span className=" font-BasicSansLight text-[12px] sm:text-[15px] text-graycolor inline-block">
            Address
          </span>
        </div>
        <div className=" flex gap-4 sm:pl-[30px] mt-[20px]">
          <img
            className="w-[40px] h-[40px] md:w-[64px] md:h-[64px]  inline-block"
            src={require("../../assets/images/profile/Insurance.png")}
            alt="insurance"
          />
          <div className="">
            <span className=" font-BasicSansLight text-[12px] sm:text-[15px] text-graycolor inline-block ">
              Insurance Details
            </span>
            <p className="mt-[10px] font-BasicSans text-[12px] sm:text-[15px] text-codGray">
              UHS, PN : 763529
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[500px] inline-block relative">
        <span className=" inline-block font-BasicSansBold text-[12px] sm:text-[15px] md:absolute left-[-30px] top-[20px]">
          Note:
        </span>
        <p className=" font-BasicSans text-[12px] sm:text-[15px] text-labelColor pl-[20px] md:mt-[20px]">
          We attach great importance to protecting your private sphere and
          ensuring that your data are secure. We collect, process and store
          personal data (including IP addresses) only as permitted by law or if
          you have given your consent.
        </p>
        <div className="text-center mt-[30px]">
          <button
            className="text-white font-BasicSansBold text-[12px] sm:text-[15px] tracking-[2px] bg-shadeBlue rounded-[100px] py-[12px] mb-[20px] px-[20px]"
            onClick={() => navigate("/myprofile-edit")}
          >
            EDIT PROFILE
          </button>
        </div>
      </div>
    </>
  );
}
