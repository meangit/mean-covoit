var express = require('express');
var router = express.Router();

// Get User Model
var User = require('../models/user');
/*
* GET all users
*/
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) console.log(err);
        res.json(users);
    });
});

/*
* POST register
*/
router.post('/register', function (req, res) {

    var username = req.body.username;
    var password = req.body.password;
    var age      = req.body.age;
    var adresse  = req.body.adresse;
    var email    = req.body.email;
    var phone    = req.body.phone;

    User.findOne({ username: username }, function (err, user) {
        if (err) console.log(err);

        if (user) {
            res.json("userExists");
        } else {
            var user = new User({
                username: username,
                password: password,
                age: age,
                adresse: adresse,
                email: email,
                phone: phone
            });

            user.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.json("userRegistered");
                }
            });
        }
    });
});

/*
* POST login
*/
router.post('/login', function (req, res) {

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ username: username, password: password }, function (err, user) {
        if (err) console.log(err);

        if (user) {
            res.json(username);
        } else {
            res.json("invalidLogin");
        }
    });
});
/*
* GET delete user
*/
router.get('/delete-user/:id', function (req, res) {

    var id = req.params.id;

    User.findByIdAndRemove(id, function (err) {
        if (err) {
            console.log(err);
            res.json("error");
        } else {
            res.json("ok");
        }
    });
});
// Exports
module.exports = router;