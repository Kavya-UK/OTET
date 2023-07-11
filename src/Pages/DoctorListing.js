import React from 'react'
import DoctorFilter from '../Components/Common/DoctorFilter'
import DocAvailability from "../Components/Common/DocAvailability" 
import DoctorHeader from "../Components/Common/DoctorHeader";
export default function DoctorListing() {
  return (
    <>
      <DoctorHeader />
      <div className="pl-[10px] mb-[20px]">
        <h1 className="text-codGray font-BasicSansBold text-[25px] tracking-[3px]">
          We have found 75 Doctors for your search criteria.
        </h1>
      </div>
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <h1 className=" font-BasicSansBold text-[20px] font-bold tracking-[2px] pl-[10px]">
            Filters
          </h1>
          <DoctorFilter />
        </div>
        <div className="col-span-8">
          <DocAvailability />
        </div>
      </div>
    </>
  );
}
