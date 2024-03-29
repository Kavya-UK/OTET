import React, { useEffect } from "react";
import HomeCaurosal from "./HomeCaurosal";
import { fetchFeaturedDoctors } from "../../redux/thunk/featuredDoctor.thunk";
import { useDispatch } from "react-redux";
export default function FeaturedPractioners() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchFeaturedDoctors({paginate:3}));
  }, []);
  return (
    <div className="border-b-[2px] mt-[50px] mb-[30px] pb-[80px]">
      <div className="grid grid-cols-2 gap-3 mt-[10px]  px-[15px] sm:px-[40px]">
        <div className="col-span-2 lg:col-span-1 flex  flex-col ">
          <h1 className="text-[30px] sm:text-[38px] xl:text-[42px] font-BasicSans font-semibold text-codGray leading-[70px] tracking-[8.1px] mb-[40px] text-center lg:text-left">
            Featured Holistic <br className="hidden lg:block" />
            Practitioners
          </h1>
          <HomeCaurosal />
        </div>
        <div className="col-span-2 lg:col-span-1 mt-[20px] flex items-center flex-col ">
          <img
            className="w-[80%] lg:w-[90%]"
            src={require("../../assets/images/home/Tree.png")}
            alt="tree"
          />
        </div>
      </div>
    </div>
  );
}
