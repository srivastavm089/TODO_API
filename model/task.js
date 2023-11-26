import mongoose, { mongo } from "mongoose";

const userTask = new mongoose.Schema({
  title: {
    type: String,

    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,

    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "users",
    required: true,
  },
});

export default mongoose.model("task", userTask);
