import mongoose from "mongoose";

const applicationSchema=new mongoose.Schema({
  JobId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Job",
    required:true
  },
  Name:{
    type:String,
    required:true
  },
  Email:{
    type:String,
    required:true
  },
  Phone:{
    type:String,
    required:true
  },
  CoverLetter:{
    type:String,
  },
  Resume:{
    type:String,
  },
  Link:{
    type:String,
  },
  Considration:{
    type:Boolean,
    default:false
  },
  Watch:{
    type:Boolean,
    default:false
  },
  Rejected:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true
})


export const applicationModel=mongoose.model("Application",applicationSchema)