import React from 'react'
import Carousel from "@itseasy21/react-elastic-carousel";

export default function HomeCaurosal() {
  return (
    <Carousel
      showArrows={false}
      itemsToShow={1}
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <div direction="row">
            {pages.map((page) => {
              const isActivePage = activePage === page;
              return (
                <span
                  key={page} className={` inline-block w-[15px] h-[15px] border-[2px] rounded-[50%] ml-[10px] ${
                    isActivePage ? "bg-shadeBlue border-shadeBlue " : ""
                  }`}
                  onClick={() => onClick(page)}
                ></span>
              );
            })}
          </div>
        );
      }}
    >
      <div className="grid grid-cols-3 gap-2 xl:ml-[60px]">
        <div className="col-span-1">
          <img
            className="w-[130px] h-[130px] sm:w-[200px] sm:h-[200px]"
            src={require("../../assets/images/home/Doctor.jpg")}
            alt="doctor"
          />
        </div>
        <div className="col-span-2">
          <h3 className="font-HenrietteBold text-[16px] sm:text-[26px] xl:text-[31px] text-codGray">
            Lindsay M.
          </h3>
          <span className="font-HenrietteBold text-[12px] sm:text-[16px] xl:text-[20px] text-codGray inline-block pr-[30px] mt-[10px]">
            Dentist
          </span>
          <span className="font-HenrietteBold text-[12px] sm:text-[16px] xl:text-[20px] text-codGray">
            New York, NY
          </span>
          <p className="text-[13px] xl:text-[15px] font-BasicSans text-eastBay mt-[10px] w-[100%] sm:w-[80%] lg:w-[50%]">
            Lindsay was raised in Atlanta Georgia. She graduated from the
            University of Texas where she earned her degree in
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 xl:ml-[60px]">
        <div className="col-span-1">
          <img
            className="w-[130px] h-[130px] sm:w-[200px] sm:h-[200px]"
            src={require("../../assets/images/home/Doctor.jpg")}
            alt="doctor"
          />
        </div>
        <div className="col-span-2">
          <h3 className="font-HenrietteBold text-[16px] sm:text-[26px] xl:text-[31px] text-codGray">
            Lindsay M.
          </h3>
          <span className="font-HenrietteBold text-[12px] sm:text-[16px] xl:text-[20px] text-codGray inline-block pr-[30px] mt-[10px]">
            Dentist
          </span>
          <span className="font-HenrietteBold text-[12px] sm:text-[16px] xl:text-[20px] text-codGray">
            New York, NY
          </span>
          <p className="text-[13px] xl:text-[15px] font-BasicSans text-eastBay mt-[10px] w-[100%] sm:w-[80%] lg:w-[50%]">
            Lindsay was raised in Atlanta Georgia. She graduated from the
            University of Texas where she earned her degree in
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 xl:ml-[60px]">
        <div className="col-span-1">
          <img
            className="w-[130px] h-[130px] sm:w-[200px] sm:h-[200px]"
            src={require("../../assets/images/home/Doctor.jpg")}
            alt="doctor"
          />
        </div>
        <div className="col-span-2">
          <h3 className="font-HenrietteBold text-[16px] sm:text-[26px] xl:text-[31px] text-codGray">
            Lindsay M.
          </h3>
          <span className="font-HenrietteBold text-[12px] sm:text-[16px] xl:text-[20px] text-codGray inline-block pr-[30px] mt-[10px]">
            Dentist
          </span>
          <span className="font-HenrietteBold text-[12px] sm:text-[16px] xl:text-[20px] text-codGray">
            New York, NY
          </span>
          <p className="text-[13px] xl:text-[15px] font-BasicSans text-eastBay mt-[10px] w-[100%] sm:w-[80%] lg:w-[50%]">
            Lindsay was raised in Atlanta Georgia. She graduated from the
            University of Texas where she earned her degree in
          </p>
        </div>
      </div>
    </Carousel>
  );
}