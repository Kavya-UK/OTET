import React from 'react'

export default function NoDoctorFound() {
  return (
    <div className="relative h-full w-full mt-[100px]">
      <div className="flex flex-col justify-center items-center ">
        <img
          className="w-[350px] h-[550px]"
          src={require("../assets/images/home/zerodoctor.png")}
          alt="nodoctor"
        />
        <div>
          <h2 className="text-[25px] font-BasicSansBold tracking-[3px] text-headingShade">
            Sorry! No Doctors Found
          </h2>
          </div>
      </div>
    </div>
  );
}
