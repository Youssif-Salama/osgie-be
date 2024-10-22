import Joi from "joi";

export const addProjectSchema = Joi.object({
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
  Image: Joi.string()
    .required()
    .messages({
      "string.uri": "Image must be a valid URL.",
      "string.empty": "Image is required.",
      "any.required": "Image is required.",
    }),
});


export const updateProjectSchema = Joi.object({
  Title: Joi.string().optional().messages({
    "string.empty": "Title cannot be empty.",
  }),
  Description: Joi.string().optional().messages({
    "string.empty": "Description cannot be empty.",
  }),
  Image: Joi.string()
    .optional()
    .messages({
      "string.uri": "Image must be a valid URL.",
    }),
});
