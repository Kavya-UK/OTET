import React, { useState, useEffect, forwardRef } from "react";
import { ReactComponent as SearchBar } from "../../assets/images/home/SearchBarIcon.svg";
import { ReactComponent as Calendar } from "../../assets/images/home/Calendar.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocation } from "../../redux/thunk/location.thunk";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const DateInputComponent = forwardRef(
  ({ value, onClick, setDateIsOpen, dateIsOpen }, ref) => {
    let setValue = value;
  
    if (
      new Date(value).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
    )
      setValue = "Today";
    return (
      <div className="flex md:justify-between items-center w-full pl-[10px]">
        <div className="flex">
          <Calendar
            onClick={() => {
              onClick();
              setDateIsOpen(true);
            }}
            className="w-[15px] md:w-auto relative sm:top-[2px] lg:-top-[5px] mr-[20px] lg:mr-[15px]"
          />

          <button
            className="font-Basicsans text-[20px] text-codGray tracking-[5.04px] outline-none ml-[10px] "
            onClick={() => {
              onClick();
              setDateIsOpen(true);
            }}
            ref={ref}
          >
            {setValue}
          </button>
        </div>
        <img
          onClick={() => {
            onClick();
            setDateIsOpen(true);
          }}
          className={`transition-all duration-[0.5s] ease-[ease] hidden md:block ml-[15px] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] relative -top-[5px] md:top-[4px] -right-[5px] md:right-auto ${
            dateIsOpen ? " rotate-180" : " rotate-0"
          }`}
          src={require("../../assets/images/home/WhiteDropdown.png")}
          alt="dropdown"
        />
      </div>
    );
  }
);
export default function HomeBanner({}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const specialityList = useSelector(
    (state) => state.speciality.specialityList
  );
  const conditionsList = useSelector(
    (state) => state.conditions.conditionsList
  );
  const areasList = useSelector((state) => state.locations.areas);
  const [allList, setAllList] = useState({ speciality: [], conditions: [] });
  const [showSpecDropdown, setShowSpecDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [specValue, setSpecValue] = useState("");
  const [specId, setSpecId] = useState("");
  const [locValue, setLocValue] = useState("");
  const [locId, setLocId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dateIsOpen, setDateIsOpen] = useState("");

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

  const handleLocSelection = (city,id) => {
    setLocValue(city);
    setLocId(id)
    setShowAreasDropdown(false);
  };
  const handleSpecSelection = (name,id) => {
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
  const handleSearch = () => {
    let url = "/doctor-listing?";
    if (locValue) {
      url = `${url}area=${locValue}_${locId}&`;
    }
    if(specValue) {
      url = `${url}specialty=${specValue}_${specId}&`;
    }
   if(startDate) {
    const d = new Date(startDate).toLocaleDateString("fr-CA");
    url = `${url}date=${d}`;
   } else {
    const d = new Date().toLocaleDateString("fr-CA");
    url = `${url}date=${d}`;
   }
   navigate(url);
  }

  return (
    <div className="lg:h-[calc(100vh_-_7rem)] bg-cyanBlue w-full pt-[180px] pb-[40px]">
      <h1 className="text-titleBlack text-[18px] sm:text-[24px] lg:text-[48px] xl:text-[52px] font-PoppinsRegular text-center tracking-[0.1em] font-normal mb-[15px] transition-all duration-[0.5s] ease-[ease]">
        HOLISTIC
        <img
          src={require("../../assets/images/home/M.png")}
          alt="title"
          className="inline-block pl-[5px] sm:ml-[8px] lg:ml-[30px] h-[26px] sm:h-[36px] lg:h-[70px]  relative bottom-[2px] lg:bottom-[5px] transition-all duration-[0.5s] ease-[ease] sm:mr-[2px]"
        />
        EDICINE CONNECTING
      </h1>
      <h3 className=" text-[14px] sm:text-[18px] lg:text-[32px] xl:text-[40px] font-PoppinsItalic text-black tracking-[5px] text-center">
        Mind. Body. Soul
      </h3>
      <div className="flex items-center justify-center h-[360px]">
        <div className="grid grid-cols-12 rounded-[20px] lg:rounded-[87px] h-[250px] md:h-[100px]  border-[1px] bg-white  mx-[10px] md:mx-[40px] xl:mx-[100px] w-full transition-all duration-[0.5s] ease-[ease]">
          <div className=" col-span-12 md:col-span-10 xl:col-span-11 flex items-center md:h-[100px] lg:justify-center">
            <div className=" grid grid-cols-3 w-full pl-[20px] md:pl-0">
              <div className="col-span-3 md:col-span-1 flex justify-between items-center relative md:pl-[20px] lg:pl-[60px] md:border-r">
                <input
                  onBlur={handleLocOnBlur}
                  onFocus={handleLocFocusIn}
                  onChange={handleLocSearch}
                  value={locValue}
                  className="outline-none w-[80%] p-[10px] font-BasicSans text-[1.3rem] text-codGray tracking-[5px] placeholder:text-codGray focus:placeholder:text-codGray placeholder:font-medium bg-white"
                  placeholder="Location"
                  type="text"
                />

                <div
                  className={`absolute top-[80px] left-0 w-[500px] h-[300px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[20px]  ${
                    showAreasDropdown ? " block " : " hidden "
                  }`}
                >
                  <ul className="">
                    <li className="font-BasicSans text-eastBayLight">Areas</li>
                    {areasList.length
                      ? areasList.map((area) => {
                          return (
                            <li
                              className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none hover:bg-cyanBlue  active-dropdown-item"
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
              <div className="col-span-3 md:col-span-1 flex md:justify-around items-center relative md:border-r">
                <input
                  onBlur={handleSpecOnBlur}
                  onFocus={handleSpecFocusIn}
                  onChange={handleSpecSearch}
                  value={specValue}
                  className="outline-none w-[80%] p-[10px] font-BasicSans text-[1.3rem] text-codGray tracking-[5px] placeholder:text-gray-800 focus:placeholder:text-gray-400 placeholder:font-medium bg-white"
                  placeholder="Speciality/Condition"
                  type="text"
                />
                <div>
                  <img
                    onClick={handleSpecFocusIn}
                    className={`transition-all duration-[0.3s] ease-[linear] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] relative top-[4px] ${
                      showSpecDropdown ? " rotate-180" : " rotate-0"
                    }`}
                    src={require("../../assets/images/home/WhiteDropdown.png")}
                    alt="dropdown"
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
                              className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-codGray hover:bg-cyanBlue  active-dropdown-item"
                              onClick={() => {
                                handleSpecSelection(
                                  spec.medical_speciality_name,
                                  spec.id
                                );
                              }}
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
                              onClick={() => {
                                handleSpecSelection(
                                  spec.medical_condition_name,
                                  spec.id
                                );
                              }}
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
              <div className="col-span-3 md:col-span-1 flex md:justify-end items-center relative top-[5px]">
                <div className="text-[20px] w-full xl:w-[80%]">
                  <DatePicker
                    className="font-Basicsans text-[1.3rem] text-codGray tracking-[5px] outline-none"
                    dateFormat="MMMM d, yyyy"
                    selected={startDate || new Date()}
                    minDate={new Date()}
                    onChange={(date) => {
                      setStartDate(date);
                    }}
                    onCalendarClose={() => setDateIsOpen(false)}
                    customInput={
                      <DateInputComponent
                        setDateIsOpen={setDateIsOpen}
                        dateIsOpen={dateIsOpen}
                      />
                    }
                    closeOnScroll={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-2 xl:col-span-1 flex md:justify-end">
            <div className="hidden md:flex col-span-2 md:col-span-1 items-center h-[100px] w-[100px]">
              <SearchBar
                onClick={() => handleSearch()}
                className=" cursor-pointer "
              />
            </div>
            <div className=" md:hidden col-span-12 text-center w-full">
              <button className="bg-shadeBlue py-[8px] w-[50%] text-white rounded-[10px] text-[1rem]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
