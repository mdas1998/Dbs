import mongoose  from "mongoose";
import express from "express";
import { toDo } from "./models/Todo.js";

const conn = await mongoose.connect("mongodb://localhost:27017/todo")


const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new toDo({desc: "This is my second todo and I am happy!", isDone: false, days: 5});
  todo.save()
  res.send('Hello World!')
})

app.get('/data', async (req, res) => {
  const todo = await toDo.findOne({})
  res.json({title: todo.title, desc: todo.desc, days: todo.days})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
