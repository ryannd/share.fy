var SpotifyWebApi = require('spotify-web-api-node');
const session = require('express-session')

let scopes = ['playlist-read-private','playlist-read-collaborative', 'user-library-read'],
    redirectUri = 'http://localhost:5000/login'

let spotifyApi = new SpotifyWebApi();

exports.login = async function (req,res) {
    let accessToken = req.query.code
    req.session.access_code = accessToken
    if(accessToken == null){
        res.status(500).send("error")
    }
    else {
        res.status(200).redirect("http://localhost:3000/user")
    }
}

exports.test = async function(req,res) {
    let code = req.session.access_code
    console.log(code)
    spotifyApi.authorizationCodeGrant(code).then((data) => {
        spotifyApi.setAccessToken(data.body['access_token']);
        spotifyApi.setRefreshToken(data.body['refresh_token']);
        return spotifyApi.getMe();
    }).then((data) => {
        console.log(data)
        res.send(data)
    })
}

exports.url = function (req, res) {
    spotifyApi.setClientId(process.env.CLIENT_ID)
    spotifyApi.setClientSecret(process.env.CLIENT_SECRET)
    spotifyApi.setRedirectURI("http://localhost:5000/login")
    let authorizeURL = spotifyApi.createAuthorizeURL(scopes);
    console.log(process.env.CLIENT_ID)
    res.send(authorizeURL)

}