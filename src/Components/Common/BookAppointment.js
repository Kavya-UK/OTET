import React, { forwardRef, useEffect, useState } from "react";
import AppointmentHeader from "./AppointmentHeader";
import ReactDatePicker from "react-datepicker";
import { BiCalendar } from "react-icons/bi";
import Footer from "../Common/Footer";
import { fetchSpeciality } from "../../Redux/thunk/speciality.thunk";
import { fetchLocation } from "../../Redux/thunk/location.thunk";
import { useDispatch, useSelector } from "react-redux";
import { fetchConditions } from "../../Redux/thunk/conditions.thunk";

const DateInputComponent = forwardRef(({ value, onClick }, ref) => {
  console.log(value);
  let setValue = value;
  if (value === "") setValue = "Select Date";
  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          onClick={onClick}
          ref={ref}
          className="h-[64px] w-full rounded-[6px] border cursor-pointer border-opacity-80 p-2 placeholder:text-gray-400 placeholder:tracking-[3px] font-basic-sans-regular text-sm px-2 outline-none border-shadeBlue text-size-6 placeholder:font-thin pl-[1rem] "
          placeholder="Today"
          value={setValue}
        />
        <BiCalendar
          onClick={onClick}
          className="w-[28px] h-[29px] text-shadeBlue absolute right-5 top-[50%] -translate-y-[50%]"
        />
      </div>
    </div>
  );
});

