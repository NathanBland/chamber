
const LastFM = require('last-fm')
const lastfm = new LastFM('6310666cabafc490fd85bbd72c4c4786', { userAgent: 'vinyl-api/1.0.0 (http://github.com/nathanbland/vinyl-api)' })
const info = require('youtube-dl-info')

function getYoutubeSearch (search) {
  return new Promise(function (resolve, reject) {
    info.get(search, async function (err, json) {
      if (err) {
        console.log('err parsing url!', err)
        reject(err)
      } else {
        resolve({ json })
      }
    })
  })
}
 
const songSearchLastFm = (query) => {
  return new Promise((resolve, reject) => {
    lastfm.trackSearch({ q: query }, async function(err, data) {
      if (err) {
        console.error(err)
        return reject(err)
      } else {
        // console.log(data)
        return resolve(data)
      } 
    })
  })
}

const getTrackInfoLastFm = (query) => {
  return new Promise((resolve, reject) => {
    lastfm.trackCorrection(query, async function(err, data) {
      if (err) {
        console.error(err)
        return reject(err)
      } else {
        console.log(data)
        return resolve(data)
      } 
    })
  })
}
module.exports = {
  getTrackInfoLastFm,
  songSearchLastFm,
  getYoutubeSearch
}