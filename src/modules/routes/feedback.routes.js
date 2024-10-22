import {Router} from "express";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { attachAddQuery, attachDeleteQuery, attachGetQuery, attachUpdateQuery } from "../../middelwares/Attach.Query.js";
import { feedbackModel } from "../models/feedback.model.js";
import { normalFilterQuery, pagination } from "../../middelwares/Features.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { addFeedbackSchema, updateFeedbackSchema } from "../../validations/feedback.validation.js";
import { execute } from "../../middelwares/Execution.js";


const feedbackRouter=Router();

feedbackRouter.get("/",authentication,authorization("company"),attachGetQuery(feedbackModel),pagination(10),execute(
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

feedbackRouter.post("/",authentication,authorization("company"),validate(addFeedbackSchema),attachAddQuery(feedbackModel),execute(
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

feedbackRouter.put("/:id",authentication,authorization("company"),validate(updateFeedbackSchema),attachUpdateQuery(feedbackModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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


feedbackRouter.delete("/",authentication,authorization("company"),attachDeleteQuery(feedbackModel),execute(
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

feedbackRouter.delete("/:id",authentication,authorization("company"),attachDeleteQuery(feedbackModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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

export {feedbackRouter}