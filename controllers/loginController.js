var SpotifyWebApi = require('spotify-web-api-node');
const session = require('express-session')

let scopes = ['user-library-read'],
    redirectUri = 'http://localhost:5000/login'

let spotifyApi = new SpotifyWebApi();

exports.login = async function (req,res) {
    let accessToken = req.query.code
    req.session.access_code = accessToken
    res.status(200).redirect("http://localhost:3000/user")
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