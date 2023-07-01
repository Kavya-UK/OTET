import React from 'react'
import SpecialityCard from "../Common/SpecialityCard"
import {useSelector} from "react-redux";

export default function Specialities() {
const speciality = useSelector(
  (state) => state.speciality.featuredSpecialityList
);
const FeatureSpeciality=speciality.slice(0,4)
return (
  <div className="mt-[50px]">
    <h1 className="text-[30px] sm:text-[46px] lg:text-[54px] font-BasicSansBold text-codGray tracking-[9.72px] font-bold text-center">
      Holistic fields
    </h1>
    <p className="text-[24px] lg:text-[33px] font-BasicSansBold text-codGray tracking-[5.94px] font-bold text-center mt-[20px]">
      15 + Specialities
    </p>
    <p className="text-mustardYellow text-[18px] sm:text-[24px] lg:text-[33px] font-BasicSans tracking-[5.94px] flex justify-end items-end mr-[30px]">
      See More
    </p>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-[90px] px-[40px] sm:px-[70px]">
      {FeatureSpeciality.map((items) => {
        return (
          <SpecialityCard
            key={items.id}
            image={items.image}
            title={items.medical_speciality_name}
            info={items.description}
          />
        );
      })}
    </div>
  </div>
);
}
