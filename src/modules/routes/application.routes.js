import {Router} from "express";
import { authentication, authorization } from "../../middelwares/auth.middleware.js";
import { validate } from "../../middelwares/validation.middleware.js";
import { addApplicationSchema } from "../../validations/application.validation.js";
import { attachAddQuery, attachDeleteQuery, attachGetQuery, attachUpdateQuery } from "../../middelwares/Attach.Query.js";
import { applicationModel } from "../models/application.model.js";
import { execute } from "../../middelwares/Execution.js";
import { upload } from "../../services/multer/multer.service.js";
import { sendEmail } from "../../services/nodemailer/nodemailer.js";
import { normalFilterQuery, pagination, search } from "../../middelwares/Features.middleware.js";
import { sendEmailOnRejectApplication } from "../middleware/application.middleware.js";


const applicationRouter=Router({
  mergeParams: true
});

applicationRouter.post("/",upload.single("Resume"),validate(addApplicationSchema),attachAddQuery(applicationModel),sendEmail(),execute(
  {
    status: 200,
    result: {
      message: "success, check your mail"
    }
  },
  {
    status: 400,
    result: {
      message: "failed"
    }
  }
))

applicationRouter.delete("/all",authentication,authorization("company"),attachDeleteQuery(applicationModel),execute(
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

applicationRouter.put("/:id",authentication,authorization("company"),attachUpdateQuery(applicationModel),sendEmailOnRejectApplication,normalFilterQuery({fieldName:"_id",paramName:"id"}),execute(
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

applicationRouter.get("/all",authentication,authorization("company"),attachGetQuery(applicationModel),search(),pagination(10),execute(
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
));

applicationRouter.get("/",authentication,authorization("company"),attachGetQuery(applicationModel),normalFilterQuery({fieldName:"JobId",paramName:"id"}),search(),pagination(10),execute(
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
));

export {applicationRouter}