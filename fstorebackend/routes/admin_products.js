let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));

//Get Category Model
let Category = require('../models/products');

router.post('/addProduct', function (req,res) {

    console.log('POST CALLED');
    console.log(req.body);

    let name = req.body.productName;
    let proCategory = req.body.productCategory;
    let price = req.body.productPrice;
    let quantity = req.body.productQuantity;
    let discount = req.body.productDiscount;

    let errors = req.validationErrors;

    if(errors) {
        console.log('error reported');
    }
    else {
        Category.findOne({name:name},function (err, category) {

            if(category) {
                console.log('product already exists');
                res.redirect('/stock/products');
            }
            else {
                let category = new Category({
                    name: name,
                    category: proCategory,
                    price: price,
                    quantity: quantity,
                    discount: discount
                });

                category.save(function (err) {
                    if(err) return console.log(err);
                    console.log('successfully added product.');
                    res.redirect('/stock/products');
                });
            }

        });
    }



});

module.exports = router;