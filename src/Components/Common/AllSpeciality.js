import React, { useEffect } from "react";
import Header from './Header'
import SpecialityCard from './SpecialityCard';
import { fetchSpeciality } from '../../Redux/thunk/speciality.thunk';
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";


export default function AllSpeciality() {
  const speciality=useSelector((state)=>state.speciality.specialityList);
  const dispatch=useDispatch();
   useEffect(() => {
     dispatch(fetchSpeciality());
   },[]);
  return (
    <>
      <Header setDropShadow={true} />
      <div className="w-full h-[800px] bg-no-repeat pt-[200px]">
       
        <div className="text-center px-[90px] relative top-[-70px]">
          <h1 className="text-codGray text-[40px] font-BasicSansBold tracking-[9px] font-semibold ">
            Speciality
          </h1>
          <p className="text-[18px] font-BasicSans text-eastBay ">
            Every medical specialist shares one common goal: to help patients
            get healthy or stay healthy. But each one has very specific skills
            and competencies that make them an integral member of the medical
            field. Browse through each specialty and select as per your need.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 my-[40px] px-[40px] sm:px-[70px]">
          {speciality.map((items) => {
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
        <Footer />
      </div>
    </>
  );
}
