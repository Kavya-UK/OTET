
import Joi from "joi";
// import * as Joi from "joi";


export const loginSchema = Joi.object({
  phoneNumber: Joi.string().length(10).pattern(/^\d+$/).messages({
    "string.empty": "Phone Number is required",
    "string.length": "Phone number should be 10 char long",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  termsCondition: Joi.bool().invalid(false).required().messages({
    "any.invalid": "Please accept terms and conditions",
  }),
});
export const forgotPass1Schema = Joi.object({
  phoneNumber: Joi.string().length(10).pattern(/^\d+$/).messages({
    "string.empty": "Phone Number is required",
    "string.length": "Phone number should be 10 char long",
  })
});
export const forgotPass2Schema = Joi.object({
  phoneNumber: Joi.string().length(10).pattern(/^\d+$/).messages({
    "string.empty": "Phone Number is required",
    "string.length": "Phone number should be 10 char long",
  }),
  'otp-1': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-2': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-3': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-4': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-5': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-6': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});
export const otpSchema = Joi.object({
  'otp-1': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-2': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-3': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-4': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-5': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  'otp-6': Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});
export const forgotPass3Schema = Joi.object({
  password: Joi.string().min(3).max(15).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should be min 3 char long",
    "string.max": "Password should not be more than 15 char long",
  }),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should be min 3 char long",
    "string.max": "Password should not be more than 15 char long",
    "any.only": "Password should Match",
  }),
});
export const changePassSchema = Joi.object({
  oldPassword: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
  password: Joi.string().min(3).max(15).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should be min 3 char long",
    "string.max": "Password should not be more than 15 char long",
  }),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should be min 3 char long",
    "string.max": "Password should not be more than 15 char long",
    "any.only": "Password should Match",
  }),
});
export const registerSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(50)
    .required()
    .regex(/^[a-z A-Z]+$/)
    .messages({
      "string.empty": "Firstname is required",
      "string.min": "Firstname should be min 2 char long",
      "string.max": "Firstname should not be more than 50 char",
      "string.pattern.base": `Please enter valid first name`,
    }),
  lastName: Joi.string()
    .min(2)
    .max(50)
    .required()
    .regex(/^[a-z A-Z]+$/)
    .messages({
      "string.empty": "Lastname is required",
      "string.min": "Lastname should be min 2 char long",
      "string.max": "Lastname should not be more than 50 char",
      "string.pattern.base": `Please enter valid first name`,
    }),
  gender: Joi.string().required().messages({
    "string.empty": "Gender is required",
  }),
  dateofbirth: Joi.string().required().messages({
    "string.empty": "Date of birth is required",
  }),
  phone: Joi.string().length(10).pattern(/^\d+$/).required().messages({
    "string.empty": "Phone number is required",
    "string.length": "Phone number should be 10 char long",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),
  password: Joi.string().min(3).max(15).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should be min 3 char long",
    "string.max": "Password should not be more than 15 char long",
  }),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should be min 3 char long",
    "string.max": "Password should not be more than 15 char long",
    "any.only": "Password should Match",
  }),
});
