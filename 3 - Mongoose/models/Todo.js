import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  name: {type: String, required: true, default: "Hello!"},
  desc: String,
  isDone: Boolean,
  days: Number
});

export const toDo = mongoose.model('toDo', toDoSchema);