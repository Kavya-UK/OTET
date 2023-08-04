import React, { forwardRef, useEffect, useState } from "react";
import {
  fetchDoctorData,
  fetchDoctorSlot,
} from "../../redux/thunk/featuredDoctor.thunk";
import { useSelector, useDispatch } from "react-redux";
import ReactDatePicker from "react-datepicker";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../common/Loader";

const DateInputComponent = forwardRef(({ value, onClick }, ref) => {
  return (
    <div className="">
      <img
        onClick={onClick}
        ref={ref}
        src={require("../../assets/images/home/Calendar.png")}
        alt="calendar"
      />
    </div>
  );
});

export default function DoctorProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctorData = useSelector(
    (state) => state.featuredpractioner.doctorData
  );
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const doc_url = query.get("doc_url");
  const doctorSlot = useSelector(
    (state) => state.featuredpractioner.doctorSlot
  );
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
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState({});
  const [viewDetails, setviewDetails] = useState(false);
  const [slotError, setSlotError] = useState(false);
  const [inPersonSlot, setInPersonSlot] = useState([]);
  const [virtualSlot, setVirtualSlot] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  // const [startDate, setStartDate] = useState("");
  useEffect(() => {
    dispatch(fetchDoctorData({ url: doc_url }));
    const d = new Date().toLocaleDateString("fr-CA");
    dispatch(
      fetchDoctorSlot({ doctor_id: doc_url.split("/")[1], time_slot_date: d })
    );
  }, []);
  useEffect(() => {
    if (doctorData.doctor_name) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [doctorData]);
  const onDateChange = (date) => {
    setSelectedDate("");
    setInPersonSlot([]);
    setVirtualSlot([]);
    const d = new Date(date).toLocaleDateString("fr-CA");
    setStartDate(date);
    dispatch(
      fetchDoctorSlot({ doctor_id: doc_url.split("/")[1], time_slot_date: d })
    );
  };
  const onDaySelect = (inPerson, virtual) => {
    setSelectedSlot({});
    if (inPerson.value.length >= 1 || virtual.value.length >= 1) {
      console.log(selectedDate);
      setSelectedDate(inPerson.date);
      setInPersonSlot(inPerson.value);
      setVirtualSlot(virtual.value);
    }
  };
  const getClassForDay = (inPerson, virtual) => {
    if (selectedDate === inPerson.date) return " bg-shadeBlue text-white ";
    else if (inPerson?.value?.length >= 1 || virtual?.value?.length >= 1)
      return " bg-Turquoise text-codGray ";
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
  const scheduleApp = () => {
    if (!selectedSlot.time) {
      setSlotError(true);
    } else {
      setSlotError(false);
      navigate(
        `/schedule-appointment?doc_url=${doc_url}&date=${selectedDate}&slot=${selectedSlot.type}_${selectedSlot.time}`
      );
    }
  };
  const selectSlot = (time, type, selectedDate) => {
   
    setSelectedSlot({ type, time: time.from, selectedDate });
  };
  return (
    <>
      <div className="mb-[90px] pt-[50px] md:pt-[150px] px-[20px] md:px-[50px]">
        {doctorData.doctor_name ? (
          <>
            <div className="text-left">
              <h1 className=" font-BasicSans text-[12px] sm:text-[24px] md:text-[30px] font-semibold text-codGray tracking-[2px] sm:tracking-[5px]">
                Medicine cure diseases but only doctors can cure patients.
              </h1>
            </div>
            <div className="grid grid-cols-10 sm:gap-10 mt-[30px]">
              <div className="col-span-10 lg:col-span-6 grid grid-cols-2 gap-2 sm:gap-5 ">
                <div className="col-span-2 sm:col-span-1 h-[200px] sm:h-[300px] md:h-[450px] w-full cursor-pointer">
                  <img
                    alt="doctor"
                    className="rounded-[31px] w-full h-full object-cover"
                    src={require("../../assets/images/specialities/Doc1.png")}
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="">
                    <h1
                      className={`font-HenrietteRegular font-bold text-[18px] md:text-[22px] text-codGray ${
                        loading ? " min-h-[30px] bg-gray-50 rounded-md " : " "
                      }`}
                    >
                      {doctorData.doctor_name}
                    </h1>
                    <span className="inline-block pr-[15px] font-BasicSans text-[14px] md:text-[18px] text-codGray">
                      {doctorData.medical_speciality?.join(", ")}
                    </span>
                    <span className="font-BasicSans text-[14px] md:text-[18px] text-codGray">
                      {doctorData.country?.[0]}
                    </span>
                    <p className="font-BasicSans text-[14px] md:text-[18px] text-codGray md:mt-[10px]">
                      {doctorData.education?.[0]}
                    </p>
                    <div className="pt-[10px] flex items-center">
                      <img
                        className="inline-block w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
                        src={require("../../assets/images/specialities/Group 1849.png")}
                        alt="group"
                      />
                      <span className="inline-block pl-[20px] text-[14px] md:text-[18px] font-BasicSans text-codGray">
                        {doctorData.languages_spoken?.join(", ")}
                      </span>
                    </div>
                    <div className="pt-[10px] flex items-center">
                      <img
                        className="inline-block w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
                        src={require("../../assets/images/specialities/Group 1850.png")}
                        alt="group"
                      />
                      <span className="inline-block pl-[20px] text-[14px] md:text-[18px] font-BasicSans text-codGray">
                        {doctorData.available_in?.join(", ")}
                      </span>
                    </div>
                  </div>
                  <p className="font-HenrietteRegular font-bold text-[16px] md:text-[20px] text-codGray mt-[20px] mb-[10px] ">
                    Insurance
                  </p>
                  <p className="text-codGray font-BasicSans text-[14px] md:text-[18px]">
                    {doctorData.insurance_company}
                  </p>
                  <p className="font-HenrietteRegular font-bold text-[16px] md:text-[20px] mt-[20px] md:mb-[10px] text-codGray ">
                    Education
                  </p>
                  <p className="text-codGray font-BasicSans text-[14px] md:text-[18px]">
                    {doctorData.institute_attended}
                  </p>
                </div>
              </div>

              <div className="  col-span-10 lg:col-span-4">
                <div>
                  <p className="font-HenrietteRegular font-bold text-[18px] md:text-[22px] text-codGray mt-[20px] md:mt-0">
                    About {doctorData.doctor_name}
                  </p>
                  <p
                    className={`transition-all duration-[0.3s] ease-[linear] md:mt-[20px] mt-[10px] font-BasicSansLight text-[16px]  text-eastBay ${
                      !viewDetails ? " max-h-[60px] truncate-content" : " "
                    }`}
                  >
                    {doctorData.doctor_description}
                  </p>
                  <span
                    onClick={() => setviewDetails((f) => !f)}
                    className="text-[14px] font-BasicSans underline text-mustardYellow  cursor-pointer"
                  >
                    {viewDetails ? "View less" : "View more"}
                  </span>
                </div>
              </div>
              <div className="col-span-10 lg:col-span-6  ">
                <div className=" bg-white ">
                  <p className="font-HenrietteRegular font-bold text-[18px] md:text-[22px] text-codGray mt-[20px] md:mt-[30px] mb-[20px]">
                    Availability
                  </p>
                  <div className="flex flex-row gap-2 sm:gap-4 flex-wrap">
                    {doctorSlot?.InPerson?.map((day, i) => {
                      return (
                        <span
                          onClick={() =>
                            onDaySelect(day, doctorSlot?.Virtual?.[i])
                          }
                          key={day.date}
                          className={`font-BasicSans cursor-pointer  text-[12px] sm:text-[15px] text-center flex justify-center items-center  rounded h-[60px] w-[60px] ${getClassForDay(
                            day,
                            doctorSlot?.Virtual?.[i]
                          )}`}
                        >
                          {month[parseInt(day.date.split("-")[1]) - 1]}{" "}
                          {day.date.split("-")[2]}
                        </span>
                      );
                    })}

                    <div className="w-[68px] sm:w-[58px] h-[65px] sm:h-[56px]">
                      <ReactDatePicker
                        className="bg-white font-Basicsans text-[1.3rem] text-codGray tracking-[5px] outline-none"
                        dateFormat="dd-mm-yyyy"
                        selected={startDate}
                        minDate={new Date()}
                        onChange={(date) => onDateChange(date)}
                        customInput={<DateInputComponent />}
                        closeOnScroll={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[20px]">
                  <p className=" font-BasicSansBold text-[18px] md:text-[22px] text-codGray mb-[20px]">
                    {selectedDate &&
                      new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(selectedDate))}
                  </p>
                  <div className="flex flex-col gap-2 sm:gap-4">
                    {inPersonSlot.length ? (
                      <>
                        <p className="text-codGray font-BasicSans text-[16px]">
                          InPerson
                        </p>
                        <div className="grid grid-cols-5 gap-2 sm:gap-4">
                          {inPersonSlot.map((time) => {
                            return (
                              <span
                                key={time}
                                onClick={() =>
                                  selectSlot(time, "inperson", selectedDate)
                                }
                                className={`font-BasicSans cursor-pointer  text-[12px] sm:text-[15px] flex justify-center items-center  rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px] ${
                                  selectedSlot.time === time.from &&
                                  selectedSlot.type === "inperson"
                                    ? " bg-shadeBlue text-white "
                                    : " bg-Turquoise text-black "
                                }`}
                              >
                                {tConvert(time.from)}
                              </span>
                            );
                          })}
                        </div>
                      </>
                    ) : null}

                    {virtualSlot.length ? (
                      <>
                        <p className="text-codGray font-BasicSans text-[16px]">
                          Virtual
                        </p>
                        <div className="grid grid-cols-5 gap-2 sm:gap-4">
                          {virtualSlot.map((time) => {
                            return (
                              <span
                                key={time}
                                onClick={() =>
                                  selectSlot(time, "virtual", selectedDate)
                                }
                                className={`font-BasicSans cursor-pointer  text-[12px] sm:text-[15px] flex justify-center items-center  rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px] ${
                                  selectedSlot.time === time.from &&
                                  selectedSlot.type === "virtual"
                                    ? " bg-shadeBlue text-white "
                                    : " bg-Turquoise text-black "
                                }`}
                              >
                                {tConvert(time.from)}
                              </span>
                            );
                          })}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <div>
                  {slotError && (
                    <p className="text-red-600 font-BasicSansLight text-[18px]">
                      *Please select a time slot
                    </p>
                  )}
                </div>
                <div className="col-span-2 text-center lg:text-right">
                  <div className="pt-[20px] md:pt-[120px]">
                    <button
                      onClick={() => scheduleApp()}
                      className="bg-shadeBlue text-white rounded-[100px] sm:w-[300px] md:h-[55px] p-[10px] font-BasicSansLight text-[14px] sm:text-[18px]"
                    >
                      Schedule an appointment
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-10 md:col-span-4">
                <p className="font-HenrietteRegular font-bold text-[18px] sm:text-[22px] text-codGray mt-[30px] mb-[20px]">
                  Practice Location
                </p>
                <p className="text-codGray font-BasicSans text-[14px] sm:text-[16px]">
                  {doctorData.doctor_clinic_address}
                </p>
                <p className="pt-[30px] text-center text-[14px] sm:text-[16px] font-BasicSans text-black">
                  Location doesnt exists
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="relative top-[-80px]">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}
