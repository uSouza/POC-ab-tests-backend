const router = require('express').Router()
const testCaseModel = require('../domain/test-cases-model')

router.post('/', async (req, res, next) => {
  try {
    const testCase = await testCaseModel.create(req.body)
    res.send(testCase)
  } catch (err) {
    next(err)
  }
})

module.exports = router
