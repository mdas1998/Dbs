import mongoose from "mongoose";  

const employeeSchema = new mongoose.Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true}, 
  city: {type: String, required: true},
  salary: {type: Number, required: true},
  language: {type: String, required: true}, 
  ismanager: {type: Boolean, required: true}
})

export const employee = mongoose.model('employee', employeeSchema);