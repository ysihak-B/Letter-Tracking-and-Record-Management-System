const router = require("express").Router();
const User = require("../models/User");

/* A library that allows us to create a token. */
const jwt = require("jsonwebtoken");
const { hashPassword, IsPasswordCorrect } = require("./password");
const { verifyTokenAndAdmin } = require("../authorization/verify-admin");
//REGISTER
/* This is a post request that is used to register a new user. */
router.post("/admin/register", async (req, res) => {
  const newAdmin = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: hashPassword(req.body.password),
    isAdmin: true,
    phoneNumber: req.body.phoneNumber,
  });
  try {
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/user/register", verifyTokenAndAdmin, async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: hashPassword(req.body.password),
    phoneNumber: req.body.phoneNumber,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

/* This is a post request that is used to login a user. */
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      res.status(401).json("Wrong User Name");
      return;
    }

    const inputPassword = req.body.password;
    if (!IsPasswordCorrect(user.password, inputPassword)) {
      res.status(401).json("Wrong User password");
      return;
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
router.post("/logout", async (req, res) => {
  const authHeader = req.headers.token;
  jwt.sign({authHeader:authHeader}, process.env.JWT_KEY, { expiresIn: 1 }, (err, logout) => {
    if (err) {
      console.log("err" ,err)
      res.send({ msg: "Error" });
    }
    req.user = logout
    console.log(req)
    res.status(205).json("User has been logged out...");
  });
});
module.exports = router;
