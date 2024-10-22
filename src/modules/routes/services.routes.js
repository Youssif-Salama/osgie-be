import {Router} from "express";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { attachAddQuery, attachDeleteQuery, attachGetQuery, attachUpdateQuery } from "../../middelwares/Attach.Query.js";
import { normalFilterQuery, pagination } from "../../middelwares/Features.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { execute } from "../../middelwares/Execution.js";
import { serviceModel } from "../models/services.model.js";
import { addServiceSchema, updateServiceSchema } from "../../validations/services.validation.js";


const serviceRouter=Router();

serviceRouter.get("/",authentication,authorization("company"),attachGetQuery(serviceModel),pagination(10),execute(
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

serviceRouter.post("/",authentication,authorization("company"),validate(addServiceSchema),attachAddQuery(serviceModel),execute(
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

serviceRouter.put("/:id",authentication,authorization("company"),validate(updateServiceSchema),attachUpdateQuery(serviceModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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


serviceRouter.delete("/",authentication,authorization("company"),attachDeleteQuery(serviceModel),execute(
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

serviceRouter.delete("/:id",authentication,authorization("company"),attachDeleteQuery(serviceModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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

export {serviceRouter}