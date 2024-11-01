import {Router} from "express";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { attachAddQuery, attachDeleteQuery, attachGetQuery, attachUpdateQuery } from "../../middelwares/Attach.Query.js";
import { normalFilterQuery, pagination } from "../../middelwares/Features.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { execute } from "../../middelwares/Execution.js";
import { addWhyChooseUsSchema, updateWhyChooseUsSchema } from "../../validations/whyChooseUs.validation.js";
import { whyChooseUsModel } from "../models/whyChooseUs.model.js";


const whyChooseUsRouter=Router();

whyChooseUsRouter.get("/",authentication,authorization("company"),attachGetQuery(whyChooseUsModel),pagination(10),execute(
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

whyChooseUsRouter.post("/",authentication,authorization("company"),validate(addWhyChooseUsSchema),attachAddQuery(whyChooseUsModel),execute(
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

whyChooseUsRouter.put("/:id",authentication,authorization("company"),validate(updateWhyChooseUsSchema),attachUpdateQuery(whyChooseUsModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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


whyChooseUsRouter.delete("/",authentication,authorization("company"),attachDeleteQuery(whyChooseUsModel),execute(
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

whyChooseUsRouter.delete("/:id",authentication,authorization("company"),attachDeleteQuery(whyChooseUsModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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

export {whyChooseUsRouter}