import React from "react";

export default function BufferLoader({}) {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <img className="w-[100px] h-[100px]"
        alt="buffer"
        src={require("../../assets/images/buffer.gif")}
        
      />
    </div>
  );
}
