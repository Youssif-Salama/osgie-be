import Joi from "joi";

export const addJobSchema = Joi.object({
  Title: Joi.string()
    .required()
    .messages({
      "string.empty": "Title is required.",
      "any.required": "Title is required.",
    }),
  IsInternship: Joi.boolean()
    .default(false)
    .messages({
      "boolean.base": "IsInternship must be a boolean.",
    }),
  Category: Joi.string()
    .required()
    .messages({
      "string.empty": "Category is required.",
      "any.required": "Category is required.",
    }),
  Requirements: Joi.string()
    .required()
    .messages({
      "string.empty": "Requirements are required.",
      "any.required": "Requirements are required.",
    }),
  Description: Joi.string()
    .required()
    .messages({
      "string.empty": "Description is required.",
      "any.required": "Description is required.",
    }),
  Salary: Joi.object({
    From: Joi.string()
      .required()
      .messages({
        "string.empty": "Salary From is required.",
        "any.required": "Salary From is required.",
      }),
    To: Joi.string()
      .required()
      .messages({
        "string.empty": "Salary To is required.",
        "any.required": "Salary To is required.",
      }),
  })
    .required()
    .messages({
      "object.base": "Salary must be an object.",
      "any.required": "Salary is required.",
    }),
  Experience: Joi.object({
    Min: Joi.string()
      .required()
      .messages({
        "string.empty": "Experience Min is required.",
        "any.required": "Experience Min is required.",
      }),
    Max: Joi.string()
      .required()
      .messages({
        "string.empty": "Experience Max is required.",
        "any.required": "Experience Max is required.",
      }),
  })
    .required()
    .messages({
      "object.base": "Experience must be an object.",
      "any.required": "Experience is required.",
    }),
  AdditionalSalaryDetails: Joi.string().optional().allow(""),
  Location: Joi.object({
    Country: Joi.string().optional().allow(""),
    City: Joi.string().optional().allow(""),
  }).optional().messages({
    "object.base": "Location must be an object.",
  }),
  Type: Joi.string()
    .valid("fulltime", "partTime", "freelance", "shift", "volunteering")
    .required()
    .messages({
      "any.only": "Type must be one of 'fulltime', 'partTime', 'freelance', 'shift', or 'volunteering'.",
      "any.required": "Type is required.",
    }),
  PositionsNo: Joi.number()
    .integer()
    .required()
    .messages({
      "number.base": "PositionsNo must be a number.",
      "any.required": "PositionsNo is required.",
    }),
  WorkArrangement: Joi.string()
    .valid("onSite", "remote", "hybrid")
    .required()
    .messages({
      "any.only": "WorkArrangement must be one of 'onSite', 'remote', or 'hybrid'.",
      "any.required": "WorkArrangement is required.",
    }),
  Status: Joi.string()
    .valid("active", "inactive")
    .default("active")
    .messages({
      "any.only": "Status must be 'active' or 'inactive'.",
    }),
  Deadline: Joi.date()
    .required()
    .messages({
      "date.base": "Deadline must be a valid date.",
      "any.required": "Deadline is required.",
    }),
});



export const updateJobSchema = Joi.object({
  Title: Joi.string()
    .optional()
    .messages({
      "string.empty": "Title cannot be empty.",
    }),
  IsInternship: Joi.boolean()
    .optional()
    .messages({
      "boolean.base": "IsInternship must be a boolean.",
    }),
  Category: Joi.string()
    .optional()
    .messages({
      "string.empty": "Category cannot be empty.",
    }),
  Requirements: Joi.string()
    .optional()
    .messages({
      "string.empty": "Requirements cannot be empty.",
    }),
  Description: Joi.string()
    .optional()
    .messages({
      "string.empty": "Description cannot be empty.",
    }),
  Salary: Joi.object({
    From: Joi.string()
      .optional()
      .messages({
        "string.empty": "Salary From cannot be empty.",
      }),
    To: Joi.string()
      .optional()
      .messages({
        "string.empty": "Salary To cannot be empty.",
      }),
  })
    .optional()
    .messages({
      "object.base": "Salary must be an object.",
    }),
  Experience: Joi.object({
    Min: Joi.string()
      .optional()
      .messages({
        "string.empty": "Experience Min cannot be empty.",
      }),
    Max: Joi.string()
      .optional()
      .messages({
        "string.empty": "Experience Max cannot be empty.",
      }),
  })
    .optional()
    .messages({
      "object.base": "Experience must be an object.",
    }),
  AdditionalSalaryDetails: Joi.string().optional().allow(""),
  Location: Joi.object({
    Country: Joi.string().optional().allow(""),
    City: Joi.string().optional().allow(""),
  }).optional().messages({
    "object.base": "Location must be an object.",
  }),
  Type: Joi.string()
    .valid("fulltime", "partTime", "freelance", "shift", "volunteering")
    .optional()
    .messages({
      "any.only": "Type must be one of 'fulltime', 'partTime', 'freelance', 'shift', or 'volunteering'.",
    }),
  PositionsNo: Joi.number()
    .integer()
    .optional()
    .messages({
      "number.base": "PositionsNo must be a number.",
    }),
  WorkArrangement: Joi.string()
    .valid("onSite", "remote", "hybrid")
    .optional()
    .messages({
      "any.only": "WorkArrangement must be one of 'onSite', 'remote', or 'hybrid'.",
    }),
  Status: Joi.string()
    .valid("active", "inactive")
    .optional()
    .messages({
      "any.only": "Status must be 'active' or 'inactive'.",
    }),
  Deadline: Joi.date()
    .optional()
    .messages({
      "date.base": "Deadline must be a valid date.",
    }),
});
