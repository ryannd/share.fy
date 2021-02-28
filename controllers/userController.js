
let spotifyApi = require('./loginController').spotify

exports.getInfo = function(req,res) {
    spotifyApi.getMe().then((data => res.status(200).send(data)))
}

exports.getPlaylists = function(req,res) {
    console.log(req.session)
    spotifyApi.getUserPlaylists(req.session.userId).then((data) => res.status(200).send(data));
}

exports.getTopTracks = function(req,res) {
    spotifyApi.getMyTopTracks().then((data => res.status(200).send(data)));
}