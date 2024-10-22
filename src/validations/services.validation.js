import Joi from "joi";

export const addServiceSchema = Joi.object({
  Title: Joi.string()
    .required()
    .messages({
      "string.empty": "Title is required.",
      "any.required": "Title is required.",
    }),
  Description: Joi.string()
    .required()
    .messages({
      "string.empty": "Description is required.",
      "any.required": "Description is required.",
    }),
  Icon: Joi.string()
    .required()
    .messages({
      "string.empty": "Icon is required.",
      "any.required": "Icon is required.",
    }),
});



export const updateServiceSchema = Joi.object({
  Title: Joi.string().messages({
    "string.empty": "Title cannot be empty.",
  }),
  Description: Joi.string().messages({
    "string.empty": "Description cannot be empty.",
  }),
  Icon: Joi.string().messages({
    "string.empty": "Icon cannot be empty.",
  }),
});
