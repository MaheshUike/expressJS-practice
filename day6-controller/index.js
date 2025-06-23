import express from "express";
import student from "./routes/students.js";

const app = express();
const PORT = 8000;

app.use("/student", student);

app.listen(PORT, () => {
  console.log("Server is up for the controllers");
});
