import React, { useState, useEffect, forwardRef } from "react";
import { ReactComponent as SearchBar } from "../../assets/images/home/SearchBarIcon.svg";
import { ReactComponent as Calendar } from "../../assets/images/home/Calendar.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocation } from "../../Redux/thunk/location.thunk";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInputComponent = forwardRef(({ value, onClick }, ref) => {
  let setValue = value;
  if (value === "") setValue = "Select Date";
  return (
    <div className="flex justify-between items-center w-full">
      <Calendar
        onClick={onClick}
        className="w-[15px] sm:w-auto relative -top-[5px] sm:top-0 mr-[15px]"
      />

      <button
        className="font-Basicsans text-[20px] text-codGray tracking-[5.04px] outline-none"
        onClick={onClick}
        ref={ref}
      >
        {setValue}
      </button>
      <img
        onClick={onClick}
        className="ml-[15px] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] relative -top-[5px] sm:top-[4px] -right-[5px] sm:right-auto"
        src={require("../../assets/images/home/WhiteDropdown.png")}
        alt="dropdown"
      />
    </div>
  );
});
export default function HomeBanner() {
  const dispatch = useDispatch();
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
  const [locValue, setLocValue] = useState("");
  const [startDate, setStartDate] = useState("");

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
    <div className="h-[calc(100vh_-_7rem)] bg-cyanBlue w-full pt-[180px]">
      <h1 className="text-titleBlack text-[36px] sm:text-[48px] lg:text-[55px] font-PoppinsRegular text-center tracking-[6.8px] font-normal mb-[15px] transition-all duration-[0.5s] ease-[ease]">
        HOLISTIC
        <br className="sm:hidden block" />
        <img
          src={require("../../assets/images/home/M.png")}
          alt="title"
          className="inline-block sm:ml-[40px] lg:ml-[30px] h-[56px] sm:h-[70px] lg:h-[75px] w-[35px] sm:w-[40px] lg:w-[49px] relative bottom-[5px] transition-all duration-[0.5s] ease-[ease] mr-[6px]"
        />
        EDICINE CONNECTING
      </h1>
      <h3 className=" text-[30px] xl:text-[40px] font-PoppinsItalic text-black italic tracking-[5px] text-center">
        Mind. Body. Soul
      </h3>
      <div className="grid grid-cols-12 rounded-[60px] sm:rounded-[87px] h-[100px]  border-[1px] bg-white mt-[90px] mx-[10px] sm:mx-[40px] xl:mx-[100px] transition-all duration-[0.5s] ease-[ease]">
        <div className="col-span-10 sm:col-span-11 flex items-center  h-[100px] justify-center">
          <div className=" grid grid-cols-3 ">
            <div className="col-span-3 sm:col-span-1 flex justify-around items-center relative pl-[60px]">
              <input
                onBlur={handleLocOnBlur}
                onFocus={handleLocFocusIn}
                onChange={handleLocSearch}
                value={locValue}
                className="outline-none w-[80%] p-[10px] font-BasicSans text-[1.3rem] text-codGray tracking-[5px] semi placeholder:text-codGray focus:placeholder:text-codGray placeholder:font-medium bg-white"
                placeholder="Location"
                type="text"
              />
              <div>
                <img
                  className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] relative top-[4px]"
                  src={require("../../assets/images/home/WhiteDropdown.png")}
                  alt="dropdown"
                />
              </div>
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
                            className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none text-primary hover:bg-cyanBlue  active-dropdown-item"
                            onClick={() => handleLocSelection(area.city)}
                            key={area.id}
                          >
                            {area.city}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-1 flex justify-around items-center relative">
              <input
                onBlur={handleSpecOnBlur}
                onFocus={handleSpecFocusIn}
                onChange={handleSpecSearch}
                value={specValue}
                className="outline-none w-[80%] p-[10px] font-BasicSans text-[1.3rem] text-codGray tracking-[5px] font-semibold placeholder:text-gray-800 focus:placeholder:text-gray-400 placeholder:font-medium bg-white"
                placeholder="Speciality"
                type="text"
              />
              <div>
                <img
                  className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] relative top-[4px]"
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
                  <li className="font-BasicSans text-eastBayLight">
                    Speciality
                  </li>
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
                  <li className="font-BasicSans text-eastBayLight">
                    Conditions
                  </li>
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
            <div className="col-span-3 sm:col-span-1 flex justify-around items-center relative top-[5px]">
              <div className="text-[20px]">
                <DatePicker
                  className="bg-white font-Basicsans text-[1.3rem] text-codGray tracking-[5px] outline-none"
                  dateFormat="MMMM d, yyyy"
                  selected={startDate}
                  minDate={new Date()}
                  onChange={(date) => setStartDate(date)}
                  customInput={<DateInputComponent />}
                  closeOnScroll={true}
                  
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 flex items-center h-[100px]">
          <SearchBar className="w-[80%] xl:w-[90%]" />
        </div>
      </div>
    </div>
  );
}
