import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const projectModel = mongoose.model("Project", projectSchema);
