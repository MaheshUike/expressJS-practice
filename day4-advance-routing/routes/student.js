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
