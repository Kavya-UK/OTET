import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AuthenticationModal({ title, description,closeModal }) {
  const navigate=useNavigate();
  return (
    <div className=" bg-[#00000096]  absolute h-[100vh] w-full z-40">
      <div className="h-[300px] z-50 w-[500px] opacity-100 rounded-[10px] border-[1px] bg-white absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <img
          onClick={closeModal}
          className=" h-[10px] w-[10px] absolute right-[12px] top-[12px] cursor-pointer"
          src={require("../../assets/images/login/Close.png")}
          alt="cancel"
        />
        <img
          className="h-[100px] w-[130px] relative left-[50%] top-[10%] -translate-x-[50%]"
          src={require("../../assets/images/icons/UnAuthenticated.png")}
          alt="modal"
        />
        <p className="font-bold text-[25px] font-BasicSansBold text-shadeBlue text-center tracking-[3.8px] mt-[30px]">
          {title}
        </p>
        <p className="text-[15px] font-BasicSansLight text-eastBay text-center ">
          {description}
        </p>
        <div className="flex justify-center items-center mt-[20px] ">
          <button className="bg-shadeBlue h-[30px] w-[30%] text-white rounded-[100px] justify-end items-center font-BasicSans text-[15px]" onClick={()=>navigate("/login")}>
            Login
          </button>
        </div>
        <div className="flex justify-center items-center  mt-[10px]">
          <button className="bg-white h-[30px] w-[30%] text-shadeBlue rounded-[100px] justify-end items-center font-BasicSans text-[15px] border-shadeBlue border-[1px]">
            Back to browse
          </button>
        </div>
      </div>
    </div>
  );
}
