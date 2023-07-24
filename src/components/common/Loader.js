import React from 'react'

export default function Loader() {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <img
        className="h-[8rem] md:h-[10rem] tall:h-[13rem] lg:h-[15rem] cursor-pointer my-img"
        
        alt="Logo"
        src={require("../../assets/images/home/Logo.png")}
      />
    </div>
  );
}
