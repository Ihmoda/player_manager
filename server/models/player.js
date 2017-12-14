var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    name: String,
    position: String,
    game_1: Boolean,
    game_2: Boolean,
    game_3: Boolean
}, {timestamps: true});

var Player = mongoose.model("Player", playerSchema);

