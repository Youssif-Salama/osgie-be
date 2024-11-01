import Joi from "joi";

export const addWhyChooseUsSchema = Joi.object({
  Title: Joi.string()
    .required()
    .messages({
      "string.empty": "Title is required.",
      "any.required": "Title is required.",
    }),
  Icon: Joi.string()
    .required()
    .messages({
      "string.empty": "Icon is required.",
      "any.required": "Icon is required.",
    }),
});



export const updateWhyChooseUsSchema = Joi.object({
  Title: Joi.string().messages({
    "string.empty": "Title cannot be empty.",
  }),
  Icon: Joi.string().messages({
    "string.empty": "Icon cannot be empty.",
  }),
});
