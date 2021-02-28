var SpotifyWebApi = require('spotify-web-api-node');
const session = require('express-session')

let scopes = ['user-library-read'],
    redirectUri = 'http://localhost:5000/login'

let spotifyApi = new SpotifyWebApi();

exports.login = async function (req,res) {
    let accessToken = req.query.code
    req.session.access_code = accessToken
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
    res.status(200).redirect("http://localhost:3000/search/")
}

exports.url = function (req, res) {
    spotifyApi.setClientId(process.env.CLIENT_ID)
    spotifyApi.setClientSecret(process.env.CLIENT_SECRET)
    spotifyApi.setRedirectURI("http://localhost:5000/login")
    let authorizeURL = spotifyApi.createAuthorizeURL(scopes,redirectUri);
    console.log(process.env.CLIENT_ID)
    res.send(authorizeURL)

}

exports.spotify = spotifyApi