import React, { useEffect } from "react";
import InputOtpScreen from "./InputOtpScreen";

export default function Otp() {

  const fields = ["otp-1", "otp-2", "otp-3", "otp-4", "otp-5", "otp-6"];

  const handleChange = (e) => {
    const currentId = e.target.id.split("-")[1];
    const nextId = parseInt(currentId) + 1;
    const prevId = parseInt(currentId) - 1;
    if (
      e.target.value &&
      e.target.value.length === 1 &&
      nextId <= 6 &&
      e.key !== "Tab" &&
      e.key !== "Backspace"
    ) {
      document.getElementById(`otp-${nextId}`).focus();
    }
    if (!e.target.value && e.key === "Backspace" && prevId >= 1) {
      document.getElementById(`otp-${prevId}`).focus();
    }
  };

  const handlePaste = (e) => {
    if (
      e?.clipboardData?.getData("text") &&
      e?.clipboardData?.getData("text").length === 6
    ) {
      const otp = e?.clipboardData?.getData("text").split("");
      otp.map((di, ind) => {
        document.getElementById(`otp-${ind + 1}`).value = di;
      });
    }
  };

  useEffect(() => {
    document.getElementById(`otp-1`).focus();
  }, []);
  
  return (
    <>
      {" "}
      {fields.map((field, ind) => {
        return (
          <div>
            <InputOtpScreen
              maxLength={1}
              handleChange={handleChange}
              id={field}
              onPaste={handlePaste}
            />
            {ind === 5 && (
              <span className="relative sm:left-[20px] block text-lightBlue font-BasicSans  mt-[10px]">
                0:23
              </span>
            )}
          </div>
        );
      })}
    </>
  );
}
