import React, { useEffect, useState } from "react";
import { fetchDoctorFilter } from "../../Redux/thunk/doctorfilter.thunk";
import { useDispatch, useSelector } from "react-redux";

export default function DoctorFilter() {
  const dispatch = useDispatch();
  const [listView, setListView] = useState({
    Language: {
      minlength: 3,
      showAll: false,
    },
    Specialty: {
      minlength: 5,
      showAll: false,
    },
    Conditions: {
      minlength: 5,
      showAll: false,
    },
   
  });
  const filterNames = {
    Language: "language_title",
    Specialty: "medical_speciality_name",
    Conditions: "medical_condition_name",
    Insurance: "insurance_company_name",
    "Appointment Type": "",
  };
  const handleViewAll = (title, allList) => {
    const listViewObj = {...listView}
    if (!listViewObj[title].showAll){
        listViewObj[title].showAll = !listViewObj[title].showAll;
        listViewObj[title].minlength = allList.length;
    } else {
      listViewObj[title].showAll = !listViewObj[title].showAll;
      listViewObj[title].minlength = title === 'Language' ? 3 : 5;
    }
    
    setListView(listViewObj);
  }
  const doctorFilter = useSelector((state) => state.doctorfilter.filteredList);
  useEffect(() => {
    dispatch(fetchDoctorFilter());
  }, []);
  return (
    <div className="pl-[10px] border-r-2">
      {doctorFilter.map((list) => {
        return (
          <div>
            <h1 className=" font-BasicSansBold text-[15px] text-codGray tracking-[2px] font-bold my-[10px]">
              {list.title}
            </h1>
            {list.value
              .slice(
                0,
                listView[list.title]?.minlength
                  ? listView[list.title]?.minlength
                  : list.value.length
              )
              .map((names) => {
                return (
                  <div className="flex items-center mt-[10px]">
                    <div className="flex flex-col">
                      <div className="flex items-start sm:items-center space-x-2">
                        <input
                          id={
                            filterNames[list.title]
                              ? names[filterNames[list.title]]
                              : names
                          }
                          type="checkbox"
                          className="hover:cursor-pointer h-5 w-5  rounded-md  border-gray-400 border-[1px]  bg-no-repeat bg-center"
                        />
                      </div>
                    </div>
                    <label
                      htmlFor={
                        filterNames[list.title]
                          ? names[filterNames[list.title]]
                          : names
                      }
                      className=" text-codGray font-BasicSans tracking-[2px] ml-[10px] text-[14px] w-[240px] inline-block"
                    >
                      {filterNames[list.title]
                        ? names[filterNames[list.title]]
                        : names}
                    </label>
                  </div>
                );
              })}
            {listView[list.title] && (
              <button
                onClick={() => handleViewAll(list.title, list.value)}
                className=" text-size-6 tracking-[1px] md:tracking-normal md:text-[1rem] underline text-mustardYellow mt-[20px]"
              >
                {!listView[list.title]?.showAll ? "View All" : "View Less"}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
