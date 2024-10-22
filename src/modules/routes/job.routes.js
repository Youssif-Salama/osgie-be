import {Router} from "express";
import { attachAddQuery, attachDeleteQuery, attachGetQuery, attachUpdateQuery } from "../../middelwares/Attach.Query.js";
import { jobModel } from "../models/job.model.js";
import { normalFilterQuery, pagination, search } from "../../middelwares/Features.middleware.js";
import { execute } from "../../middelwares/Execution.js";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { addJobSchema, updateJobSchema } from "../../validations/job.validation.js";
import { applicationRouter } from "./application.routes.js";

const jobRouter = Router({
  mergeParams: true
});

jobRouter.get("/",authentication,authorization("company"),attachGetQuery(jobModel),search(), pagination(10), execute(
  {
    status: 200,
    result: {
      message: "success"
    }
  },
  {
    status: 400,
    result: {
      message: "failed"
    }
  }
))


jobRouter.post("/",authentication,authorization("company"),validate(addJobSchema),attachAddQuery(jobModel),execute(
  {
    status: 201,
    result: {
      message: "success"
    }
  },
  {
    status: 400,
    result: {
      message: "failed"
    }
  }
))


jobRouter.put("/:id",authentication,authorization("company"),validate(updateJobSchema),attachUpdateQuery(jobModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
  {
    status: 200,
    result: {
      message: "success"
    }
  },
  {
    status: 400,
    result: {
      message: "failed"
    }
  }
))

jobRouter.delete("/:id",authentication,authorization("company"),attachDeleteQuery(jobModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
  {
    status: 200,
    result: {
      message: "success"
    }
  },
  {
    status: 400,
    result: {
      message: "failed"
    }
  }
))

jobRouter.delete("/all",authentication,authorization("company"),attachDeleteQuery(jobModel),execute(
  {
    status: 200,
    result: {
      message: "success"
    }
  },
  {
    status: 400,
    result: {
      message: "failed"
    }
  }
))

jobRouter.use("/:id/applications",applicationRouter);

export { jobRouter }