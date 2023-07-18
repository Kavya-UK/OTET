import React, { useEffect, useState } from "react";
import { fetchDiseases } from "../../Redux/thunk/diseases.thunk";
import { useDispatch, useSelector } from "react-redux";
export default function CommonDiseases() {
  const cond1 = useSelector((state) => state.diseases.diseases[23]);
  const cond2 = useSelector((state) => state.diseases.diseases[27]);
  const cond3 = useSelector((state) => state.diseases.diseases[32]);
  const cond4 = useSelector((state) => state.diseases.diseases[66]);
  const [diseasesDropdown, setDiseasesDropdown] = useState({
    fatigue: false,
    bp: false,
    diabetes: false,
    headaches: false,
  });

  const handleOnClick = (name) => {
    const disObj = { ...diseasesDropdown };

    Object.keys(diseasesDropdown).map((key) => {
      if (key === name) {
        disObj[key] = !disObj[key];
      } else {
        disObj[key] = false;
      }
    });
    setDiseasesDropdown(disObj);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiseases({ paginate: 4, condition_id: 23 }));
    dispatch(fetchDiseases({ paginate: 4, condition_id: 32 }));
    dispatch(fetchDiseases({ paginate: 4, condition_id: 27 }));
    dispatch(fetchDiseases({ paginate: 4, condition_id: 66 }));
  }, []);
  return (
    <div className="h-[300px] w-full bg-cyanBlue border-[1px] border-Grayish">
      <h1 className="text-codGray text-[30px] sm:text-[36px] lg:text-[44px] xl:text-[42px] font-BasicSans font-bold tracking-[3px] leading-[70px] sm:tracking-[9.72px] mt-[50px] ml-[15px] sm:ml-[38px] text-center sm:text-left">
        Most common health concerns
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-[50px]">
        <div className="col-span-1 flex justify-around ">
          <div class="mx-[10px] sm:mx-[45px] relative w-full text-left text-sm text-slate-700 focus:outline-none font-semibold rounded-none px-2 py-4">
            <div
              onClick={() => handleOnClick("diabetes")}
              class="flex w-full pb-6 md:pb-8 border-b border-gray-400 items-center justify-between md:h-[4rem]"
            >
              <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
                Diabetes
              </span>
              <img
                className={`transition-all duration-[0.5s] ease-[ease] h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px] ${
                  diseasesDropdown.diabetes ? " rotate-180 " : " "
                }`}
                src={require("../../assets/images/home/BlackDropdown.png")}
                alt="homedropdown"
              />
            </div>
            {diseasesDropdown.diabetes && (
              <div class="absolute z-10 bg-white w-full top-[50px] md:top-[64px] px-4 py-3 text-size-5 md:text-lg text-gray rounded-lg">
                {cond1.map((dis) => {
                  return (
                    <h4 class="hover:bg-cyanBlue mt-1 text-grey tracking-[0.1rem] cursor-pointer">
                      {dis.speciality_name}
                    </h4>
                  );
                })}
              </div>
            )}
          </div>
          {/* <div className="w-full flex mx-[10px] sm:mx-[45px] border-b-[2px] border-darkGrayish justify-between pb-[15px] lg:pb-[30px]">
            <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
              Fatigue
            </span>
            <img
              className={`transition-all duration-[0.5s] ease-[ease] h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px] ${diseasesDropdown.diabetes ? " rotate-180 " : " "}`}
              src={require("../../assets/images/home/BlackDropdown.png")}
              alt="homedropdown"
            />
          </div> */}
        </div>
        <div className="col-span-1 flex justify-around ">
          <div class="mx-[10px] sm:mx-[45px] relative w-full text-left text-sm text-slate-700 focus:outline-none font-semibold rounded-none px-2 py-4">
            <div
              onClick={() => handleOnClick("fatigue")}
              class="flex w-full pb-6 md:pb-8 border-b border-gray-400 items-center justify-between md:h-[4rem]"
            >
              <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
                Fatigue
                <br />
                /Low Energy
              </span>
              <img
                className={`transition-all duration-[0.5s] ease-[ease] h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px] ${
                  diseasesDropdown.fatigue ? " rotate-180 " : " "
                }`}
                src={require("../../assets/images/home/BlackDropdown.png")}
                alt="homedropdown"
              />
            </div>
            {diseasesDropdown.fatigue && (
              <div class="absolute z-10 bg-white w-full top-[50px] md:top-[64px] px-4 py-3 text-size-5 md:text-lg text-gray rounded-lg">
                {cond2.map((dis) => {
                  return (
                    <h4 class="hover:bg-cyanBlue mt-1 text-grey tracking-[0.1rem] cursor-pointer">
                      {dis.speciality_name}
                    </h4>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1 flex justify-around mt-[20px] sm:mt-[0px]">
          <div class="mx-[10px] sm:mx-[45px]  relative w-full text-left text-sm text-slate-700 focus:outline-none font-semibold rounded-none px-2 py-4">
            <div
              onClick={() => handleOnClick("headaches")}
              class="flex w-full pb-6 md:pb-8 border-b border-gray-400 items-center justify-between md:h-[4rem]"
            >
              <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
                Headaches
              </span>
              <img
                className={`transition-all duration-[0.5s] ease-[ease] h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px] ${
                  diseasesDropdown.headaches ? " rotate-180 " : " "
                }`}
                src={require("../../assets/images/home/BlackDropdown.png")}
                alt="homedropdown"
              />
            </div>
            {diseasesDropdown.headaches && (
              <div class="absolute z-10 bg-white w-full top-[50px] md:top-[64px] px-4 py-3 text-size-5 md:text-lg text-gray rounded-lg">
                {cond3.map((dis) => {
                  return (
                    <h4 class="hover:bg-cyanBlue mt-1 text-grey tracking-[0.1rem] cursor-pointer">
                      {dis.speciality_name}
                    </h4>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1 flex justify-around mt-[20px] sm:mt-[0px]">
          <div class="mx-[10px] sm:mx-[45px] relative w-full text-left text-sm text-slate-700 focus:outline-none font-semibold rounded-none px-2 py-4">
            <div
              onClick={() => handleOnClick("bp")}
              class="flex w-full pb-6 md:pb-8 border-b border-gray-400 items-center justify-between md:h-[4rem]"
            >
              <span className="inline-block text-[12px] lg:text-[14px] xl:text-[20px] font-BasicSansBold text-codGray tracking-[4.5px] font-bold whitespace-nowrap truncate">
                High blood pressure
                <br />
                (Hypertension)
              </span>
              <img
                className={`transition-all duration-[0.5s] ease-[ease] h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px] ${
                  diseasesDropdown.bp ? " rotate-180 " : " "
                }`}
                src={require("../../assets/images/home/BlackDropdown.png")}
                alt="homedropdown"
              />
            </div>
            {diseasesDropdown.bp && (
              <div class="absolute z-10 bg-white w-full top-[50px] md:top-[64px] px-4 py-3 text-size-5 md:text-lg text-gray rounded-lg">
                {cond4.map((dis) => {
                  return (
                    <h4 class="hover:bg-cyanBlue mt-1 text-grey tracking-[0.1rem] cursor-pointer">
                      {dis.speciality_name}
                    </h4>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
