import Joi from "joi";

// Define the Joi schema for the company
export const addCompanySchema = Joi.object({
  Name: Joi.string()
    .required()
    .messages({
      "string.empty": "Name is required.",
      "any.required": "Name is required.",
    }),
  Description: Joi.string()
    .required()
    .messages({
      "string.empty": "Description is required.",
      "any.required": "Description is required.",
    }),
  Years: Joi.number()
    .integer()
    .required()
    .messages({
      "number.base": "Years must be a number.",
      "any.required": "Years is required.",
    }),
  Intro: Joi.string()
    .required()
    .messages({
      "string.empty": "Intro is required.",
      "any.required": "Intro is required.",
    }),
  Slogan: Joi.string()
    .required()
    .messages({
      "string.empty": "Slogan is required.",
      "any.required": "Slogan is required.",
    }),
  Services: Joi.array()
    .items(
      Joi.object({
        Text: Joi.string().required().messages({
          "string.empty": "Service Text is required.",
          "any.required": "Service Text is required.",
        }),
        Icon: Joi.string().required().messages({
          "string.empty": "Service Icon is required.",
          "any.required": "Service Icon is required.",
        }),
      })
    )
    .required()
    .messages({
      "array.base": "Services must be an array.",
      "any.required": "Services are required.",
    }),
  Password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
    .required()
    .messages({
      "string.pattern.base": "Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be between 8 to 15 characters long.",
      "string.empty": "Password is required.",
      "any.required": "Password is required.",
    }),
  Role: Joi.string()
    .valid("company")
    .default("company")
    .messages({
      "any.only": "Role must be 'company'.",
    }),
});


export const companyLoginSchema = Joi.object({
  Password: Joi.string()
  .required()
  .messages({
    "string.empty": "Password is required.",
    "any.required": "Password is required.",
  })
})


export const updateCompanySchema = Joi.object({
  Name: Joi.string().optional().messages({
    "string.empty": "Name cannot be empty.",
  }),
  Description: Joi.string().optional().messages({
    "string.empty": "Description cannot be empty.",
  }),
  Years: Joi.number()
    .integer()
    .optional()
    .messages({
      "number.base": "Years must be a number.",
    }),
  Intro: Joi.string().optional().messages({
    "string.empty": "Intro cannot be empty.",
  }),
  Slogan: Joi.string().optional().messages({
    "string.empty": "Slogan cannot be empty.",
  }),
  Services: Joi.array()
    .items(
      Joi.object({
        Text: Joi.string().optional().messages({
          "string.empty": "Service Text cannot be empty.",
        }),
        Icon: Joi.string().optional().messages({
          "string.empty": "Service Icon cannot be empty.",
        }),
      })
    )
    .optional()
    .messages({
      "array.base": "Services must be an array.",
    }),
  Password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
    .optional() // Make Password optional
    .messages({
      "string.pattern.base": "Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be between 8 to 15 characters long.",
    }),
  Role: Joi.string()
    .valid("company")
    .default("company")
    .optional()
    .messages({
      "any.only": "Role must be 'company'.",
    }),
});
