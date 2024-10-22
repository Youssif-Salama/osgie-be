import Joi from 'joi';

export const addCounterSchema = Joi.object({
  Title: Joi.string()
    .required()
    .messages({
      "string.empty": "Title is required.",
      "any.required": "Title is required.",
    }),
  No: Joi.number()
    .required()
    .messages({
      "number.base": "No must be a number.",
      "any.required": "No is required.",
    }),
});


export const updateCounterSchema = Joi.object({
  Title: Joi.string()
    .optional()
    .messages({
      "string.empty": "Title must not be empty.",
    }),
  No: Joi.number()
    .optional()
    .messages({
      "number.base": "No must be a number.",
    }),
});