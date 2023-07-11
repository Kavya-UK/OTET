import React, { useEffect, useState } from "react";
import { fetchDoctorData } from "../../Redux/thunk/featuredDoctor.thunk";
import { useSelector, useDispatch } from "react-redux";

export default function DoctorProfile() {
  const dispatch = useDispatch();
  const doctorData = useSelector(
    (state) => state.featuredpractioner.doctorData
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
  const [inPersonSlot, setInPersonSlot] = useState([]);
  const [virtualSlot, setVirtualSlot] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(fetchDoctorData({ url: "dr-afnan-haq/1" }));
  }, []);
  useEffect(() => {
    if (doctorData.doctor_name) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [doctorData]);
  const onDaySelect = (inPerson, virtual) => {
    if (inPerson.value.length >= 1 || virtual.value.length >= 1){
      setSelectedDate(inPerson.date);
      setInPersonSlot(inPerson.value);
      setVirtualSlot(virtual.value);
    }
  };
  const getClassForDay = (inPerson, virtual) => {
    console.log({ inPerson, virtual });
    if (selectedDate === inPerson.date) return " bg-shadeBlue text-white ";
    else if (inPerson.value.length >= 1 || virtual.value.length >= 1)
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
  }
  return (
    <>
      <div className="mb-[90px] pt-[150px] px-[50px]">
        <div className="text-left">
          <h1 className=" font-BasicSans text-[18px] sm:text-[30px] font-semibold text-codGray tracking-[5px]">
            Medicine cure diseases but only doctors can cure patients.
          </h1>
        </div>
        <div className="grid grid-cols-10 gap-10 mt-[30px]">
          <div className="col-span-10 lg:col-span-6 grid grid-cols-2 gap-5">
            <div className="col-span-1 h-[400px] md:h-[450px] w-full">
              <img
                alt="doctor"
                className="rounded-[31px] w-full h-full object-cover"
                src={require("../../assets/images/specialities/Doc1.png")}
              />
            </div>

            <div className="col-span-1">
              <div className="">
                <h1
                  className={`font-HenrietteBold text-[22px] text-codGray ${
                    loading ? " min-h-[30px] bg-gray-50 rounded-md " : " "
                  }`}
                >
                  {doctorData.doctor_name}
                </h1>
                <span className="inline-block pr-[15px] font-BasicSans text-[1.1rem] text-codGray">
                  {doctorData.medical_speciality?.join(", ")}
                </span>
                <span className="font-BasicSans text-[1.1rem] text-codGray">
                  {doctorData.country?.[0]}
                </span>
                <p className="font-BasicSans text-[15px] text-codGray mt-[10px]">
                  {doctorData.education?.[0]}
                </p>
                <div className="pt-[10px] flex items-center">
                  <img
                    className="inline-block w-[40px] h-[40px]"
                    src={require("../../assets/images/specialities/Group 1849.png")}
                    alt="group"
                  />
                  <span className="inline-block pl-[20px] text-[1.1rem] font-BasicSans text-codGray">
                    {doctorData.languages_spoken?.join(", ")}
                  </span>
                </div>
                <div className="pt-[10px] flex items-center">
                  <img
                    className="inline-block w-[40px] h-[40px]"
                    src={require("../../assets/images/specialities/Group 1850.png")}
                    alt="group"
                  />
                  <span className="inline-block pl-[20px] text-[20px] font-BasicSans text-codGray">
                    {doctorData.available_in?.join(", ")}
                  </span>
                </div>
              </div>
              <p className="font-HenrietteBold text-[22px] text-codGray mt-[20px] mb-[10px] ">
                Insurance
              </p>
              <p className="text-codGray font-BasicSans text-[1.1rem]">
                {doctorData.insurance_company}
              </p>
              <p className="font-HenrietteBold text-[22px] mt-[20px] mb-[10px] text-codGray ">
                Education
              </p>
              <p className="text-codGray font-BasicSans text-[1.1rem]">
                {doctorData.institute_attended}
              </p>
            </div>
            <div className="col-span-2 bg-white ">
              <p className="font-HenrietteBold text-[22px] text-codGray mt-[30px] mb-[20px]">
                Availability
              </p>
              <div className="flex flex-row gap-4 ">
                {doctorData.time_slots?.InPerson.map((day, i) => {
                  return (
                    <span
                      onClick={() =>
                        onDaySelect(day, doctorData?.time_slots?.Virtual?.[i])
                      }
                      key={day.date}
                      className={`font-BasicSans cursor-pointer  text-[12px] sm:text-[15px] text-center flex justify-center items-center  rounded h-[60px] w-[60px] ${getClassForDay(
                        day,
                        doctorData?.time_slots?.Virtual?.[i]
                      )}`}
                    >
                      {month[parseInt(day.date.split("-")[1]) - 1]}{" "}
                      {day.date.split("-")[2]}
                    </span>
                  );
                })}

                <div className="w-[68px] sm:w-[58px] h-[65px] sm:h-[56px]">
                  <img
                    src={require("../../assets/images/home/Calendar.png")}
                    alt="calendar"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <p className=" font-BasicSansBold text-[22px] text-codGray mb-[20px]">
                Sep 10, 2022
              </p>
              <div className="flex flex-col gap-4">
                {inPersonSlot.length ? (
                  <>
                    <p className="text-codGray font-BasicSans text-[1.1rem]">
                      InPerson
                    </p>
                    <div className="grid grid-cols-5 gap-4">
                      {inPersonSlot.map((time) => {
                        return (
                          <span className="font-BasicSans cursor-pointer text-black text-[12px] sm:text-[15px] flex justify-center items-center bg-Turquoise rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px]">
                            {tConvert(time.from)}
                          </span>
                        );
                      })}
                    </div>
                  </>
                ): null}

                {virtualSlot.length ? (
                  <>
                    <p className="text-codGray font-BasicSans text-[1.1rem]">
                      Virtual
                    </p>
                    <div className="grid grid-cols-5 gap-4">
                      {virtualSlot.map((time) => {
                        return (
                          <span className="font-BasicSans cursor-pointer text-black text-[12px] sm:text-[15px] flex justify-center items-center bg-Turquoise rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px]">
                            {tConvert(time.from)}
                          </span>
                        );
                      })}
                    </div>
                  </>
                ): null}

                {/* <span className="font-BasicSans cursor-pointer text-codGray text-[12px] sm:text-[15px] flex justify-center items-center bg-lightSkyBlue rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px]">
                  08:00 AM
                </span>
                <span className="font-BasicSans cursor-pointer text-codGray text-[12px] sm:text-[15px] flex justify-center items-center bg-lightSkyBlue rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px]">
                  08:00 AM
                </span>
                <span className="font-BasicSans cursor-pointer text-codGray text-[12px] sm:text-[15px] flex justify-center items-center bg-lightSkyBlue rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px]">
                  08:00 AM
                </span>
                <span className="font-BasicSans cursor-pointer text-codGray text-[12px] sm:text-[15px] flex justify-center items-center bg-lightSkyBlue rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px]">
                  08:00 AM
                </span>
                <span className="font-BasicSans cursor-pointer text-codGray text-[12px] sm:text-[15px] flex justify-center items-center bg-lightSkyBlue rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px]">
                  08:00 AM
                </span>
                <span className="font-BasicSans cursor-pointer text-codGray text-[12px] sm:text-[15px] flex justify-center items-center bg-lightSkyBlue rounded-[5px] h-[60px] sm:h-[43px] w-[150px] sm:w-[130px]">
                  08:00 AM
                </span> */}
              </div>
            </div>
            <div className="col-span-2 text-center lg:text-right">
              <div className="pt-[120px]">
                <button className="bg-shadeBlue text-white rounded-[100px] w-[300px] h-[55px] font-BasicSansLight text-[18px]">
                  Schedule an appointment
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-10 lg:col-span-4">
            <div>
              <p className="font-HenrietteBold text-[22px] text-codGray">
                About Alexander
              </p>
              <p className="mt-[20px] font-BasicSansLight text-[1.1rem] max-w-[80%] text-eastBay">
                {doctorData.doctor_description}
              </p>
            </div>
            <div className="">
              <p className="font-HenrietteBold text-[22px] text-codGray mt-[30px] mb-[20px]">
                Practice Location
              </p>
              <p className="text-codGray font-BasicSans text-[1.1rem]">
                {doctorData.doctor_clinic_address}
              </p>
              <p className="pt-[30px] text-center font-BasicSans text-black">
                Location doesnt exists
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
