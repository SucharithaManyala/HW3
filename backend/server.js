var express = require('express');
var path = require('path');
 var fs = require("fs");
var database = require('./database.json');
var app = express();
app.use(express.static('../public/'));
app.use(express.static('./'));
app.use(express.bodyParser());
app.use(app.router);

app.post('/', function(req, res) {
	res.sendFile(path.join('../public/index.html'));
});
app.post('/users/', function(req,res) {
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