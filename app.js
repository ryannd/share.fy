
const cors = require('cors')

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')

var loginRouter = require('./routes/login');
var userRouter = require('./routes/user');
var searchRouter = require('./routes/search')
var playlistRouter = require('./routes/playlist')

var app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods:['GET','POST'],
  credentials: true
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
  name: 'User',
    secret: 'my express secret',
    saveUninitialized: true,
    resave: false,
      cookie: {
        secure: false,
        maxAge: 2160000000,
        httpOnly: false,
        token: ""
    }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/user', userRouter)
app.use('/search', searchRouter)
app.use('/playlist', playlistRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
