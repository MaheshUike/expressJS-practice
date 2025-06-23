import express from "express";

const app = express();
const PORT = 3000;

// temp data
const tempData = [
  {
    id: 1,
    name: "Mahi",
  },
  {
    id: 2,
    name: "Nahi",
  },
  {
    id: 3,
    name: "Mahi Uike",
  },
  {
    id: 4,
    name: "Mahi M Uike",
  },
];

app.get("/", (req, res) => {
  res.send("This is my get route /");
});

//lets use the  app.json() middleware;

app.get("/products", (req, res) => {
  res.json(tempData);
});

//dynamic routing

app.get("/products/:Id", (req, res) => {
  let Id = parseInt(req.params.Id);
  // this is going to give us the product id inside the url --> pruduct/2 --> 2
  console.log(Id);
  let getProduct = tempData.find((product) => product.id === Id);
  if (getProduct) {
    res.status(200).json(getProduct);
  } else {
    res.status(404).send("Product not found try with different id ");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on the port ", PORT);
});
