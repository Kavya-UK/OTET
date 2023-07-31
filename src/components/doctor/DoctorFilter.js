import React, { useEffect, useState } from "react";
import { fetchDoctorFilter } from "../../redux/thunk/doctorfilter.thunk";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchFeaturedDoctors } from "../../redux/thunk/featuredDoctor.thunk";

export default function DoctorFilter() {
  const dispatch = useDispatch();
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [filteredSpecialities, setFilteredSpecialities] = useState([]);
  const [filteredLanguages, setFilteredLanguages] = useState([]);
  const [filteredCondition, setFilteredCondition] = useState([]);
  const [filteredAppointment, setFilteredAppointment] = useState([]);
  const [filteredInsurance, setFilteredInsurance] = useState([]);
  const setFilteredValue = (id, key, list) => {
    if (document.getElementById(id).checked) {
      const filtArr = [...list];
      filtArr.push(key);
      return filtArr;
    } else {
      const filtArr = [...list];
      var index = filtArr.indexOf(key);
      if (index !== -1) {
        filtArr.splice(index, 1);
      }
      return filtArr;
    }
  };
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
    const listViewObj = { ...listView };
    if (!listViewObj[title].showAll) {
      listViewObj[title].showAll = !listViewObj[title].showAll;
      listViewObj[title].minlength = allList.length;
    } else {
      listViewObj[title].showAll = !listViewObj[title].showAll;
      listViewObj[title].minlength = title === "Language" ? 3 : 5;
    }

    setListView(listViewObj);
  };
  const doctorFilter = useSelector((state) => state.doctorfilter.filteredList);
  useEffect(() => {
    dispatch(fetchDoctorFilter());
  }, []);
  useEffect(() => {
    console.log(filteredLanguages);
    console.log(filteredSpecialities);
    console.log(filteredCondition);
    console.log(filteredAppointment);
    console.log(filteredInsurance);
    const area = query.get("area");
    const date = query.get("date");
    const curdate = new Date(`${date}`);
    var day = days[curdate.getDay()];
    const appointmentType =
      filteredAppointment.length === 2 || filteredAppointment.length === 0
        ? []
        : filteredAppointment[0]
    const param = {
      paginate: 4,
      page: 1,
      speciality: filteredSpecialities,
      language: filteredLanguages,
      conditions: filteredCondition,
      insurance: filteredInsurance,
      appointment_type: appointmentType,
      ...(area ? { serving_areas: area.split("_")[1] } : {}),
      ...(date ? { time_slot_day: day } : {}),
    };

    dispatch(fetchFeaturedDoctors(param));
  }, [
    filteredLanguages,
    filteredSpecialities,
    filteredCondition,
    filteredAppointment,
    filteredInsurance,
  ]);

  const filterHandler = (key, title, id) => {
    console.log(title);
    console.log(document.getElementById(id).checked);
    switch (title) {
      case "Language":
        setFilteredLanguages([...setFilteredValue(id, key, filteredLanguages)]);
        break;
      case "Specialty":
        setFilteredSpecialities([
          ...setFilteredValue(id, key, filteredSpecialities),
        ]);
        break;
      case "Conditions":
        setFilteredCondition([...setFilteredValue(id, key, filteredCondition)]);

        break;
      case "Appointment Type":
        setFilteredAppointment([
          ...setFilteredValue(id, key, filteredAppointment),
        ]);
        break;
      case "Insurance":
        setFilteredInsurance([...setFilteredValue(id, key, filteredInsurance)]);
        break;
      default:
        break;
    }

    // const area = query.get("area");
    // const specialty = query.get("specialty");
    // const date = query.get("date");
    // const curdate = new Date(`${date}`);
    // var day = days[curdate.getDay()];
    // const param = {
    //   paginate: 4,
    //   page: 1,
    //   ...(area ? { serving_areas: area.split("_")[1] } : {}),
    //   ...(specialty ? { specialty: specialty.split("_")[1] } : {}),
    //   ...(date ? { time_slot_day: day } : {}),
    // };

    // dispatch(fetchFeaturedDoctors(param));
  };
  return (
    <div className="pl-[10px] border-r-2">
      {doctorFilter.map((list) => {
        return (
          <div key={list.title}>
            <h1 className=" font-BasicSansBold text-[15px] text-codGray tracking-[2px] font-bold my-[10px]">
              {list.title}
            </h1>
            {list.value?.slice(
                0,
                listView[list.title]?.minlength
                  ? listView[list.title]?.minlength
                  : list.value.length
              )
              .map((names, i) => {
                return (
                  <div
                    key={`names_${i}`}
                    className="flex items-center mt-[10px]"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-start sm:items-center space-x-2">
                        <input
                          onClick={() =>
                            filterHandler(
                              filterNames[list.title] ? names.id : names,
                              list.title,
                              filterNames[list.title]
                                ? names[filterNames[list.title]]
                                : names
                            )
                          }
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
