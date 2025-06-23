controllers are nothing but folders where we are going to store our callback functions 

eg : app.get("/student" , (req,res)=>{
    res.send("Here is the callback )
})


---> controller example 

folder structure 

day6-controller              |       
    controller               |
        studentController.js |
    routes                   |
        student.js           |
    index.js                 |



here is this studentController is called as controller in our case 

controller code :  

                // this is the controller file where we are going to add the all the callback function

                const allStudent = (req, res) => {
                res.send("This is the all student from controller all student");
                };

                const createStudent = (req, res) => {
                res.send(
                    "This is the create student route from the Controller createStudent"
                );
                };

                const updateStudent = (req, res) => {
                res.send("This is the update student route from controller updateStudent");
                };

                const deleteStudent = (req, res) => {
                res.send("This is the delete student route  from controller deleteStudent");
                };

                export { allStudent, createStudent, updateStudent, deleteStudent };




calling controllers from the routes folder :


                                            import express from "express";
                                            import {
                                            allStudent,
                                            createStudent,
                                            updateStudent,
                                            deleteStudent,
                                            } from "../controller/studentController.js";

                                            const router = express.Router();

                                            router.get("/all", allStudent);

                                            router.post("/create", createStudent);

                                            router.put("/update", updateStudent);

                                            router.delete("/delete", deleteStudent);

                                            export default router;



main code : 
                import express from "express";
                import student from "./routes/students.js";

                const app = express();
                const PORT = 8000;

                app.use("/student", student);

                app.listen(PORT, () => {
                console.log("Server is up for the controllers");
                });


so see here we are creating these  allStudent, createStudent , updateStudent , deleteStudent these are the controllers or we call say the functions which we have saved in another file and  the n we are using it in other file for functionality  to write a cleaner code 