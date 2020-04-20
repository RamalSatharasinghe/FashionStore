let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let mongo = require('mongodb');
let asser = require('assert');

router.use(bodyParser.urlencoded({
    extended: true
}));

//Get Category Model
let Category = require('../models/category');

router.get('/newEndPoint', (req, res) => res.send('This is my new endpoint'));

//POST ADD CATEGORY
router.post('/addCat',function (req,res) {
    console.log('Post Called');
    console.log(req.body);

    let title = req.body.title;

    let errors = req.validationErrors;

    if(errors) {
        console.log('error reported');
    } else {
        Category.findOne({title:title},function(err,category) {
            if(category) {
                console.log('Category Exists Already. Choose Another');
                res.redirect('/admin/categories');
            } else {
                let category = new Category({
                    title:title
                });

                category.save(function(err) {
                    if(err) return console.log(err);
                    console.log('successfully added category.');
                    res.redirect('/admin/categories');
                });
            }
        })
    }
});

router.get('/delete-category/:title',function (req,res,next) {

    console.log('Delete Category Called');
    console.log(req.params.title);
    let title = req.params.title;

    let errors = req.validationErrors;
    if(errors) {
        console.log('error reported');
    } else {
        Category.findOne({title:title}, function(err,category) {
            if(category) {
                console.log('Category with given title found');
                Category.findByIdAndRemove(category._id, function(err) {
                    if(err) return console.log(err);

                    console.log('successfully deleted category');
                });
            }
        });
    }


});

//Exports
module.exports = router;