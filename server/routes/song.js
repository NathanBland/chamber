const Song = require('../models').Song

module.exports = (express) => {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    Song.all()
    .then(songs => res.status(200).json(songs))
    .catch(error => res.status(400).json(error))
  })
  router.post('/', (req, res, next) => {
    Song.create({
      title: req.body.title,
      url: req.body.url
    })
    .then(songs => {
      return res.status(201).json(songs)
    })
    .catch(error => res.status(400).json(error))
  })
  return router
}