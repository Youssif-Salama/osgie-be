import { AppError, CatchAsyncErrors } from "../../utils/Error.Handeler.js";
import { companyModel } from "../models/company.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const loginForACompany=CatchAsyncErrors(async(req,res)=>{
  const {Password}=req.body;
  const allCompanies=await companyModel.find();

  const isMatch = await bcrypt.compare(Password, allCompanies[0].Password);
  if (!isMatch) {
    throw new AppError(401, "invalid password");
  }

  const token=jwt.sign({ _id: allCompanies[0]._id,Name:allCompanies[0].Name,Role:allCompanies[0].Role }, process.env.TokenKey, {

  })
  res.status(200).json({
    message:"login successfully",
    token
  })
})