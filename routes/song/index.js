const express = require('express')
const router = express.Router()
const { songSearchLastFm, getYoutubeSearch } = require('./common')

module.exports = () => { //TODO: combine meta and youtube results.
  router.get('/addbyUrl', (req, res, next) => {
    console.log('query:', req.query)
    getYoutubeSearch(req.query.url)
    .then(result => result.json)
    .then(data => songSearchLastFm(data.title))
    .then(result => {
      console.log('result')
      return res.json(result)
    })
    .catch(err => {
      console.log('problem.')
      return res.json(err)
    })
  })
  router.get('/search', (req, res, next) => {
    console.log('query:', req.query)
    // getYoutubeSearch(req.query.title)
    // .then(result => result.json)
    // .then(data => songSearchLastFm(data.title))
    songSearchLastFm(req.query.title)
    .then(result => {
      console.log('result')
      return res.json(result)
    })
    .catch(err => {
      console.log('problem.')
      return res.json(err)
    })
  })
  return router
}