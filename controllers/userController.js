
let spotifyApi = require('./loginController').spotify

exports.getInfo = function(req,res) {
    spotifyApi.authorizationCodeGrant(req.session.access_code)
        .then((data) => {
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);
            return spotifyApi.getMe();
        })
        .then((data) => {
            req.session.userId = data.body.id
            res.status(200).send(data)
        }).catch((err) => {
            console.log(err)
        })
}

exports.getPlaylists = function(req,res) {
    console.log(req.session)
    spotifyApi.getUserPlaylists(req.session.userId).then((data) => res.status(200).send(data));
}