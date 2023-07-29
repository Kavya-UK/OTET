import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFeaturedDoctors } from "../../redux/thunk/featuredDoctor.thunk";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader";

export default function DocAvailability() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      {isFeaturedDocLoading ? (
        <Loader />
      ) : (
        featuredDoc.map((items) => {
          return (
            <div
              key={items.doctor_name}
              className="flex p-[40px] w-full justify-between "
            >
              <div className="flex gap-10">
                <div
                  onClick={() =>
                    navigate(`/doctor-profile?doc_url=${items.seo_url}`)
                  }
                  className="w-[250px] h-[250px] rounded-[20px] cursor-pointer"
                >
                  <img
                    className="w-full h-full object-contain rounded-[20px]"
                    src={require("../../assets/images/specialities/Doc1.png")}
                    alt="doctor"
                  />
                </div>
                <div
                  onClick={() =>
                    navigate(`/doctor-profile?doc_url=${items.seo_url}`)
                  }
                  className="mt-[20px] cursor-pointer"
                >
                  <h1 className=" font-HenrietteBold text-[30px] text-codGray font-semibold">
                    {items.doctor_name}
                  </h1>
                  <span className="inline-block pr-[15px] font-BasicSans text-[20px] text-codGray">
                    {items.medical_speciality}
                  </span>
                  <span className="font-BasicSans text-[20px] text-codGray">
                    {items.country}
                  </span>
                  <p className="font-BasicSans text-[15px] text-codGray mt-[10px]">
                    {items.education}
                  </p>
                  <div className="pt-[10px] flex items-center">
                    <img
                      className="inline-block w-[40px] h-[40px]"
                      src={require("../../assets/images/specialities/Group 1849.png")}
                      alt="group"
                    />
                    <span className="inline-block pl-[20px] text-[20px] font-BasicSans text-codGray">
                      {items.languages_spoken.join(", ")}
                    </span>
                  </div>
                  <div className="pt-[10px] flex items-center">
                    <img
                      className="inline-block w-[40px] h-[40px]"
                      src={require("../../assets/images/specialities/Group 1850.png")}
                      alt="group"
                    />
                    <span className="inline-block pl-[20px] text-[20px] font-BasicSans text-codGray">
                      {items.available_in.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div>
                  <h1 className="font-HenrietteBold text-[30px] text-codGray font-semibold">
                    Availability
                  </h1>
                </div>
                <div className="flex flex-row gap-4 mt-[20px]">
                  {items.time_slots.InPerson.map((avail, i) => {
                    return (
                      <div
                        key={avail.date}
                        className={`flex flex-col rounded-[8px]  items-center p-[8px] ${getClassForDay(
                          avail,
                          items.time_slots?.Virtual?.[i]
                        )}`}
                      >
                        <span className="inline-block font-BasicSansLight text-[15px]">
                          {avail.day.substring(0, 3)}
                        </span>
                        <span className="inline-block font-BasicSans text-[15px] rounded-[8px] ">
                          {avail.date.split("-")[2]}
                        </span>
                        <span className="inline-block font-BasicSansLight text-[15px] rounded-[8px] ">
                          {month[parseInt(avail.date.split("-")[1]) - 1]}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="">
                  <div className="flex justify-between mt-[30px]">
                    <button
                      onClick={() =>
                        navigate(`/doctor-profile?doc_url=${items.seo_url}`)
                      }
                      className="rounded-[100px] bg-shadeBlue text-white py-[10px] px-[25px] font-BasicSansBold text-[15px] tracking-[0.8px]"
                    >
                      SCHEDULE AN APPOINTMENT
                    </button>
                    <Link className="text-[18px] font-BasicSans underline text-mustardYellow ml-[20px] relative top-[10px]">
                      View More
                    </Link>
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
