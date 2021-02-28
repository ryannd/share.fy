let spotifyApi = require('./loginController').spotify

exports.getListData = function(req,res) {
    let listId = req.body.listId
    spotifyApi.getPlaylistTracks(listId).then((data) => res.status(200).send(data)).catch((err) => console.log(err))
}