var express = require('express');
var router = express.Router();

// Get Page Model
var Page = require('../models/page');

/*
* GET all pages
*/
router.get('/', function (req, res) {
    Page.find({}, function (err, pages) {
        if (err) console.log(err);
        res.json(pages);
    });
});

/*
* GET a page
*/
router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({ slug: slug }, function (err, page) {
        if (err) console.log(err);
        res.json(page);
    });
});

// Exports
module.exports = router;