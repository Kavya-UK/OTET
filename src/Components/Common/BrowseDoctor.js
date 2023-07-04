import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { fetchBrowseDoctors } from "../../Redux/thunk/browsedoctor.thunk";

export default function BrowseDoctors({setBrowseFlag}) {
  const dispatch = useDispatch();
  const browsedoctors = useSelector((state) => state.browsedocs.docList);
  useEffect(() => {
    dispatch(fetchBrowseDoctors());
  }, []);

  const onModalClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
  }
  
  return (
    <div
      onClick={() => setBrowseFlag(false)}
      className="bg-gray-600 bg-opacity-50  h-[100vh] w-full flex justify-center z-50 fixed"
    >
      <div
        onClick={onModalClick}
        className="w-[80%] h-[300px] mt-[20px] bg-white border-[1px] pb-[20px] rounded-[18px] relative top-[10%]"
      >
        <div className="bg-cyanBlue px-[15px] py-[15px] rounded-[18px] flex justify-between">
          <h3 className=" font-BasicSans text-[28px] text-codGray tracking-[2px] font-bold">
            Browse Doctors
          </h3>
          <RxCross2
            onClick={() => setBrowseFlag(false)}
            className="text-[30px] relative top-[6px]"
          />
        </div>
        <div className="grid grid-cols-4 mt-[40px]">
          {browsedoctors.map((list) => {
            return (
              <div className="col-span-1 bg-cyanBlue rounded-[18px] mx-[20px] ">
                <span className="inline-block py-[15px] px-[20px] text-shadeBlue text-[20px]">
                  <img
                    className="w-[30px] h-[30px] inline-block mr-[10px]"
                    src={require("../../assets/images/home/CityLocation.png")}
                    alt="city"
                  />
                  {list.city_name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
