let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));

//Get product model
let Product = require('../models/products');
let category = require('../models/category');


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
        Product.findOne({name:name},function (err, product) {

            if(product) {
                console.log('product already exists');
                res.redirect('/stock/products');
            }
            else {
                let product = new Product({
                    name: name,
                    category: proCategory,
                    price: price,
                    quantity: quantity,
                    discount: discount
                });

                product.save(function (err) {
                    if(err) return console.log(err);
                    console.log('successfully added product.');
                    res.redirect('/stock/products');
                });
            }

        });
    }



});





// displaying the product list
router.get('/getproducts',function (req,res) {

    Product.find()
        .exec()
        .then(docs =>{
            console.log(docs);
            res.send(docs)
        })
        .catch(err =>{
            console.log(err)
        })
});




//getting category

router.get('/getcat', function (req,res) {

    category.find()
        .exec()
        .then(doc =>{

            console.log(doc)
        })
        .catch(err =>{
            console.log(err)
        })


});
















// deleting a product

router.get('/deletePro/:id',function (req,res,next) {

    console.log("delete produc called");

    let productId = req.params.id;

    Product.findOne({_id:productId}, function(err,product) {

        if(product) {
            console.log('product with given id is found. Trying to delete.');

            Product.findByIdAndDelete(product._id, function(err) {
                if(err) return console.log(err);
                console.log('successfully deleted the category ' + productId);
            });

        }

    });

});






module.exports = router;