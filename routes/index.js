const express = require('express')
const router = express.Router()

module.exports = () => {
  // router.use('/playlist', require('./playlist')(express))
  // router.use('/song', require('./song')(express))
  router.use('/song', require('./song')(express))

  router.get('/', (req, res, next) => {
    return res.json({msg: 'Welcome to the api'})
  })

  router.get('*/*', (req, res, next) => {
    return res.status(404).json({msg: 'invalid endpoint'})
  })

  return router
}