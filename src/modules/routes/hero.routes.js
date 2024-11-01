import {Router} from "express";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { attachAddQuery, attachDeleteQuery, attachGetQuery } from "../../middelwares/Attach.Query.js";
import { execute } from "../../middelwares/Execution.js";
import { normalFilterQuery, pagination } from "../../middelwares/Features.middleware.js";
import { addHeroSchema } from "../../validations/hero.validation.js";
import { upload } from "../../services/multer/multer.service.js";
import { heroModel } from "../models/hero.model.js";
import { catchReqFile } from "../middleware/hero.middleware.js";


const heroRouter=Router();

heroRouter.post("/",authentication,authorization("company"),upload.single("Image"),catchReqFile,validate(addHeroSchema),attachAddQuery(heroModel),execute(
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

heroRouter.delete("/:id",authentication,authorization("company"),attachDeleteQuery(heroModel),normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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
}))

heroRouter.get("/",authentication,authorization("company"),attachGetQuery(heroModel),pagination(10),execute(
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

export { heroRouter }