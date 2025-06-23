import express from "express";

const app = express();

const cb1 = (request, response, next) => {
  response.send("This is the array callback cb1");

  next();
};

const cb2 = (request, response, next) => {
  //   response.send("This is the array callback cb2");
  console.log("This is the array callback cb2");

  next();
};
const cb3 = (request, response) => {
  console.log("This is the array callback cb3");
  //   next();
};

// -----------------------------------------------------

app.get("/single-cb", (request, response) => {
  response.send("Single Callback page");
});

// -----------------------------------------------------

app.get(
  "/double-cb",
  (request, response, next) => {
    response.send("This is double callback page");
    next();
  },
  (request, response) => {
    console.log("This is the second callback");
  }
);

// ---------------------------------------------------

app.get("/array-cb", [cb1, cb2, cb3]);

// ---------------------------------------------------

app.listen(3000, () => {
  console.log("Server is running ");
});

// this is how we can use the array of callback and double callback in the routes while defining the route
