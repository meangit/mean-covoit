var mongoose = require('mongoose');

// Trajet Type Schema
var TrajetTypeSchema = mongoose.Schema({
   
    ville_depart: {
        type: String
    },
    ville_arrivee: {
        type: String
    },
    distance: {
        type: String
    },
    temps_moyen: {
        type: String
    }

});

var Trajettype = module.exports = mongoose.model("Trajettype", TrajetTypeSchema);