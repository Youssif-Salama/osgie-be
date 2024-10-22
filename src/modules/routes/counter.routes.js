import {Router} from "express";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { attachAddQuery, attachDeleteQuery, attachGetQuery, attachUpdateQuery } from "../../middelwares/Attach.Query.js";
import { counterModel } from "../models/counters.model.js";
import { normalFilterQuery, pagination } from "../../middelwares/Features.middleware.js";
import { execute } from "../../middelwares/Execution.js";
import { addCounterSchema, updateCounterSchema } from "../../validations/counter.validation.js";
import { validate } from "../../middelwares/validation.middleware.js";


const counterRouter=Router();

counterRouter.get("/",authentication,authorization("company"),attachGetQuery(counterModel),pagination(10),execute(
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
  }}
))


counterRouter.post("/",authentication,authorization("company"),validate(addCounterSchema),attachAddQuery(counterModel),execute(
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
  }}
))


counterRouter.put("/:id",authentication,authorization("company"),validate(updateCounterSchema),attachUpdateQuery(counterModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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
  }}
))


counterRouter.delete("/:id",authentication,authorization("company"),attachDeleteQuery(counterModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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
  }}
))


counterRouter.delete("/",authentication,authorization("company"),attachDeleteQuery(counterModel),execute(
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
  }}
))

export {counterRouter}