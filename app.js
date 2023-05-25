var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var __path = require("path")

var cors = require('cors');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api')
var HTTP_PORT = 8080

var app = express();

app.use(cors({ origin: '*' }));
app.set('json spaces', 2);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'hasil')));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/docs', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

module.exports = app;