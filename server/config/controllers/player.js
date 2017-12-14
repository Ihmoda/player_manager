var mongoose = require('mongoose');
var Player = mongoose.model('Player');
var moment = require('moment');

module.exports = {
    get_all: function(req, res){
        Player.find({}, function(err, result){
            if (err){
                console.log(err);
                res.redirect('/players');
            } else {
                console.log("successfully retrieved players");
                res.json(result);
            }
        })
    },
    add: function(req, res){
        new_player = new Player();
        new_player.name = req.body.name
        new_player.position = req.body.position;
        new_player.game_1 = req.body.game_1;
        new_player.game_2 = req.body.game_2;
        new_player.game_3 = req.body.game_3;
        new_player.save(function (err){
            if (err){
                console.log(err)
                res.redirect('/players');
            } else {
                console.log("successfully saved Player");
                res.redirect('/players');
            }
        })
    },
    remove:  function(req,res){
        Player.remove({_id: req.params.id}, function(err){
            if (err){
                console.log(err);
                res.redirect('/players')
            } else {
                console.log("successfully removed Player");
                res.redirect(303,'/players');
            }
        })
    },
    get_one:  function(req, res){
        Player.findOne({_id: req.params.id}, function(err, result){
            if (err){
                console.log(err);
                res.redirect('/players');
            } else {
                console.log("Successfully found 1 user");
                res.json(result);
            }
        });
    },
    update: function(req, res){
        Player.update({_id: req.params.id}, {$set: {name: req.body.name, position: req.body.position, game_1: req.body.game_1, game_2: req.body.game_2, game_3: req.body.game_3}}, function(err, result){
            if (err){
                console.log(err);
                res.redirect(303,'/players');
            } else {
                console.log("successfully updated Player");
                res.redirect(303, '/players');
            }
        });
    }
}