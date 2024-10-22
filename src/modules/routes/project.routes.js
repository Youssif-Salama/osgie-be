import {Router} from "express";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { attachAddQuery, attachDeleteQuery, attachGetQuery, attachUpdateQuery } from "../../middelwares/Attach.Query.js";
import { normalFilterQuery, pagination } from "../../middelwares/Features.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { execute } from "../../middelwares/Execution.js";
import { projectModel } from "../models/projects.model.js";
import { addProjectSchema, updateProjectSchema } from "../../validations/project.validation.js";


const projectRouter=Router();

projectRouter.get("/",authentication,authorization("company"),attachGetQuery(projectModel),pagination(10),execute(
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

projectRouter.post("/",authentication,authorization("company"),validate(addProjectSchema),attachAddQuery(projectModel),execute(
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

projectRouter.put("/:id",authentication,authorization("company"),validate(updateProjectSchema),attachUpdateQuery(projectModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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


projectRouter.delete("/",authentication,authorization("company"),attachDeleteQuery(projectModel),execute(
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

projectRouter.delete("/:id",authentication,authorization("company"),attachDeleteQuery(projectModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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

export {projectRouter}