export default function BookAppointment() {
  const dispatch = useDispatch();
  const [type, settype] = useState(1);
  const [startDate, setStartDate] = useState("");
  const specialityList = useSelector(
    (state) => state.speciality.specialityList
  );
  const conditionsList = useSelector(
    (state) => state.conditions.conditionsList
  );
  useEffect(() => {
    dispatch(fetchSpeciality());
    dispatch(fetchLocation());
    dispatch(fetchConditions());
  }, []);

  const areasList = useSelector((state) => state.locations.areas);

  const [allList, setAllList] = useState({ speciality: [], conditions: [] });
  const [showSpecDropdown, setShowSpecDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [specValue, setSpecValue] = useState("");
  const [locValue, setLocValue] = useState("");

  useEffect(() => {
    setAllList({
      speciality: specialityList,
      conditions: conditionsList,
    });
  }, [specialityList, conditionsList]);

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
    setShowSpecDropdown(!!filterSpec.length);
    setAllList({
      speciality: filterSpec,
      conditions: filterCond,
    });
  };

  const handleLocSelection = (city) => {
    setLocValue(city);
    setShowAreasDropdown(false);
  };
  const handleSpecSelection = (name) => {
    setSpecValue(name);
    setShowSpecDropdown(false);
  };
  const handleLocOnBlur = () => {
    setLocValue("");
    setTimeout(() => {
      setShowAreasDropdown(false);
    }, 100);
  };
  const handleSpecOnBlur = () => {
    setSpecValue("");
    setTimeout(() => {
      setShowSpecDropdown(false);
    }, 100);
  };
  const handleLocFocusIn = () => {
    setLocValue("");
  };
  const handleSpecFocusIn = () => {
    setSpecValue("");
    setShowSpecDropdown(true);
    setAllList({
      speciality: specialityList,
      conditions: conditionsList,
    });
  };

  return (
    <>
      <AppointmentHeader />
      <div className="relative flex items-center w-full justify-center">
        <div class="block w-[50rem] h-[20rem] rounded-br-full rounded-bl-full -z-10 bg-blueish absolute left-[50%] top-0 -translate-x-1/2"></div>
        <div className="w-[550px] space-y-4 bg-white mt-[80px] rounded-[6px] px-[25px] py-[50px]">
          <div className="">
            <h1 class="text- codGray text-[20px] font-BasicSansBold tracking-[5.4px] font-bold">
              Book Top Doctors Appointment
            </h1>
            <span class="inline-block text-eastBay font-BasicSansLight my-[15px] text-[15px]">
              Thinking to consult a doctor this week? Use Holmeddoc to find the
              best doctors near you.
            </span>
          </div>
          <div className="relative  w-full  border-none">
            <div className="flex flex-col">
              <div className="h-[64px] w-full flex items-center justify-center">
                <input
                  className="h-full w-full rounded-[5px] border-shadeBlue px-[16px] outline-none placeholder:text-[20px] placeholder:font-thin placeholder:tracking-[3px] bg-white border-opacity-80  rounded-r-none border-y border-l"
                  placeholder="City, Zip Code"
                  type="text"
                  onBlur={handleLocOnBlur}
                  onFocus={handleLocFocusIn}
                  onChange={handleLocSearch}
                  value={locValue}
                />
                <div className="cursor-pointer bg-[white] border-shadeBlue h-full flex items-center justify-center border-y border-r rounded-r-[6px] pl-3 pr-6  ">
                  <img
                    src={require("../../assets/images/home/GreenArrowDown.png")}
                    alt="Dropdown"
                    className="h-[12px] w-[12px] text-green rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
              <div
                className={`absolute top-[80px] left-0 w-[500px] h-[300px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[20px]  ${
                  showAreasDropdown ? " block z-50" : " hidden "
                }`}
              >
                <ul className="">
                  <li className="font-BasicSans text-eastBayLight">Areas</li>
                  {areasList.length ? (
                    areasList.map((area) => {
                      return (
                        <li
                          className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                          onClick={() => handleLocSelection(area.city)}
                          key={area.id}
                        >
                          {area.city}
                        </li>
                      );
                    })
                  ) : (
                    <img
                      className="relative top-[80px] left-[180px] w-[100px]"
                      src={require("../../assets/images/cat-loading.gif")}
                      alt="loading"
                    />
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative h-[fit-content] w-full  border-none">
            <div className="flex flex-col">
              <div className="h-[64px] w-full flex items-center justify-center">
                <input
                  className="h-full w-full rounded-[5px] border-shadeBlue px-[16px] outline-none placeholder:text-[20px] placeholder:font-thin placeholder:tracking-[3px] bg-white border-opacity-80  rounded-r-none  border-y border-l"
                  placeholder="Specialty, Condition, Doctor..."
                  type="text"
                  onBlur={handleSpecOnBlur}
                  onFocus={handleSpecFocusIn}
                  onChange={handleSpecSearch}
                  value={specValue}
                />
                <div className=" border-shadeBlue cursor-pointer bg-[white]  h-full flex items-center justify-center border-y border-r rounded-r-[6px] pl-3 pr-6  ">
                  <img
                    src={require("../../assets/images/home/GreenArrowDown.png")}
                    alt="Dropdown"
                    className="h-[12px] w-[12px] text-green rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div
              className={`absolute top-[80px] left-0 w-[500px] h-[300px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[20px]  ${
                showSpecDropdown ? " block z-50" : " hidden "
              }`}
            >
              <ul className="">
                <li className="font-BasicSans text-eastBayLight">Speciality</li>
                {allList.speciality.length ? (
                  allList.speciality.map((spec) => {
                    return (
                      <li
                        className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                        onClick={() =>
                          handleSpecSelection(spec.medical_speciality_name)
                        }
                        key={spec.id}
                      >
                        {spec.medical_speciality_name}
                      </li>
                    );
                  })
                ) : (
                  <img
                    className="relative top-[80px] left-[180px] w-[100px]"
                    src={require("../../assets/images/cat-loading.gif")}
                    alt="loading"
                  />
                )}
                <li className="font-BasicSans text-eastBayLight">Conditions</li>
                {allList.conditions.length ? (
                  allList.conditions.map((spec) => {
                    return (
                      <li
                        className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                        onClick={() =>
                          handleSpecSelection(spec.medical_condition_name)
                        }
                        key={spec.id}
                      >
                        {spec.medical_condition_name}
                      </li>
                    );
                  })
                ) : (
                  <img
                    className="relative top-[80px] left-[180px] w-[100px]"
                    src={require("../../assets/images/cat-loading.gif")}
                    alt="loading"
                  />
                )}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col items-start  font-basic-sans-regular ">
            <div className="relative w-full">
              <ReactDatePicker
                className="test"
                dateFormat="MMMM d, yyyy"
                selected={startDate}
                minDate={new Date()}
                onChange={(date) => setStartDate(date)}
                customInput={<DateInputComponent />}
                closeOnScroll={true}
              />
            </div>
            {/* </div> */}
          </div>
          <div className="space-y-2">
            <label className="text-[20px] tracking-[3px] text-gray-400">
              Type of Visit
            </label>
            <div className="flex h-[fit-content] flex-col w-full ">
              <div className="w-full relative border-shadeBlue border-[1px] flex items-center p-[10px] text-[20px] cursor-pointer rounded-[6px]">
                <div
                  onClick={() => settype(1)}
                  className={`transition-all duration-[0.5s] ease-[linear] rounded-[6px]  p-[10px] flex items-center justify-center text-center w-full ${
                    type === 1 ? " bg-shadeBlue text-white " : " text-black "
                  } `}
                >
                  InPerson
                </div>
                <div
                  onClick={() => settype(2)}
                  className={`transition-all duration-[0.5s] ease-[linear] rounded-[6px]  p-[10px] flex items-center justify-center text-center w-full ${
                    type === 2 ? " bg-shadeBlue text-white " : " text-black "
                  } `}
                >
                  Virtual
                </div>
              </div>
            </div>
          </div>
          <div className="text-center ">
            <button className="bg-shadeBlue mt-[20px] w-[160px] text-white px-[10px] py-[10px] rounded-[100px] sm:text-[18px] font-BasicSans font-semibold tracking-[2px] ">
              Search
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
