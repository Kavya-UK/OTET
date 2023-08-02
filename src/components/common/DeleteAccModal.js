import React from "react";

export default function PopupModal({ title, description, closeModal, className}) {
  return (
    <div className=" bg-[#00000096]  absolute h-[100vh] w-full z-40">
      <div className="h-[300px] z-50 w-[450px] opacity-100 rounded-[10px] border-[1px] bg-white absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <img
          onClick={closeModal}
          className=" h-[10px] w-[10px] absolute right-[12px] top-[12px] cursor-pointer"
          src={require("../../assets/images/login/Close.png")}
          alt="cancel"
        />
          <p className=" text-[25px] font-BasicSans text-codGray text-center tracking-[1px] mt-[80px] px-[30px]">
            {title}
          </p>
          <p className="text-[15px] font-BasicSansLight text-eastBay text-center tracking-[1px] px-[60px] ">
            {description}
          </p>

        <div className="flex justify-center items-center mt-[15px] ">
          <button
            onClick={closeModal}
            className=" font-BasicSansBold cursor-pointer bg-white h-[40px] w-[15%] text-shadeBlue rounded-[100px] justify-end items-center text-[15px] border-shadeBlue border-[1px] mr-[30px]"
          >
            No
          </button>
          <button className="font-BasicSansBold cursor-pointer bg-shadeBlue h-[40px] w-[15%] text-white rounded-[100px] justify-end items-center text-[15px]">
            YES
          </button>
        </div>
      </div>
    </div>
  );
}
