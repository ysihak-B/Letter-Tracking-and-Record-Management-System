const router = require("express").Router();
const User = require("../models/User");
const { verifyTokenAndAuthorization } = require("../authorization/authorization-service")

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
