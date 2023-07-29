import React, { useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { fetchLocation } from "../../redux/thunk/location.thunk";
import { fetchSpeciality } from "../../redux/thunk/speciality.thunk";
import { fetchConditions } from "../../redux/thunk/conditions.thunk";
import { useSelector, useDispatch } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Calendar } from "../../assets/images/home/Calendar.svg";
import { fetchFeaturedDoctors } from "../../redux/thunk/featuredDoctor.thunk";
import { useSearchParams } from "react-router-dom";

const DateInputComponent = forwardRef(({ value, onClick }, ref) => {
  let setValue = value;
   if (new Date(value).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0))
     setValue = "Today";
  return (
    <div className="flex md:justify-between items-center w-full pl-[10px]">
      <Calendar
        onClick={onClick}
        className="w-[15px] md:w-auto relative   "
      />

      <button
        className="text-codGray font-BasicSans h-[40px] text-[13px] w-full outline-none bg-white px-[0.5rem]"
        onClick={onClick}
        ref={ref}
      >
        {setValue}
      </button>
      
    </div>
  );
});
export default function DoctorHeader() {
  const specialityList = useSelector(
    (state) => state.speciality.specialityList
  );

  const areasList = useSelector((state) => state.locations.areas);
  const useQuery = () => new URLSearchParams(useLocation().search);
  const [searchParams, setSearchParams] = useSearchParams();
  let query = useQuery();
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    dispatch(fetchLocation());
    dispatch(fetchSpeciality());
    dispatch(fetchConditions());
  }, []);
  const conditionsList = useSelector(
    (state) => state.conditions.conditionsList
  );

  const [allList, setAllList] = useState({ speciality: [], conditions: [] });
  const [showSpecDropdown, setShowSpecDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [specValue, setSpecValue] = useState("");
  const [locValue, setLocValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [locId, setLocId] = useState("");
  const [specId, setSpecId] = useState("");
  const [showDropdown, setDropdown] = useState(false);


  useEffect(() => {
    setAllList({
      speciality: specialityList,
      conditions: conditionsList,
    });
    const area = query.get("area");
    const specialty = query.get("specialty");
    const date = query.get("date");
    !startDate && setStartDate(new Date(date));
    !specValue && setSpecValue(specialty?.split("_")[0]);
    !locValue && setLocValue(area?.split("_")[0]);
  }, [specialityList, conditionsList]);

  const searchDocList = (e) => {
     const curdate = new Date(`${startDate}`);
     var day = days[curdate.getDay()];
     const param = {
       paginate: 4,
       page: 1,
       ...(locId ? { serving_areas: locId } : {}),
       ...(specId ? { specialty: specId } : {}),
       ...(startDate ? { time_slot_day: day } : {}),
     };
    setSearchParams({
      date: new Date(startDate).toLocaleDateString("fr-CA"),
      ...(specId ? { specialty: `${specValue}_${specId}` } : {}),
      ...(locId ? { area: `${locValue}_${locId}` } : {}),
    });
     dispatch(fetchFeaturedDoctors(param));
  };
  const handleLocSearch = (e) => {
    const searchText = e.target.value;
    setLocValue(searchText);
    dispatch(fetchLocation({ name: searchText }));
    setShowAreasDropdown(true);
  };
  const handleSpecSearch = (e) => {
    const searchText = e.target.value;
    setSpecValue(e.target.value);
    const filterSpec = specialityList.filter((spec) => {
      if (
        spec.medical_speciality_name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      ) {
        return spec;
      }
    });
    const filterCond = conditionsList.filter((cond) => {
      if (
        cond.medical_condition_name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      ) {
        return cond;
      }
    });
    setShowSpecDropdown(!!filterSpec.length || !!filterCond.length);
    setAllList({
      speciality: filterSpec,
      conditions: filterCond,
    });
  };

  const handleLocSelection = (city, id) => {
    setLocValue(city);
    setLocId(id);
    setShowAreasDropdown(false);
  };
  const handleSpecSelection = (name, id) => {
    setSpecValue(name);
    setSpecId(id);
    setShowSpecDropdown(false);
  };
  const handleLocOnBlur = () => {
    setLocValue("");
    setLocId("");
    setTimeout(() => {
      setShowAreasDropdown(false);
    }, 500);
  };
  const handleSpecOnBlur = () => {
    setSpecValue("");
    setSpecId("");
    setTimeout(() => {
      setShowSpecDropdown(false);
    }, 500);
  };
  const handleLocFocusIn = () => {
    setLocValue("");
    setLocId("");
  };
  const handleSpecFocusIn = () => {
    setSpecValue("");
    setSpecId("");
    setShowSpecDropdown(true);
    setAllList({
      speciality: specialityList,
      conditions: conditionsList,
    });
  };
  return (
    <div className="flex flex-row justify-between items-center max-h-fit py-[5px] pl-[30px] pr-[50px] bg-white  drop-shadow-md">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img
          className="w-[130px] h-[130px] "
          src={require("../../assets/images/home/Logo.png")}
          alt="logo"
        />
      </div>
      <div>
        <div className="flex items-center w-full border-[2px] rounded-[20px]  py-[0.5rem] relative">
          <div className="w-[30%] relative">
            <div className="ml-3">
              <input
                onBlur={handleLocOnBlur}
                onFocus={handleLocFocusIn}
                onChange={handleLocSearch}
                value={locValue || ""}
                type="text"
                placeholder="Location"
                className="text-codGray font-BasicSans h-[40px] text-[16px] w-full border-r outline-none bg-white px-[0.5rem]"
              />
            </div>
            <div
              className={`absolute top-[80px] left-0 w-[300px] h-[300px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[20px]  ${
                showAreasDropdown ? " block " : " hidden "
              }`}
            >
              <ul className="">
                <li className="font-BasicSans text-eastBayLight">Areas</li>
                {areasList.length
                  ? areasList.map((area) => {
                      return (
                        <li
                          className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                          onClick={() =>
                            handleLocSelection(area.city, area.zip_code_id)
                          }
                          key={area.city}
                        >
                          {area.city}
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
          <div className="w-[30%] relative">
            <div className="ml-3">
              <input
                onBlur={handleSpecOnBlur}
                onFocus={handleSpecFocusIn}
                onChange={handleSpecSearch}
                value={specValue || ""}
                placeholder="Specialty"
                type="text"
                className="text-[16px] text-codGray font-BasicSans h-[40px] border-r w-full px-2 outline-none bg-white"
              />
            </div>
            <div
              className={`absolute top-[80px] left-0 w-[500px] h-[300px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[20px]  ${
                showSpecDropdown ? " block " : " hidden "
              }`}
            >
              <ul className="">
                {allList.speciality.length ? (
                  <li className="font-BasicSans text-eastBayLight">
                    Speciality
                  </li>
                ) : null}
                {allList.speciality.length
                  ? allList.speciality.map((spec) => {
                      return (
                        <li
                          className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                          onClick={() =>
                            handleSpecSelection(
                              spec.medical_speciality_name,
                              spec.id
                            )
                          }
                          key={spec.medical_speciality_name}
                        >
                          {spec.medical_speciality_name}
                        </li>
                      );
                    })
                  : null}
                {allList.conditions.length ? (
                  <li className="font-BasicSans text-eastBayLight">
                    Conditions
                  </li>
                ) : null}
                {allList.conditions.length
                  ? allList.conditions.map((spec) => {
                      return (
                        <li
                          className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                          onClick={() =>
                            handleSpecSelection(
                              spec.medical_condition_name,
                              spec.id
                            )
                          }
                          key={spec.medical_condition_name}
                        >
                          {spec.medical_condition_name}
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="ml-3">
              <div className="text-[20px] w-full xl:w-[80%]">
                <DatePicker
                  className="bg-white font-Basicsans text-[1.3rem] text-codGray tracking-[5px] outline-none"
                  dateFormat="MMMM d, yyyy"
                  selected={startDate || new Date()}
                  minDate={new Date()}
                  onChange={(date) => setStartDate(date)}
                  customInput={<DateInputComponent />}
                  closeOnScroll={true}
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => searchDocList()}
            className="absolute -right-[1px]  bg-shadeBlue border-y border-r border-l-none w-[4rem] h-full flex items-center justify-center rounded-xl text-white"
          >
            <BsSearch className="text-[30px] text-white " />
          </button>
        </div>
      </div>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setDropdown(!showDropdown)}
      >
        <Link className="font-BasicSans tracking-[3.6px] font-semibold text-darkBlack sm:text-[12px] lg:text-[14px] xl:text-[20px] pr-[10px] relative top-[5px] lg:top-[3px] xl:top-[0px]">
          LOGIN/SIGNUP
        </Link>
        <img
          src={require("../../assets/images/home/User.png")}
          alt="user"
          className="inline-block xl:w-[36px] lg:w-[30px] xl:h-[36px] lg:h-[30px] w-[25px] h-[25px] relative bottom-[0px] lg:bottom-[3px]"
        />
      </div>
      {showDropdown && (
        <div className="absolute right-0 -bottom-[110px] bg-white">
          <div className="flex flex-col p-[10px] whitespace-nowrap">
            <div className="flex flex-row justify-center items-center pb-[10px] border-b-[2px] border-b-gray-300">
              <div className=" font-BasicSans font-bold text-[15px] text-black pr-[8px]">
                Patients
              </div>
              <span
                className=" cursor-pointer text-black font-BasicSansLight  border-gray-800 hover:underline underline-offset-4 mr-[5px]"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
              <span
                className=" cursor-pointer text-black font-BasicSansLight  border-gray-800 hover:underline underline-offset-4"
                onClick={() => navigate("/register")}
              >
                Sign up
              </span>
            </div>
            <div className="flex flex-row justify-start items-center pt-[10px]">
              <div className=" font-BasicSans font-bold text-[15px] text-black pr-[8px]">
                Doctors
              </div>
              <span className=" cursor-pointer text-black font-BasicSansLight  border-gray-800 hover:underline underline-offset-4 ">
                Log in
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
