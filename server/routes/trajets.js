var express = require('express');
var router = express.Router();

// Get trajet Model
var trajet = require('../models/trajet');

/*
* GET all trajets
*/
router.get('/', function (req, res) {
    trajet.find({}, function (err, trajets) {
        if (err) console.log(err);
        res.json(trajets);
    });
});
/*
* GET a trajet
*/
router.get('/:id_user', function (req, res) {

    var id_user = req.params.id_user;

    trajet.findOne({ id_user: id_user }, function (err, trajet) {
        if (err) console.log(err);
        res.json(trajet);
    });
});
/*
* POST register
*/
router.post('/postAddTrajet', function (req, res) {

    var ville_depart = req.body.ville_depart;
    var ville_arrivee = req.body.ville_arrivee;
    var adr_rdv      = req.body.adr_rdv;
    var adr_depos  = req.body.adr_depos;
    var date    = req.body.date;
    var type_voiture    = req.body.type_voiture;
    var nbr_place = req.body.nbr_place;
    var prix = req.body.prix;
    var id_user = req.body.email;

    trajet.findOne({ id_user: id_user }, function (err, trajet) {
        if (err) console.log(err);
            var Trajet = new trajet({
                ville_depart: ville_depart,
                ville_arrivee: ville_arrivee,
                adr_rdv: adr_rdv,
                adr_depos: adr_depos,
                date: date,
                type_voiture: type_voiture,
                nbr_place: nbr_place,
                prix: prix,
                id_user: id_user
            });

            trajet.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.json("trajets Registered");
                }
            });
        
    });
});
// Exports
module.exports = router;