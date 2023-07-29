import React, { useState } from 'react'
import DoctorFilter from '../components/doctor/DoctorFilter'
import DocAvailability from "../components/doctor/DocAvailability" 
import DoctorHeader from "../components/doctor/DoctorHeader";
import { useSelector } from 'react-redux';
export default function DoctorListing() {
   const docTotalCount = useSelector(
     (state) => state.featuredpractioner.totalCount
   );
   const isFeaturedDocLoading = useSelector(
     (state) => state.featuredpractioner.isFeaturedDocLoading
   );
  return (
    <>
      <DoctorHeader />
      <div className="pl-[30px] my-[40px]">
        {!isFeaturedDocLoading && <h1 className="text-codGray font-BasicSansBold text-[25px] tracking-[3px]">
          We have found {docTotalCount || 0 } Doctors for your search criteria.
        </h1>}
      </div>
      <div className="grid grid-cols-10">
        <div className="col-span-2 pl-[30px]">
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
