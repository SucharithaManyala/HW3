var express = require('express');
var path = require('path');
var fs = require("fs");
var database = require('./database.json');
var app = express();
var bodyParser = require('body-parser')
app.use(express.static('../public/'));
app.use(express.static('./'));
app.use(app.router);
app.use(bodyParser.json())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function(req, res) {
	res.sendFile(path.join('../index.html'));
});
app.post('/users/', jsonParser, function(req,res) {
    var result='Fail';
    for (var i=0; i < database.Users.length; i++)
    {
        if(database.Users[i].username == req.body.username && database.Users[i].password == req.body.password)
        {
            console.log("Success");
            result='Success';
        }
    }
    res.send(result);
});
app.listen(8080);
