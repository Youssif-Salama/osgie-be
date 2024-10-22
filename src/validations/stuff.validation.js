import Joi from 'joi';

export const addStuffSchema = Joi.object({
  Name: Joi.string()
    .required()
    .messages({
      "string.empty": "Name is required.",
      "any.required": "Name is required.",
    }),
  Email: Joi.string()
    .email()
    .optional()
    .messages({
      "string.email": "Email must be a valid email address.",
    }),
  Phone: Joi.string()
    .optional()
    .messages({
      "string.empty": "Phone cannot be empty.",
    }),
  Info: Joi.string()
    .required()
    .messages({
      "string.empty": "Info is required.",
      "any.required": "Info is required.",
    }),
  SocialLinks: Joi.array()
    .items(
      Joi.object({
        Name: Joi.string().required().messages({
          "string.empty": "Social link name is required.",
          "any.required": "Social link name is required.",
        }),
        Link: Joi.string()
          .uri()
          .required()
          .messages({
            "string.empty": "Social link must be a valid URL.",
            "any.required": "Social link is required.",
            "string.uri": "Social link must be a valid URL.",
          }),
      })
    )
    .optional()
});



export const updateStuffSchema = Joi.object({
  Name: Joi.string()
    .optional()
    .messages({
      "string.empty": "Name cannot be empty.",
    }),
  Email: Joi.string()
    .email()
    .optional()
    .messages({
      "string.email": "Email must be a valid email address.",
    }),
  Phone: Joi.string()
    .optional()
    .messages({
      "string.empty": "Phone cannot be empty.",
    }),
  Info: Joi.string()
    .optional()
    .messages({
      "string.empty": "Info cannot be empty.",
    }),
  SocialLinks: Joi.array()
    .items(
      Joi.object({
        Name: Joi.string().optional().messages({
          "string.empty": "Social link name cannot be empty.",
        }),
        Link: Joi.string()
          .uri()
          .optional()
          .messages({
            "string.empty": "Social link must be a valid URL.",
            "string.uri": "Social link must be a valid URL.",
          }),
      })
    )
    .optional()
});
