import React from 'react'

export default function InputOtpScreen({ id, handleChange, maxLength, onPaste }) {
  return (
    <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] sm:p-[10px] border-[2px] rounded-[5px] border-shadeGray inline-block">
      <input
        onChange={handleChange}
        id={id}
        maxLength={maxLength}
        onKeyDown={handleChange}
        type="text"
        onPaste={onPaste}
        className="w-full h-full outline-none p-[5px] text-center text-[25px]"
      />
    </div>
  );
}
