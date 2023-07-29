import React, { forwardRef, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { BiCalendar } from "react-icons/bi";
import Footer from "../components/common/Footer";
import { fetchSpeciality } from "../redux/thunk/speciality.thunk";
import { fetchLocation } from "../redux/thunk/location.thunk";
import { useDispatch, useSelector } from "react-redux";
import { fetchConditions } from "../redux/thunk/conditions.thunk";
import AppointmentHeader from "../components/home/AppointmentHeader";
const DateInputComponent = forwardRef(({ value, onClick }, ref) => {
  let setValue = value;
  if (new Date(value).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0))
    setValue = "Today";
  return (
    <div className="relative w-full">
      <div className="relative">
        <span
          onClick={onClick}
          ref={ref}
          className="h-[64px] w-full flex items-center rounded-[6px] tracking-[3px] border cursor-pointer border-opacity-80 p-2  text-placeholderGray font-basic-sans-regular text-[16px] px-2  border-shadeBlue  pl-[1rem] "
        >
          {setValue}
        </span>

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
    setShowSpecDropdown(!!filterSpec.length || !!filterCond.length);
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
    }, 500);
  };
  const handleSpecOnBlur = () => {
    setSpecValue("");
    setTimeout(() => {
      setShowSpecDropdown(false);
    }, 500);
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
        <div className="block w-[50rem] h-[20rem] rounded-br-full rounded-bl-full -z-10 bg-blueish absolute left-[50%] top-0 -translate-x-1/2"></div>
        <div className="w-[550px] space-y-4 bg-white my-[80px] rounded-[10px] px-[25px] py-[50px] drop-shadow-md">
          <div className="">
            <h1 className="text- codGray text-[20px] font-BasicSansBold tracking-[5.4px] font-bold">
              Book Top Doctors Appointment
            </h1>
            <span className="inline-block text-eastBay font-BasicSansLight my-[15px] text-[15px]">
              Thinking to consult a doctor this week? Use Holmeddoc to find the
              best doctors near you.
            </span>
          </div>
          <div className="relative  w-full  border-none pb-[20px]">
            <div className="flex flex-col">
              <div className="h-[64px] w-full flex items-center justify-center">
                <input
                  className="h-full w-full rounded-[5px] border-shadeBlue px-[16px] outline-none placeholder:text-[15px] placeholder:font-thin placeholder:tracking-[3px] bg-white border-opacity-80  rounded-r-none border-y border-l"
                  placeholder="City, Zip Code"
                  type="text"
                  onBlur={handleLocOnBlur}
                  onFocus={handleLocFocusIn}
                  onChange={handleLocSearch}
                  value={locValue}
                />
                <div className="cursor-pointer bg-[white] border-shadeBlue h-full flex items-center justify-center border-y border-r rounded-r-[6px] pl-3 pr-6  ">
                  <img
                    src={require("../assets/images/home/GreenArrowDown.png")}
                    alt="Dropdown"
                    className={`transition-all duration-[0.3s] ease-[linear] h-[12px] w-[12px] text-green ${
                      showAreasDropdown ? " rotate-180" : "rotate-0"
                    }`}
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
                  {areasList.length
                    ? areasList.map((area) => {
                        return (
                          <li
                            className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                            onClick={() => handleLocSelection(area.city)}
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
          </div>
          <div className="relative h-[fit-content] w-full  border-none pb-[20px]">
            <div className="flex flex-col">
              <div className="h-[64px] w-full flex items-center justify-center">
                <input
                  className="h-full w-full rounded-[5px] border-shadeBlue px-[16px] outline-none placeholder:text-[15px] placeholder:font-thin placeholder:tracking-[3px] bg-white border-opacity-80  rounded-r-none  border-y border-l"
                  placeholder="Specialty, Condition"
                  type="text"
                  onBlur={handleSpecOnBlur}
                  onFocus={handleSpecFocusIn}
                  onChange={handleSpecSearch}
                  value={specValue}
                />
                <div className=" border-shadeBlue cursor-pointer bg-[white]  h-full flex items-center justify-center border-y border-r rounded-r-[6px] pl-3 pr-6  ">
                  <img
                    src={require("../assets/images/home/GreenArrowDown.png")}
                    alt="Dropdown"
                    className={`transition-all duration-[0.3s] ease-[linear] h-[12px] w-[12px] text-green  ${
                      showSpecDropdown ? " rotate-180" : " rotate-0"
                    }`}
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
                {allList.speciality.length ? <li className="font-BasicSans text-eastBayLight">Speciality</li> : null}
                {allList.speciality.length ? (
                  allList.speciality.map((spec) => {
                    return (
                      <li
                        className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                        onClick={() =>
                          handleSpecSelection(spec.medical_speciality_name)
                        }
                        key={spec.medical_speciality_name}
                      >
                        {spec.medical_speciality_name}
                      </li>
                    );
                  })
                ) : null}
                {allList.conditions.length ? <li className="font-BasicSans text-eastBayLight">Conditions</li> : null}
                {allList.conditions.length ? (
                  allList.conditions.map((spec) => {
                    return (
                      <li
                        className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                        onClick={() =>
                          handleSpecSelection(spec.medical_condition_name)
                        }
                        key={spec.medical_condition_name}
                      >
                        {spec.medical_condition_name}
                      </li>
                    );
                  })
                ) : null}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start  font-basic-sans-regular pb-[20px]">
            <div className="relative w-full ">
              <ReactDatePicker
                className="test"
                dateFormat="MMMM d, yyyy"
                selected={startDate || new Date()}
                minDate={new Date()}
                onChange={(date) => setStartDate(date)}
                customInput={<DateInputComponent />}
                closeOnScroll={true}
              />
            </div>
            {/* </div> */}
          </div>
          <div className="space-y-2 pb-[10px]">
            <label className="text-[15px] tracking-[3px] text-gray-400">
              Type of Visit
            </label>
            <div className="flex h-[fit-content] flex-col w-full ">
              <div className="w-full relative border-shadeBlue border-[1px] flex items-center p-[10px] text-[20px] cursor-pointer rounded-[6px]">
                <div
                  onClick={() => settype(1)}
                  className={`transition-all duration-[0.5s] ease-[linear] rounded-[6px]  p-[10px] flex items-center justify-center text-center w-full ${
                    type === 1 ? " text-white z-10" : " text-black "
                  } `}
                >
                  InPerson
                </div>
                <div
                  onClick={() => settype(2)}
                  className={`transition-all duration-[0.5s] ease-[linear] rounded-[6px]  p-[10px] flex items-center justify-center text-center w-full ${
                    type === 2 ? " text-white z-10" : " text-black "
                  } `}
                >
                  Virtual
                </div>
                <div
                  className={`absolute h-[2.8rem] w-[50%] -z-2 bg-shadeBlue transition-transform duration-400 rounded-[0.2rem]  ${
                    type === 2 ? " translate-x-[90%]" : " translate-x-[2%]"
                  }`}
                ></div>
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
