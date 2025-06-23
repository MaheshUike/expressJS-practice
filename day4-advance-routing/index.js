import express from "express";
import student from "./routes/student.js";

const app = express();
const PORT = 8000;

//middleware
app.use("/student", student);



app.listen(PORT, () => {
  console.log("Server is Up for Advance  routing ");
});
