import express from "express";
import mongoose from "mongoose";
import session from "express-session";   // ✅ you forgot to import session
import flash from "connect-flash";
import { employee } from "./models/employee.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// ✅ setup session + flash
app.use(session({
  secret: "your-secret",
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());

// connect to mongoose db
await mongoose.connect("mongodb://localhost:27017/employee");

// GET: render form with flash message
app.get("/", (req, res) => {
  res.render("index.ejs", { successMsg: req.flash("success") });
});

// POST: handle form submission
app.post("/submit", async (req, res) => {
  try {
    const data = req.body;

    const emp = new employee({
      firstname: data.firstname,
      lastname: data.lastname,
      city: data.city,
      salary: data.salary,
      language: data.language,
      ismanager: data.ismanager === "yes"
    });

    await emp.save();

    // set flash message
    req.flash("success", "Form submitted successfully ✅");

    // redirect back to form page
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
