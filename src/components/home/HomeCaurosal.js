import React from 'react'
import Carousel from "@itseasy21/react-elastic-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Loader from '../common/Loader';


export default function HomeCaurosal() {
    const navigate = useNavigate();

  const featuredDoc = useSelector(
    (state) => state.featuredpractioner.featuredDocs
  );
  return (
    <Carousel
      showArrows={false}
      // itemsToShow={1}
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <div direction="row">
            {pages.map((page) => {
              const isActivePage = activePage === page;
              return (
                <span
                  key={page}
                  className={` inline-block w-[15px] h-[15px] border-[2px] rounded-[50%] ml-[10px] ${
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
      {featuredDoc.length ? featuredDoc.map((list) => {
        return (
          <div
            key={list.doctor_name}
            className="grid grid-cols-3 gap-4"
            onClick={() => navigate(`/doctor-profile?doc_url=${list.seo_url}`)}
          >
            <div className="col-span-1">
              <img
                className="w-[130px] h-[130px] sm:w-[200px] sm:h-[200px]"
                src={require("../../assets/images/home/Doctor.jpg")}
                alt="doctor"
              />
            </div>
            <div className="col-span-2 mt-[0px] md:mt-[20px]">
              <h3 className=" font-HenrietteRegular font-bold text-[1.5rem] text-codGray">
                {list.doctor_name}
              </h3>
              <span className="font-HenrietteRegular font-bold text-[1rem] text-codGray inline-block pr-[10px] mt-[10px]">
                {list.medical_speciality[0]}
              </span>
              <span className="font-HenrietteRegular font-bold text-[1rem] text-codGray">
                {list.country[0]}
              </span>
              <p className="text-[13px] xl:text-[15px] font-BasicSans text-eastBay mt-[10px] w-[100%] sm:w-[80%] lg:w-[80%] overflow-hidden max-h-[70px] truncate-content-carousel ">
                {list.doctor_bio}
              </p>
            </div>
          </div>
        );
      }) : <Loader />}
    </Carousel>
  );
}
