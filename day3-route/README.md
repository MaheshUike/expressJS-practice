// this route method is nothing but  creating multiple  endpoints for the single route which is //! student
// in our case in order to ease our code  that's all

import express from "express";

const app = express();

const PORT = 8000;

// this route method is nothing but  creating multiple  endpoints for the single route which is //! student
// in our case in order to ease our code  that's all



app
  .route("/student")
  .get((req, res) => res.send("Hello from all student from route"))
  .post((req, res) => res.send("Hello from post method from route"))
  .put((req, res) => res.send("Hello from put method from route"))
  .delete((req, res) => res.send("Hello from delete method from route"));




app.listen(PORT, () => {
  console.log("Server is on for route practice");
});



