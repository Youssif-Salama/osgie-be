import mongoose from "mongoose";

const counterSchema=new mongoose.Schema({
  Title:{
    type:String,
    required:true,
    unique:true
  },
  No:{
    type:Number,
    required:true
  }
},{timestamps:true})


export const counterModel=mongoose.model("Counter",counterSchema)