import React, { useEffect, useState } from "react";
import { fetchDoctorFilter } from "../redux/thunk/doctorfilter.thunk";
import { useDispatch, useSelector } from "react-redux";
import DoctorFilter from "../components/doctor/DoctorFilter";
import DocAvailability from "../components/doctor/DocAvailability";
import DoctorHeader from "../components/doctor/DoctorHeader";
import Loader from "../components/common/Loader";
import Footer from "../components/common/Footer";
export default function DoctorListing() {
  const dispatch = useDispatch();

  const docTotalCount = useSelector(
    (state) => state.featuredpractioner.totalCount
  );
  const isFeaturedDocLoading = useSelector(
    (state) => state.featuredpractioner.isFeaturedDocLoading
  );
  const isFilterLoading = useSelector(
    (state) => state.doctorfilter.isFilterLoading
  );
  const [showFilter, setShowFilter] = useState(false)
  useEffect(() => {
    dispatch(fetchDoctorFilter());
  }, []);
  return (
    <>
      <DoctorHeader />
      <div className="pl-[30px] my-[40px]">
        <h1 className="text-codGray font-BasicSansBold text-[18px] md:text-[24px] tracking-[3px]">
          {!isFeaturedDocLoading ? (
            `We have found ${
              docTotalCount || 0
            } Doctors for your search criteria.`
          ) : (
            <div>&nbsp;</div>
          )}
        </h1>
      </div>
      <div className="pl-[30px] my-[40px]">
        <span
          className="md:hidden inline-block px-[20px] p-[8px] border-2 text-[14px] rounded-[10px] cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter
        </span>
      </div>
      <div className="grid grid-cols-10 ">
        {!isFilterLoading ? (
          <>
            <div
              className={`block md:hidden px-[20px] fixed min-h-[100vh] w-[100vw] overflow-y-scroll inset-0 z-50 bg-white   pb-[50px]  ${
                showFilter
                  ? "   translate-x-0 transition-all duration-[0.3s] ease-[linear]"
                  : "  translate-x-[100%] "
              }`}
            >
              <div className="flex justify-between border-b-2">
                <h1 className=" font-BasicSansBold text-[20px] font-bold tracking-[2px] pl-[10px] py-[20px] ">
                  Filters
                </h1>
                <span
                  onClick={() => setShowFilter(false)}
                  className="h-[30px] w-[30px] mt-[20px] flex items-center justify-center p-[10px] bg-gray-300 rounded-[50%] cursor-pointer"
                >
                  X
                </span>
              </div>
              <DoctorFilter border={false} setShowFilter={setShowFilter} />
            </div>
            <div className="hidden md:block col-span-3 lg:col-span-2 pl-[30px]">
              <h1 className=" font-BasicSansBold text-[20px] font-bold tracking-[2px] pl-[10px]">
                Filters
              </h1>
              <DoctorFilter border={true} setShowFilter={setShowFilter} />
            </div>
            <div className="col-span-10 md:col-span-7 lg:col-span-8">
              <DocAvailability />
            </div>
          </>
        ) : (
          <div className="col-span-10">
            <Loader />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
