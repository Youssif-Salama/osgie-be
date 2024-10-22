import { senMailFun } from "../../services/nodemailer/nodemailer.js";
import { AppError, CatchAsyncErrors } from "../../utils/Error.Handeler.js";
import { applicationModel } from "../models/application.model.js";

export const sendEmailOnRejectApplication =CatchAsyncErrors( async(req, res, next) => {
  const {Rejected}=req.body;
  if(!Rejected) return next();
  const {id}=req.params;
  const findApplication=await applicationModel.findById(id);
  if(!findApplication) throw new AppError( 404,"application not found");
  const {Email}=findApplication;
  senMailFun(Email);
  next();
})