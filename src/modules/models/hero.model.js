import mongoose from "mongoose";

const heroSchema=new mongoose.Schema({
  Image:{
    type:String,
    required:true
  }
},{timestamps:true})


export const heroModel=mongoose.model("Hero",heroSchema)