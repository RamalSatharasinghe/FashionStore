let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));

//Get Category Model
let Category = require('../models/category');

//TO GET CATEGORY LIST
router.get('/get-categories',function(req,res) {
    console.log('get categories called');

    Category.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
        })
});

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

//TO EDIT CATEGORY
router.post('/editCat/:editTitle/:editName',function (req,res) {

    console.log('edit cat called');
    console.log(req.params.editTitle);
    console.log(req.params.editName);

    let mTitle = req.params.editTitle;
    let eTitle = req.params.editName;

    let errors = req.validationErrors;

    if(errors) {
        console.log('edit error reported');
    }
    else {

            Category.findOne({title:eTitle},function (err,category) {

                if(category) {
                    res.send(406);
                }
                else {

                    Category.findOneAndUpdate({title:mTitle},{title:eTitle}).then(function() {
                        res.send(200);
                    });

                }

            });
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
                Category.findByIdAndDelete(category._id, function(err) {
                    if(err) return console.log(err);
                    console.log('successfully deleted category');
                    res.send(200);
                });
            }
        });
    }
});

//Exports
module.exports = router;