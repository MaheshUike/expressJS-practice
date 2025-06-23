THis is nothing but use 

res.json(jason data );

with this we can send the json data to the client  

code : 

        import express from "express";

        const app = express();
        const PORT = 8000;

        const data = {
        name: "Mahi",
        data: "bla bla bla",
        };

        app.get("/home", (req, res) => {
        res.json(data);
        });

        app.listen(PORT, () => {
        console.log("Server is running for json");
        });




output :
        {
            "name": "Mahi",
            "data": "bla bla bla"
        }