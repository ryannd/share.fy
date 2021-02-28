let spotifyApi = require('./loginController').spotify

exports.getPlaylist = function(req,res) {
    let user = req.body.user
    console.log(req.body)
    spotifyApi.getUserPlaylists(user).then((data) => res.status(200).send(data)).catch((err) => console.log(err))
}