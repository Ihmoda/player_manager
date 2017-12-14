//here we load the modules that we reated on the server.js page
var Player = require('./controllers/Player.js');
var path = require("path");

module.exports = function (app) {

    //GET '/' will serve up the full collection of players
    app.get('/players', function(req, res){
        Player.get_all(req,res);
    });

    //GET '/:name' will bring up the document of that particular Player.
    app.get('/players/:id', function(req, res){
        Player.get_one(req,res);
    });

    //POST '/add' will add a new Player to the database
    app.post('/add', function(req, res){
       Player.add(req,res);
    });

    //DELETE '/players/:id' will delete a Player from the database
    app.delete('/players/:id', function(req,res){
        Player.remove(req, res);
    });

    //Put/' will update value in database using provided data
    app.put('/players/:id', function(req,res){
        Player.update(req, res);
    });

    //handle all other requests.
    app.all("*", (request, response) => { response.sendFile(path.resolve("./ppm/dist/index.html")) });

}
