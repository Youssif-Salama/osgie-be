import Joi from 'joi';

export const addFeedbackSchema = Joi.object({
  Name: Joi.string()
    .required()
    .messages({
      "string.empty": "Name is required.",
      "any.required": "Name is required.",
    }),
  Review: Joi.string()
    .required()
    .messages({
      "string.empty": "Review is required.",
      "any.required": "Review is required.",
    }),
    Image: Joi.string()
    .optional()
});


export const updateFeedbackSchema = Joi.object({
  Name: Joi.string()
    .optional()
    .messages({
      "string.empty": "Name must not be empty.",
    }),
  Review: Joi.string()
    .optional()
    .messages({
      "string.empty": "Review must not be empty.",
    }),
    Image: Joi.string()
    .optional()
});