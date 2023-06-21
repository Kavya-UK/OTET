import React from 'react'

export default function InputOtpScreen() {
  return (
    <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] p-[10px] border-[2px] rounded-[5px] border-shadeGray inline-block">
      <input
        maxLength={1}
        type="text"
        className="w-full h-full outline-none p-[5px] text-center text-[25px]"
      />
    </div>
  );
}
