import mongoose from "mongoose";

const stuffSchema=new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  Email:{
    type:String,
  },
  Phone:{
    type:String,
  },
  Info:{
    type:String,
    required:true
  },
  SocialLinks:[{
    Name:String,
    Link:String
  }]
},{
  timestamps:true
})


export const stuffModel=mongoose.model("Stuff",stuffSchema)