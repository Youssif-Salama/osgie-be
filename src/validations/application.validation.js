import Joi from "joi";

export const addApplicationSchema = Joi.object({
  JobId: Joi.string()
    .required()
    .messages({
      "string.empty": "JobId is required.",
      "any.required": "JobId is required.",
    }),
  Name: Joi.string()
    .required()
    .messages({
      "string.empty": "Name is required.",
      "any.required": "Name is required.",
    }),
  Email: Joi.string()
    .email()
    .required()
    .messages({
      "string.empty": "Email is required.",
      "any.required": "Email is required.",
      "string.email": "Email must be a valid email address.",
    }),
  Phone: Joi.string()
    .required()
    .messages({
      "string.empty": "Phone is required.",
      "any.required": "Phone is required.",
    }),
  Address: Joi.string()
    .required()
    .messages({
      "string.empty": "Address is required.",
      "any.required": "Address is required.",
    }),
  CoverLetter: Joi.string()
    .required()
    .messages({
      "string.empty": "Cover Letter is required.",
      "any.required": "Cover Letter is required.",
    }),
  Resume: Joi.string()
    .required()
    .messages({
      "string.empty": "Resume is required.",
      "any.required": "Resume is required.",
    }),
  Consideration: Joi.boolean()
    .default(false),  // Optional field with default value
  Watch: Joi.boolean()
    .default(false),  // Optional field with default value
  Rejected: Joi.boolean()
    .default(false)   // Optional field with default value
});
