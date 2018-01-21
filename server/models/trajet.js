var mongoose = require('mongoose');

// Trajet Schema
var TrajetSchema = mongoose.Schema({
   
    ville_depart: {
        type: String
    },
    ville_arrivee: {
        type: String
    },
    adr_rdv: {
        type: String
    },
    adr_depos: {
        type: String
    },
    date: {
        type: String
    },
    type_voiture: {
        type: String
    },
    nbr_place: {
        type: String
    },
    prix: {
        type: String
    },
    id_user: {
        type: String
    },

});

var trajet = module.exports = mongoose.model("trajet", TrajetSchema);