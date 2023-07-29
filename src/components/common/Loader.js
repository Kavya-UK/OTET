import React from 'react'

export default function Loader({className}) {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <img
        alt="Logo"
        src={require("../../assets/images/icons/Loader.gif")}
        className={className}
      />
    </div>
  );
}
