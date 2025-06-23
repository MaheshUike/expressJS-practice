middleware is nothing but the function which is having some functionality and serve as the  intermidiator to  identify wheather accessing person is authenticated or not or etc stuff as per the functionality 


syntax 

    app.get("/route", middleware_function ,(req,res)=>{
        .....
    })


    these middleware function can be anything with functionality 

    eg :  const myMiddleware = (req,res,next)=>{
        logic...
        ...
        ..
        .
        next();
    }


code : middleware 


            function myMiddleware (req,res,next){
                console.log("middlware is running")
                next()
            }

            export default myMiddleware;


code main : 

            import express from "express";
            import myMiddleware from "./middleware/myMiddleware.js";

            const app = express();
            const PORT = 8000;

            app.get("/home", myMiddleware, (req, res) => {
            res.send("THis is the middleware code ");
            });

            app.listen(PORT, () => {
            console.log("Server is running for json");
            });




output : middlware is running
