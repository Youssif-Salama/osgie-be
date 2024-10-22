import mongoose from "mongoose";
import bcrypt from "bcrypt";
const companySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Years: {
    type: Number,
    required: true,
  },
  Intro: {
    type: String,
    required: true,
  },
  Slogan: {
    type: String,
    required: true,
  },
  Services: [
    {
      Text: {
        type: String,
        required: true,
      },
      Icon: {
        type: String,
        required: true,
      },
    },
  ],
  Password:{
    type:String,
    required:true,
    match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
  },
  Role:{
    type:String,
    default:"company",
    enum:["company"],
    validate:{
      validator:async function(value){
        const findSomeOneWithRoleSuperAdmin=await companyModel.findOne({Role:"company"});
        if(findSomeOneWithRoleSuperAdmin && value==="company"){
          return false
        }
        else{
          return true
        }
      },
      message:"role can't be company"
    }
  }
},{timestamps:true});

companySchema.pre("save",function( next ) {
  this.Password=bcrypt.hashSync(this.Password,10);
  next();
})

companySchema.pre(/delete/i,function( next ) {
  const findOneCompanyAtLeast=companyModel.findOne({Role:"company"});
  if(findOneCompanyAtLeast){
    throw new Error("must be at least one company");
  }
  next();
})
export const companyModel = mongoose.model("Company", companySchema)