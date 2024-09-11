const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/login", async (req, res) => {
  console.log("Login Route")
  try {
    const { email,name,number,city } = req.body;
    console.log(email,name,number,city)
    const token = jwt.sign({
        name:name,
        email: email,
        number:number,
        city:city
    }, "dcce5c8476a044a410939dc30cbd82353281d7b09859fe8eec662be1e21753dc", {
      expiresIn: "1d",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
