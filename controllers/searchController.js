let spotifyApi = require('./loginController').spotify

exports.getPlaylist = function(req,res) {
    let user = req.body.user
    console.log(user)
    spotifyApi.getUserPlaylists(user).then((data) => res.status(200).send(data)).catch((err) => console.log(err))
}

exports.getUser = function(req,res) {
    let user = req.body.user
    spotifyApi.getUser(user).then((data) => res.status(200).send(data)).catch((err) => console.log(err))
}

exports.getTracks = function(req,res) {
    let tracks = req.body.tracks
    spotifyApi.getTracks(tracks).then((data) => res.status(200).send(data)).catch((err) => console.log(err))
    
}