const router = require('express').Router()
const {Hopper, Fellow} = require('../models')

module.exports = router

router.get('/hoppers', async (req, res, next) => {
  try {
    const allTheHoppers = await Hopper.findAll()
    if (allTheHoppers){
    res.send(allTheHoppers)
    } else next()
  } catch (error) {
    next(error)
  }
})
