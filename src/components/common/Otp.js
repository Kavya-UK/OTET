import React, { useEffect, useState } from "react";
import InputOtpScreen from "./InputOtpScreen";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { forgotPass2Schema } from "../../validations/auth.js";
export default function Otp({ control, setValue, register, errors }) {
  const fields = ["otp-1", "otp-2", "otp-3", "otp-4", "otp-5", "otp-6"];
  const [timer, setTimer] = useState(23);
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

  useEffect(() => {
    const counter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(counter);
  }, [timer]);

  return (
    <>
      {" "}
      {fields.map((field, ind) => {
        return (
          <div key={field}>
            <InputOtpScreen
              maxLength={1}
              handleChange={handleChange}
              id={field}
              onPaste={handlePaste}
              control={control}
              schema={forgotPass2Schema[field]}
              register={register}
              isValidationSet={true}
              setValue={setValue}
              errorMessage={errors[field]?.message}
            />
            {ind === 5 && (
              <span className="relative sm:left-[20px] block text-lightBlue font-BasicSans  mt-[10px]">
                0:{timer}
              </span>
            )}
          </div>
        );
      })}
    </>
  );
}
