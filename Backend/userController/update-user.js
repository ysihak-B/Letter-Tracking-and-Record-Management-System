const router = require('express').Router()
const User = require('../models/User')
const {
  verifyTokenAndAuthorization
} = require('../authorization/authorization-service')

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(err)
  }
})

module.exports = router;
