In  advance routing we follow few stuff before creating it 

step 1: create a folder called routes

step 2: create a file name same as your route name for which you are going to creat CRUD 

step 3: create router = express.Router() instance and then instead of app use router.method_name("/route",(req,res)=> ---)

step 4: export this router

step 5: import it in your file eg: import student from "./routes/student.js";

step 6 : use middle ware app.use("/student", student)


--------------------------------------------------------------------------------------

import express from "express";

const router = express.Router();

router.get("/all", (req, res) => res.send("Hello from advance routing"));

router.post("/create", (req, res) =>
  res.send("Hello from post method from advance routing")
);

router.put("/update", (req, res) => {
  res.send("Hello from put  method  from advance routing");
});

router.delete("/delete", (req, res) => {
  res.send("Hello from Delete Method from  advance routing");
});

export default router;




-----------------------------------------------------------------------------------------
import express from "express";
import student from "./routes/student.js";

const app = express();

//middleware
app.use("/student", student);

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is Up for Advance  routing ");
});

