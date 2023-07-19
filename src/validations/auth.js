
// import Joi from "joi";
import * as Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.email": "Enter valid email",
      "string.empty": "Email is a required field",
      "any.required": "Email is a required field",
    }),
  password: Joi.string().allow(""),
});
