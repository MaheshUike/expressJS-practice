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
