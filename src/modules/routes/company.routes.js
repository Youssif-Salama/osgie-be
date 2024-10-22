import { Router } from "express";
import { companyModel } from "../models/company.model.js";
import {
  attachAddQuery,
  attachDeleteQuery,
  attachGetQuery,
  attachUpdateQuery,
} from "../../middelwares/Attach.Query.js";
import { execute } from "../../middelwares/Execution.js";
import {
  normalFilterQuery,
  pagination,
} from "../../middelwares/Features.middleware.js";
import { loginForACompany } from "../controllers/company.controller.js";
import {
  authentication,
  authorization,
} from "../../middelwares/auth.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { addCompanySchema, companyLoginSchema, updateCompanySchema } from "../../validations/company.validation.js";

const companyRouter = Router();


companyRouter.post("/login",validate(companyLoginSchema),loginForACompany);


companyRouter.post(
  "/",
  validate(addCompanySchema),
  attachAddQuery(companyModel),
  execute(
    {
      status: 201,
      result: {
        message: "success",
      },
    },
    {
      status: 400,
      result: {
        message: "failed",
      },
    }
  )
);

companyRouter.get(
  "/",
  authentication,
  authorization("company"),
  attachGetQuery(companyModel),
  pagination(10),
  execute(
    {
      status: 200,
      result: {
        message: "success",
      },
    },
    {
      status: 400,
      result: {
        message: "failed",
      },
    }
  )
);

companyRouter.delete(
  "/:id",
  authentication,
  authorization("company"),
  attachDeleteQuery(companyModel),
  normalFilterQuery({ fieldName: "_id", paramName: "id" }),
  execute(
    {
      status: 200,
      result: {
        message: "success",
      },
    },
    {
      status: 400,
      result: {
        message: "failed",
      },
    }
  )
);

companyRouter.put(
  "/:id",
  authentication,
  authorization("company"),
  validate(updateCompanySchema),
  attachUpdateQuery(companyModel),
  normalFilterQuery({ fieldName: "_id", paramName: "id" }),
  execute({
    status: 200,
    result: {
      message: "success",
    },
  })
);

export { companyRouter };
