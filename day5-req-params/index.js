import express from "express";

const app = express();
const PORT = 8000;

app.get("/mahi/data/:dataID", (req, res) => {
  const dataId = req.params.dataID;

  if (dataId) {
    res.send("We have successfully fetched the DataId " + dataId);
  } else {
    res.status(400).send("Facing problem while fetching DataID ");
  }
});

app.listen(PORT, () => {
  console.log("Server is up for the parameters ");
});
