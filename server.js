'use strict';
const express = require('express'),
    app = express();
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const path = require('path');

let port = 8000;
let taskWaylo = require('./Routes/routes.js');
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


app.get("/pingME",function(req,res) {
    console.log("here");
    res.json({
        data : "PING!!!!!!!!!!!!",
        status :  true
    });
});

app.use('/api/taskWaylo', taskWaylo.router);

http.createServer(app).listen(port, function () {
    console.log('http server running on port', port);
});