import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description:[{
    type: String,
    required: true,
  }],
  Icon: {
    type: String,
    required: true,
  },
});



export const serviceModel = mongoose.model("Service", serviceSchema)