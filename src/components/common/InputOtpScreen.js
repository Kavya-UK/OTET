import React from 'react'
import ErrorMessage from './ErrorMessage';

export default function InputOtpScreen({
  id,
  handleChange,
  maxLength,
  onPaste,
  errorMessage,
  ...otherProps
}) {
  return (
    <div
      className={`w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] sm:p-[10px] border-[2px] rounded-[5px]  inline-block ${
        errorMessage ? " border-red-600" : " border-shadeGray"
      }`}
    >
      <input
        onChange={handleChange}
        id={id}
        name={id}
        maxLength={maxLength}
        onKeyDown={handleChange}
        type="text"
        onPaste={onPaste}
        className="w-full h-full outline-none p-[5px] text-center text-[25px]"
        {...(otherProps.isValidationSet
          ? {
              ...otherProps.register(id, {
                ...otherProps.schema,
              }),
            }
          : null)}
      />
    </div>
  );
}
