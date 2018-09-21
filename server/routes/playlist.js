const Playlist = require('../models').Playlist
const PlaylistSong = require('../models').PlaylistSong

module.exports = (express) => {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    Playlist.all()
    .then(playlists => res.status(200).json(playlists))
    .catch(error => res.status(400).json(error))
  })
  router.get('/:id/', (req, res, next) => {
    console.log('playlist id:', req.params.id)
    Playlist.findAll({
      where: {
        id: req.params.id
      },
      include: [PlaylistSong]
    })
    .then(playlists => res.status(200).json(playlists))
    .catch(error => res.status(400).json(error))
  })
  router.post('/:id/song', (req, res, next) => {
    PlaylistSong.create({
      songId: req.body.songId,
      playlistId: req.params.id
    })
    .then(playlistSong => {
      return res.status(201).json(playlistSong)
    })
    .catch(error => res.status(400).json(error))
  })
  router.post('/', (req, res, next) => {
    Playlist.create({
      title: req.body.title
    })
    .then(playlist => {
      return res.status(201).json(playlist)
    })
    .catch(error => res.status(400).json(error))
  })
  return router
}