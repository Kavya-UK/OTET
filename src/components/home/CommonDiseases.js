import React, { useEffect, useState } from "react";
import { fetchDiseases } from "../../redux/thunk/diseases.thunk";
import { fetchFeaturedConditions } from "../../redux/thunk/conditions.thunk";
import { useDispatch, useSelector } from "react-redux";
import BufferLoader from "../common/Bufferloader";
import { useNavigate } from "react-router-dom";

export default function CommonDiseases() {
 const navigate=useNavigate();
  const featuredConditionsList = useSelector(
    (state) => state.conditions.featuredConditionsList
  );
  const condition = useSelector((state) => state.diseases.diseases);

  const [diseasesDropdown, setDiseasesDropdown] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const handleOnClick = (ind, id) => {
    const disObj = { ...diseasesDropdown };
    Object.keys(diseasesDropdown).map((key) => {
      if (key == ind) {
        disObj[key] = !disObj[key];
      } else {
        disObj[key] = false;
      }
    });
    dispatch(fetchDiseases({ paginate: 4, condition_id: id }));
    setDiseasesDropdown(disObj);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeaturedConditions());
    
  }, []);

  const handleSearch = (id,title) => {
    let url = "/doctor-listing?";
    url = `${url}specialty=${title}_${id}`;
    navigate(url);
  };
  
  return (
    <div className="md:h-[300px] w-full bg-cyanBlue border-[1px] border-Grayish">
      <h1 className="text-codGray text-[18px] sm:text-[24px] lg:text-[36px] xl:text-[48px] font-BasicSans font-bold tracking-[3px] leading-[70px] sm:tracking-[9.72px] mt-[30px] md:mt-[50px] ml-[15px] sm:ml-[38px] text-center sm:text-left">
        Most common health concerns
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-[30px] md:mt-[50px]">
        {featuredConditionsList.map((cond, ind) => {
          return (
            <div
              key={cond.medical_condition_code}
              className="col-span-1 flex justify-around "
            >
              <div className="mx-[10px] md:mx-[25px] xl:mx-[45px]  relative w-full text-left text-sm text-slate-700 focus:outline-none font-semibold rounded-none px-2 py-4">
                <div
                  onClick={() => handleOnClick(ind, cond.id)}
                  className=" cursor-pointer flex w-full pb-6 md:pb-8 border-b border-gray-400 items-center justify-between md:h-[4rem]"
                >
                  <span className="inline-block text-[12px] lg:text-[14px] xl:text-[18px] font-BasicSansBold text-codGray tracking-[3px] font-bold ">
                    {cond.medical_condition_code}
                  </span>
                  <img
                    className={`transition-all duration-[0.5s] ease-[ease] h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] relative top-[5px] xl:top-[10px] ${
                      diseasesDropdown[ind] ? " rotate-180 " : " "
                    }`}
                    src={require("../../assets/images/home/BlackDropdown.png")}
                    alt="homedropdown"
                  />
                </div>
                {diseasesDropdown[ind] && (
                  <div className="absolute z-10 bg-white w-full top-[50px] md:top-[64px] px-4 py-3 text-size-5 md:text-lg text-gray rounded-lg">
                    {condition.length ? (
                      condition.map((dis) => {
                        return (
                          <h4
                            key={dis.speciality_name}
                            className="hover:bg-cyanBlue mt-1 text-grey tracking-[0.1rem] cursor-pointer"
                            onClick={() =>
                              handleSearch(
                                dis.speciality_id,
                                dis.speciality_name
                              )
                            }
                          >
                            {dis.speciality_name}
                          </h4>
                        );
                      })
                    ) : (
                      <BufferLoader />
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
