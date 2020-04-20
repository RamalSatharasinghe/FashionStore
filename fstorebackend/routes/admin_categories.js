let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));

//Get Category Model
let Category = require('../models/category');

router.get('/newEndPoint', (req, res) => res.send('This is my new endpoint'));

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
                })
            }
        })
    }
});

//Exports
module.exports = router;