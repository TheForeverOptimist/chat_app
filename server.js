const express = require("express");
const path = require('path');
const favicon = require('serve-favicon')
const logger = require('morgan');
require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "build")));
app.use(require('./config/checkToken'))

const port = process.env.PORT || 3001;

app.use('/api/users', require("./routes/api/users"))

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

const server = app.listen(port, function() {
    console.log(`express app running on port ${port}`);
});

const io = require("./config/socket").init()

io.on('connection', (socket) => {
    console.log("user has connected");
})