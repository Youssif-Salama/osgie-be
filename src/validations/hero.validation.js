import Joi from "joi";

export const addHeroSchema = Joi.object({
  Image: Joi.string()
  .required()
  .messages({
    "string.empty": "Image is required.",
    "any.required": "Image is required.",
  }),
});