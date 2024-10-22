import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Review: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const feedbackModel = mongoose.model("Feedback", feedbackSchema)