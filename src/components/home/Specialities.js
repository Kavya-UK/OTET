import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SpecialityCard from "../common/SpecialityCard"
import {useSelector} from "react-redux";
import Loader from '../common/Loader';

export default function Specialities() {
  const navigate=useNavigate();
const speciality = useSelector(
  (state) => state.speciality.featuredSpecialityList
);
const FeatureSpeciality=speciality.slice(0,4)

return (
  <div className="mt-[70px]">
    <h1 className="text-[30px] sm:text-[46px] xl:text-[42px] font-BasicSans font-bold md:leading-[70px] text-codGray tracking-[10px] text-center">
      Holistic fields
    </h1>
    <p className="text-[24px] lg:text-[33px] font-BasicSans text-codGray tracking-[5.94px] font-bold text-center mt-[20px]">
      15 + Specialities
    </p>
    <p
      className="text-mustardYellow text-[18px] sm:text-[15px] lg:text-[20px] cursor-pointer font-BasicSans tracking-[4px] flex justify-end items-end mr-[30px]"
      onClick={() => navigate("/all-speciality")}
    >
      See More
    </p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-[70px] px-[40px] sm:px-[70px] cursor-pointer" >
      {FeatureSpeciality.length ? (
        FeatureSpeciality.map((items) => {
          return (
            <SpecialityCard
              key={items.id}
              id={items.id}
              image={items.image}
              title={items.medical_speciality_name}
              info={items.description}
            />
          );
        })
      ) : (
        <div className="col-span-2 lg:col-span-4 flex items-center">
          <Loader />
        </div>
      )}
    </div>
  </div>
);
}
