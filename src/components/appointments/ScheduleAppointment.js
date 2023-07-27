import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import InputCheckbox from "../common/InputCheckbox";
import Footer from "../common/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchDoctorData,
  fetchDoctorSlot,
} from "../../redux/thunk/featuredDoctor.thunk";

export default function ScheduleAppointmentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const doc_url = query.get("doc_url");

  const doctorSlot = useSelector(
    (state) => state.featuredpractioner.doctorSlot
  );

  const doctorData = useSelector(
    (state) => state.featuredpractioner.doctorData
  );
  const [type, settype] = useState(1);
  const [visit, setVisit] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [showInsurance, setShowInsurance] = useState(false);
  const [selectedInc, setselectedInc] = useState("");
  const [showCondition, setShowCondition] = useState(false);
  const [selectedCond, setselectedCond] = useState("");
  const [inPersonSlot, setInPersonSlot] = useState([]);
  const [virtualSlot, setVirtualSlot] = useState([]);
  useEffect(() => {
    dispatch(fetchDoctorData({ url: doc_url }));
    const d = new Date().toLocaleDateString("fr-CA");
    dispatch(
      fetchDoctorSlot({ doctor_id: doc_url.split("/")[1], time_slot_date: d })
    );
  }, []);

  const onDaySelect = (inPerson, virtual) => {
    if (visit === 1 && inPerson.value.length >= 1) {
      setSelectedDate(inPerson.date);
      setInPersonSlot(inPerson.value);
    }
    if (visit === 2 && virtual.value.length >= 1) {
      setSelectedDate(virtual.date);
      setVirtualSlot(virtual.value);
    }
  };
  const onDateChange = (type) => {
    setInPersonSlot([]);
    setVirtualSlot([]);
    let d;
    if (type === "forward") {
      d = new Date(new Date(doctorSlot.InPerson[6].date)).toLocaleDateString(
        "fr-CA"
      );
      dispatch(
        fetchDoctorSlot({ doctor_id: doc_url.split("/")[1], time_slot_date: d })
      );
    } else if (
      new Date(doctorSlot.InPerson[0].date).setHours(0, 0, 0, 0) !==
      new Date().setHours(0, 0, 0, 0)
    ) {
      d = new Date(
        new Date(doctorSlot.InPerson[0].date) - 6 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("fr-CA");
      dispatch(
        fetchDoctorSlot({ doctor_id: doc_url.split("/")[1], time_slot_date: d })
      );
    }
  };
  const getClassForDay = (inPerson, virtual) => {
    if (selectedDate === inPerson.date)
      return " bg-shadeBlue text-white  cursor-pointer ";
    else if (visit === 1 && inPerson?.value?.length >= 1)
      return " bg-Turquoise text-codGray  cursor-pointer ";
    else if (visit === 2 && virtual?.value?.length >= 1)
      return " bg-Turquoise text-codGray  cursor-pointer ";
    else return " bg-ashGray text-codGray cursor-not-allowed";
  };
  const tConvert = (time) => {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? "AM" : "PM";
      time[0] = +time[0] % 12 || 12;
    }
    return `${time[0]}:${time[2]} ${time[5]}`;
  };

  return (
    <>
      <div>
        <Header setDropShadow={true} />
        <h1 className=" font-BasicSans text-center font-semibold text-codGray text-[18px] sm:text-[30px] tracking-[5px] pt-[150px] ">
          Book an appointment
        </h1>
        <p className="text-eastBay font-BasicSansLight text-[1.1rem] text-center pt-[20px]">
          Fill out the below details and select the date and time to quickly
          book an appointment.
        </p>
        <div className="grid grid-cols-3 mt-[70px]">
          <div className="col-span-1 col-start-2">
            <div className="flex gap-6 flex-row ">
              <div>
                <img
                  className="w-[150px] h-[140px] rounded-[20px]"
                  alt="doctor"
                  src={require("../../assets/images/specialities/Doc1.png")}
                />
              </div>
              <div>
                <p className="font-HenrietteBold text-[22px] text-codGray pt-[10px]">
                  {doctorData.doctor_name}
                </p>
                <p className="font-BasicSans text-[1.1rem] text-codGray">
                  {doctorData.country?.[0]}
                </p>
                <p className="font-BasicSans text-[15px] text-codGray pt-[10px]">
                  {doctorData.education?.[0]}
                </p>
              </div>
            </div>
            <div className="mt-[60px]">
              <div>
                <label className="text-lightGray text-[15px] font-BasicSans">
                  Select your Insurance
                </label>
                <div className="h-[40px] w-full flex items-center justify-center mb-[30px] relative">
                  <input
                    className="h-full w-full rounded-[5px] border-shadeBlue px-[16px] outline-none placeholder:text-[12px] placeholder:tracking-[3px] bg-white border-opacity-80  rounded-r-none border-y border-l"
                    placeholder="Select Insurance"
                    type="text"
                    value={selectedInc}
                    onChange={() => {}}
                    onClick={() => setShowInsurance(true)}
                    onBlur={() => {
                      setTimeout(() => {
                        setShowInsurance(false);
                      }, 100);
                    }}
                  />
                  <div
                    onClick={() => setShowInsurance(!showInsurance)}
                    className="cursor-pointer bg-[white]  border-shadeBlue h-full flex items-center justify-center border-y border-r border-l border-l-gray-300 rounded-r-[6px] px-3  "
                  >
                    <img
                      src={require("../../assets/images/home/GreenArrowDown.png")}
                      alt="Dropdown"
                      className={`h-[8px] w-[16px] text-green transition-transform duration-300 ${
                        showInsurance ? " rotate-180 " : "rotate-0 "
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute top-[45px] left-0 w-[100%] h-[100px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[10px]  ${
                      showInsurance ? " block z-20" : " hidden "
                    }`}
                  >
                    <ul className="">
                      {doctorData?.insurance_company?.length
                        ? doctorData.insurance_company.map((inc) => {
                            return (
                              <li
                                className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none hover:bg-cyanBlue  active-dropdown-item"
                                onClick={() => setselectedInc(inc)}
                                key={inc}
                              >
                                {inc}
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-lightGray text-[15px] font-BasicSans">
                  What’s the reason for your visit?
                </label>
                <div className="h-[40px] w-full flex items-center justify-center mb-[30px] relative">
                  {/* <div className="h-[40px] w-full flex items-center justify-center mb-[30px] relative"> */}
                  <input
                    className="h-full w-full rounded-[5px] border-shadeBlue px-[16px] outline-none placeholder:text-[12px] placeholder:tracking-[3px] bg-white border-opacity-80  rounded-r-none border-y border-l"
                    placeholder="Select Condition"
                    type="text"
                    value={selectedCond}
                    onChange={() => {}}
                    onClick={() => setShowCondition(true)}
                    onBlur={() => {
                      setTimeout(() => {
                        setShowCondition(false);
                      }, 100);
                    }}
                  />
                  <div
                    onClick={() => setShowCondition(!showCondition)}
                    className="cursor-pointer bg-[white]  border-shadeBlue h-full flex items-center justify-center border-y border-r border-l border-l-gray-300 rounded-r-[6px] px-3  "
                  >
                    <img
                      src={require("../../assets/images/home/GreenArrowDown.png")}
                      alt="Dropdown"
                      className={`h-[8px] w-[16px] text-green transition-transform duration-300 ${
                        showCondition ? " rotate-180 " : "rotate-0 "
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute top-[45px] left-0 w-[100%] h-[100px] bg-white overflow-auto shadow-lg ring-1 ring-black ring-opacity-5 pl-[20px] pt-[20px] rounded-[10px]  ${
                      showCondition ? " block z-20" : " hidden "
                    }`}
                  >
                    <ul className="">
                      {doctorData?.medical_condition?.length
                        ? doctorData.medical_condition.map((cond) => {
                            return (
                              <li
                                className="font-BasicSans relative cursor-default hover:cursor-pointer pt-[5px] select-none hover:bg-cyanBlue  active-dropdown-item"
                                onClick={() => setselectedCond(cond)}
                                key={cond}
                              >
                                {cond}
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  </div>
                </div>

                {/* <input
                    className="h-full w-full rounded-[5px] border-shadeBlue px-[16px] outline-none placeholder:text-[12px] placeholder:tracking-[3px] bg-white border-opacity-80  rounded-r-none border-y border-l"
                    placeholder="Select Condition"
                    type="text"
                  />
                  <div className="cursor-pointer bg-[white]  border-shadeBlue h-full flex items-center justify-center border-y border-r border-l border-l-gray-300 rounded-r-[6px] px-3 ">
                    <img
                      src={require("../../assets/images/home/GreenArrowDown.png")}
                      alt="Dropdown"
                      className="h-[8px] w-[16px] text-green rotate-0 transition-transform duration-300"
                    />
                  </div> */}
                {/* </div> */}
              </div>
              <div className="">
                <label className="text-lightGray text-[15px] font-BasicSans">
                  Have you visited before?{" "}
                </label>
                <div className="flex flex-col w-full ">
                  <div className="w-full h-[40px] relative border-shadeBlue border-[1px] flex items-center p-[5px] text-[12px] cursor-pointer rounded-[6px]">
                    <div
                      onClick={() => settype(1)}
                      className={`transition-all duration-[0.3s] ease-[linear] rounded-[2px] h-full  flex items-center justify-center text-center w-full ${
                        type === 1 ? " z-10 text-white " : " text-black "
                      } `}
                    >
                      YES
                    </div>
                    <div
                      onClick={() => settype(2)}
                      className={`transition-all duration-[0.3s] ease-[linear] rounded-[2px] h-full flex items-center justify-center text-center w-full ${
                        type === 2 ? " z-10 text-white " : " text-black "
                      } `}
                    >
                      NO
                    </div>
                    <div
                      className={`absolute h-[30px] w-[50%] -z-2 bg-shadeBlue transition-transform duration-400 rounded-[0.2rem]  ${
                        type === 2 ? " translate-x-[94%]" : " translate-x-[2%]"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <label className="text-lightGray text-[15px] font-BasicSans">
                  Type of Visit{" "}
                </label>
                <div className="flex flex-col w-full">
                  <div className="w-full h-[40px] relative border-shadeBlue border-[1px] flex items-center p-[5px] text-[12px] cursor-pointer rounded-[6px]">
                    <div
                      onClick={() => {
                        setVisit(1);
                        setSelectedDate("");
                        setInPersonSlot([]);
                        setVirtualSlot([]);
                      }}
                      className={`transition-all duration-[0.3s] ease-[linear] rounded-[3px] h-full flex items-center justify-center text-center w-full ${
                        visit === 1 ? " text-white z-10" : " text-black "
                      } `}
                    >
                      InPerson
                    </div>
                    <div
                      onClick={() => {
                        setVisit(2);
                        setSelectedDate("");
                        setInPersonSlot([]);
                        setVirtualSlot([]);
                      }}
                      className={`transition-all duration-[0.3s] ease-[linear] rounded-[3px] h-full flex items-center justify-center text-center w-full ${
                        visit === 2 ? " text-white z-10" : " text-black "
                      } `}
                    >
                      Virtual
                    </div>
                    <div
                      className={`absolute h-[30px] w-[50%] -z-2 bg-shadeBlue transition-transform duration-400 rounded-[0.2rem]  ${
                        visit === 2 ? " translate-x-[94%]" : " translate-x-[2%]"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <label className="text-lightGray text-[15px] font-BasicSans">
                  Clinic address
                </label>
                <div className="h-[40px] w-full flex items-center justify-center ">
                  <input
                    className="h-full w-full rounded-[5px] border-shadeBlue px-[16px] outline-none placeholder:text-[12px] placeholder:tracking-[3px] bg-white border-opacity-80  rounded-r-none border-y border-l"
                    placeholder="Select address"
                    type="text"
                    onChange={() => {}}
                    value={doctorData.doctor_clinic_address || ""}
                  />
                  <div className="cursor-pointer bg-[white]  border-shadeBlue h-full flex items-center justify-center border-y border-r border-l border-l-gray-300 rounded-r-[6px] px-3  ">
                    <img
                      src={require("../../assets/images/home/GreenArrowDown.png")}
                      alt="Dropdown"
                      className="h-[8px] w-[16px] text-green rotate-0 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <label className="text-lightGray text-[15px] font-BasicSans">
                  Select date time availability
                </label>
                <div className="flex flex-row gap-3 pt-[20px] relative">
                  <span
                    onClick={() => onDateChange("back")}
                    className="flex items-center justify-center absolute top-[35px] left-[-70px] h-[50px] p-[15px]  bg-white border-2 border-cyanBlue cursor-pointer"
                  >
                    <img
                      src={require("../../assets/images/home/GreenArrowLeft.png")}
                      alt="Dropdown"
                      className="h-[16px] w-[16px] text-green rotate-0 transition-transform duration-300"
                    />
                  </span>
                  {doctorSlot?.InPerson?.map((day, i) => {
                    return (
                      <span
                        onClick={() =>
                          onDaySelect(day, doctorData?.time_slots?.Virtual?.[i])
                        }
                        key={day.date}
                        className={`font-BasicSans text-[12px] sm:text-[15px] text-center flex justify-center items-center rounded-[8px] py-[5px] w-[55px] ${getClassForDay(
                          day,
                          doctorData?.time_slots?.Virtual?.[i]
                        )}`}
                      >
                        {day.day.slice(0, 3)}
                        <br />
                        {day.date.split("-")[2]}
                        <br />
                        {month[parseInt(day.date.split("-")[1]) - 1]}
                      </span>
                    );
                  })}
                  <span
                    onClick={() => onDateChange("forward")}
                    className="flex items-center justify-center absolute top-[35px] right-[-20px] h-[50px] p-[15px]  bg-white border-2 border-cyanBlue cursor-pointer"
                  >
                    <img
                      src={require("../../assets/images/home/GreenArrowRight.png")}
                      alt="Dropdown"
                      className="h-[16px] w-[16px] text-green rotate-0 transition-transform duration-300"
                    />
                  </span>
                </div>
                <div className="mt-[30px]">
                  {visit === 1
                    ? inPersonSlot.map((time) => {
                        return (
                          <span className="bg-shadeBlue text-white rounded-[5px] font-BasicSans text-[12px] px-[15px] py-[5px] ml-[10px]">
                            {tConvert(time.from)}
                          </span>
                        );
                      })
                    : virtualSlot.map((time) => {
                        return (
                          <span className="bg-shadeBlue text-white rounded-[5px] font-BasicSans text-[12px] px-[15px] py-[5px] ml-[10px]">
                            {tConvert(time.from)}
                          </span>
                        );
                      })}
                </div>
                <div className="flex gap-2 mt-[30px] items-center">
                  <InputCheckbox
                    id="appointmentBox"
                    value="yes"
                    heightWidth="h-[20px] w-[20px]"
                    margin="m-0"
                  />
                  <p className="inline-block text-codGray font-BasicSans text-[15px] ">
                    I Certify that the information provided by me is accurate
                    for insurance and payment.
                  </p>
                </div>
                <div className="my-[40px] text-center">
                  <button className="text-white font-BasicSansBold text-[15px] tracking-[1px] px-[30px] py-[10px] bg-shadeBlue rounded-[100px]">
                    BOOK AN APPOINTMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
