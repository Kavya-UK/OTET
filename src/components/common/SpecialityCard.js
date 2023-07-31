import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SpecialityCard({ id, image, title, info }) {
  const navigate=useNavigate()
 
  const handleSearch = () => {
    let url = "/doctor-listing?";
      url = `${url}specialty=${title}_${id}`;
      navigate(url);
    
  };
  return (
    <div
      className="flex flex-col py-[30px] px-[20px] hover:shadow-[0_0_8px_5px_#E2F6F3] rounded-[20px] "
      onClick={() => handleSearch()}
    >
      <div>
        <img
          className="lg:h-[130px] lg:w-[130px] sm:h-[80px] sm:w-[80px]  h-[80px] w-[80px] "
          src={image}
          alt="specialityimage"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = require("../../assets/images/Practice.png");
          }}
        />
      </div>
      <h3 className="text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[24px] font-BasicSansBold text-codGray font-bold tracking-[5.94px] mt-[20px] min-h-[40px] sm:min-h-[50px] lg:min-h-[110px]">
        {title}
      </h3>
      <p className=" hidden md:block md:text-[1rem] lg:text-[1.18rem] h-full w-full leading-7 font-BasicSans text-eastBay md:pr-5">
        {info}
      </p>
    </div>
  );
}
