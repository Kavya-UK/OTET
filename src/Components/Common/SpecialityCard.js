import React from 'react'

export default function SpecialityCard({ specialityImage,title,info}) {
  return (
    <div className="flex  flex-col">
      <div>
        <img
          className="lg:h-[130px] lg:w-[130px] sm:h-[80px] sm:w-[80px]  h-[80px] w-[80px] "
          src={specialityImage}
          // src={require(`../../${specialityImage}`)}
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
      <p className="text-[10px] sm:text-[14px] xl:text-[18px] font-BasicSans text-eastBay">
        {info}
      </p>
    </div>
  );
}
