import React from 'react'

export default function LoginFooter({label,info,onClick,customStyle}) {
  return (
    <div
      className={`w-full bg-shadeBlue h-[90px] flex justify-center items-center absolute bottom-0 ${
        info ? "lg:justify-between flex-col lg:flex-row" : "lg:justify-end"
      }`}
    >
      {info ? (
        <p className="lg:pl-[90px] text-white font-BasicSansLight text-[20px] opacity-[50px] tracking-[0px] lg:mb-[0px] mb-[10px]">
          {info}
        </p>
      ) : (
        ""
      )}
      <button
        className={`bg-white h-[40px]  w-[30%] lg:w-[20%] text-codGrayLight rounded-[20px] lg:mr-[30px] items-center font-BasicSans ${customStyle} `}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
