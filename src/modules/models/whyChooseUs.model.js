import mongoose from "mongoose";



const whyChooseUsSchema=new mongoose.Schema({
  Title:{
    type:String,
    required:true
  },
  Icon:{
    type:String,
    required:true
  },
},{timestamps:true})


export const whyChooseUsModel=mongoose.model("WhyChooseUs",whyChooseUsSchema)