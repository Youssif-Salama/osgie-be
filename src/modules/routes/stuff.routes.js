import {Router} from "express";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { attachAddQuery, attachDeleteQuery, attachGetQuery, attachUpdateQuery } from "../../middelwares/Attach.Query.js";
import { normalFilterQuery, pagination } from "../../middelwares/Features.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { execute } from "../../middelwares/Execution.js";
import { stuffModel } from "../models/stuff.model.js";
import { addStuffSchema, updateStuffSchema } from "../../validations/stuff.validation.js";


const stuffRouter=Router();

stuffRouter.get("/",authentication,authorization("company"),attachGetQuery(stuffModel),pagination(10),execute(
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

stuffRouter.post("/",authentication,authorization("company"),validate(addStuffSchema),attachAddQuery(stuffModel),execute(
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

stuffRouter.put("/:id",authentication,authorization("company"),validate(updateStuffSchema),attachUpdateQuery(stuffModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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


stuffRouter.delete("/",authentication,authorization("company"),attachDeleteQuery(stuffModel),execute(
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

stuffRouter.delete("/:id",authentication,authorization("company"),attachDeleteQuery(stuffModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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

export {stuffRouter}