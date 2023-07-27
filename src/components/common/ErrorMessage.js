import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ errorMessage, errorFor }) => {

  return (
    <label
      htmlFor={errorFor}
      className="text-[red] font-normal h-[1rem] text-[12px] sm:text-[14px]"
    >
      {errorMessage}&nbsp;
    </label>
  );
};
ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
  errorFor: PropTypes.string,
};

export default ErrorMessage;
