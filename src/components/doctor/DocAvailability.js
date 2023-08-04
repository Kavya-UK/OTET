import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFeaturedDoctors } from "../../redux/thunk/featuredDoctor.thunk";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader";
import AuthenticationModal from "../common/AuthenticationModal"
export default function DocAvailability() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

  const [page, setPage] = useState(1);
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
  const featuredDoc = useSelector(
    (state) => state.featuredpractioner.featuredDocs
  );
  const isFeaturedDocLoading = useSelector(
    (state) => state.featuredpractioner.isFeaturedDocLoading
  );
  const docTotalCount = useSelector(
    (state) => state.featuredpractioner.totalCount
  );
  const specialityList = useSelector(
    (state) => state.speciality.specialityList
  );
  const conditionsList = useSelector(
    (state) => state.conditions.conditionsList
  );
  const areasList = useSelector((state) => state.locations.areas);
  const totalPage = Math.ceil(docTotalCount / 4);
  const pageinate = (page) => {
    if (page > 0 && page <= totalPage) {
      setPage(page);
      const area = query.get("area");
      const specialty = query.get("specialty");
      const date = query.get("date");
      const curdate = new Date(`${date}`);
      var day = days[curdate.getDay()];

      const param = {
        paginate: 4,
        page: page,
        ...(area ? { serving_areas: area?.split("_")[1] } : {}),
        ...(specialty ? { specialty: specialty?.split("_")[1] } : {}),
        ...(date ? { time_slot_day: day } : {}),
      };

      dispatch(fetchFeaturedDoctors(param));
      // dispatch(fetchFeaturedDoctors({ paginate: 4, page: page }));
    }
  };
  const getClassForDay = (inPerson, virtual) => {
    if (inPerson?.value?.length >= 1 || virtual?.value?.length >= 1)
      return " bg-Turquoise text-codGray cursor-default";
    else return " bg-ashGray text-codGray cursor-default";
  };
  useEffect(() => {
    const area = query.get("area");
    const specialty = query.get("specialty");
    const date = query.get("date");
    const curdate = new Date(`${date}`);
    var day = days[curdate.getDay()];
    const param = {
      paginate: 4,
      page: 1,
      ...(area ? { serving_areas: area.split("_")[1] } : {}),
      ...(specialty ? { specialty: specialty.split("_")[1] } : {}),
      ...(date ? { time_slot_day: day } : {}),
    };

    dispatch(fetchFeaturedDoctors(param));
  }, []);
  return (
    <>
      {/* {showModal && (
        <AuthenticationModal
          title="Authentication Required"
          description="This action requires you to Login"
          closeModal={() => setShowModal(false)}
        />
      )} */}
      {isFeaturedDocLoading ? (
        <div className="flex justify-start relative -top-[80px]">
          <Loader />
        </div>
      ) : (
        featuredDoc.map((items) => {
          return (
            <div
              key={items.doctor_name}
              className="px-[20px] pt-[20px] md:px-[40px] md:pt-[40px] w-full"
            >
              <div className="border-b-2 pb-[20px] transition-all duration-[0.3s] ease-[linear] flex flex-col xl:flex-row  w-full justify-between">
                <div className="flex gap-5">
                  <div
                    onClick={() =>
                      navigate(`/doctor-profile?doc_url=${items.seo_url}`)
                    }
                    className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-[20px] cursor-pointer"
                  >
                    <img
                      className="transition-all duration-[0.3s] ease-[linear] w-full h-full object-contain rounded-[20px]"
                      src={require("../../assets/images/specialities/Doc1.png")}
                      alt="doctor"
                    />
                  </div>
                  <div
                    onClick={() =>
                      navigate(`/doctor-profile?doc_url=${items.seo_url}`)
                    }
                    className="cursor-pointer"
                  >
                    <h1 className="transition-all duration-[0.3s] ease-[linear] font-HenrietteRegular text-[16px] md:text-[24px] text-codGray font-semibold">
                      {items.doctor_name}
                    </h1>
                    <span className="transition-all duration-[0.3s] ease-[linear] inline-block pr-[15px] font-BasicSans text-[13px] md:text-[16px] text-codGray">
                      {items.medical_speciality}
                    </span>
                    <span className="transition-all duration-[0.3s] ease-[linear] font-BasicSans text-[13px] md:text-[16px] text-codGray">
                      {items.country}
                    </span>
                    <p className="font-BasicSans text-[12px] md:text-[13px] text-codGray mt-[5px] md:mt-[10px]">
                      {items.education}
                    </p>
                    <div className="md:pt-[10px] flex items-center">
                      <img
                        className="inline-block w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
                        src={require("../../assets/images/specialities/Group 1849.png")}
                        alt="group"
                      />
                      <span className="inline-block pl-[10px] text-[13px] md:text-[16px] font-BasicSans text-codGray">
                        {items.languages_spoken.join(", ")}
                      </span>
                    </div>
                    <div className="md:pt-[10px] flex items-center">
                      <img
                        className="inline-block  w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
                        src={require("../../assets/images/specialities/Group 1850.png")}
                        alt="group"
                      />
                      <span className="inline-block pl-[10px] text-[13px] md:text-[16px] font-BasicSans text-codGray">
                        {items.available_in.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="xl:mt-[0px] mt-[20px] flex flex-col xl:pr-[40px]">
                  <div>
                    <h1 className="font-HenrietteRegular text-[16px] md:text-[24px] text-codGray font-semibold">
                      Availability
                    </h1>
                  </div>
                  <div className="transition-all duration-[0.3s] ease-[linear] flex flex-row flex-wrap gap-4 mt-[20px]">
                    {items.time_slots.InPerson.map((avail, i) => {
                      return (
                        <>
                          <div
                            key={avail.date}
                            className={`transition-all duration-[0.3s] ease-[linear] flex flex-col rounded-[8px] px-[15px] items-center p-[8px] ${getClassForDay(
                              avail,
                              items.time_slots?.Virtual?.[i]
                            )}`}
                          >
                            <span className="inline-block font-BasicSansLight text-[12px] font-semibold">
                              {avail.day.substring(0, 3)}
                            </span>
                            <span className="inline-block font-BasicSans text-[12px] rounded-[8px] font-semibold ">
                              {avail.date.split("-")[2]}
                            </span>
                            <span className="inline-block font-BasicSansLight text-[12px] rounded-[8px] font-semibold ">
                              {month[parseInt(avail.date.split("-")[1]) - 1]}
                            </span>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div className="">
                    <div className="flex  xl:justify-between mt-[30px]">
                      <button
                        onClick={() =>
                          navigate(`/doctor-profile?doc_url=${items.seo_url}`)
                        }
                        // onClick={() => setShowModal(true)}
                        className="rounded-[100px] bg-shadeBlue text-white py-[5px] md:py-[10px] px-[8px] md:px-[25px] font-BasicSansBold  md:text-[13px] text-[10px] tracking-[0.8px]"
                      >
                        SCHEDULE AN APPOINTMENT
                      </button>
                      <Link
                        to={`/doctor-profile?doc_url=${items.seo_url}`}
                        className="text-[15px] font-BasicSans underline text-mustardYellow ml-[20px] relative md:top-[10px]"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      {featuredDoc.length ? (
        <ul className="flex flex-row items-center justify-center paginate-doctor-search my-8">
          <li className="">
            <button
              onClick={() => pageinate(page - 1)}
              className="h-5 p-0 mt-1 mr-[0.5rem] sm:mr-[1rem]"
            >
              <img
                className="h-full"
                alt="prev"
                src={require("../../assets/images/specialities/PaginationArrow.png")}
              />
            </button>
          </li>
          {[...Array(totalPage)].map((_, i) => {
            return (
              <li key={`fet_${i}`} className="">
                <span
                  onClick={() => pageinate(i + 1)}
                  className={`cursor-pointer p-[10px] ${
                    page === i + 1
                      ? " bg-gray-300 text-black rounded-[10px]"
                      : ""
                  }`}
                >
                  {i + 1}
                </span>
              </li>
            );
          })}

          <li className="">
            <button
              onClick={() => pageinate(page + 1)}
              className="h-5 p-0 ml-[0.5rem] sm:ml-[1rem] mt-1"
            >
              <img
                className="h-full rotate-180"
                alt="next"
                src={require("../../assets/images/specialities/PaginationArrow.png")}
              />
            </button>
          </li>
        </ul>
      ) : (
        <div className="relative h-full w-full -z-10">
          <div className="flex flex-col justify-center items-center">
            {isFeaturedDocLoading ? (
              ""
            ) : (
              <>
                <img
                  className="w-[250px] h-[400px] -z-10"
                  src={require("../../assets/images/home/zerodoctor.png")}
                  alt="doctor"
                />
                <h2 className="text-[25px] font-BasicSansBold tracking-[3px] text-headingShade">
                  Sorry! No Doctors Found
                </h2>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
