const express = require('express');
const userRoutes = express.Router();
let bodyParser = require('body-parser');

let Product = require('../models/UserModels/product.model');
let CartProduct = require('../models/UserModels/CartProduct.model');
let Review = require('../models/UserModels/review.model');


userRoutes.use(bodyParser.urlencoded({
    extended: true
}));
//add wishlist product
userRoutes.route('/addproduct').post(function(req,res){

    let product = new Product(req.body);

    product.save()
        .then(product =>{res.status(200).json({'product':'Product is added successful'});
        })
        .catch(err =>{
            res.status(400).send("Unable to save to the database");
        });
});

//add review
userRoutes.route('/addReview').post(function(req,res){

    let review = new Review(req.body);

    review.save()
        .then(review =>{res.status(200).json({'review':'Review is added successful'});
        })
        .catch(err =>{
            res.status(400).send("Unable to save to the database");
        });
});

//add purchased product
userRoutes.route('/addcartProduct').post(function(req,res){

    let cartProduct = new CartProduct(req.body);

    cartProduct.save()
        .then(cartProduct =>{res.status(200).json({'cartProduct':'Product is added successful'});
        })
        .catch(err =>{
            res.status(400).send("Unable to save to the database");
        });
});



userRoutes.route('/:id').get(function(req,res){
    console.log(req.params.id);
    Product.findOne({id:req.params.id},function(err,product){
        if(err)
            console.log(err);
        else{
            res.json(product);
            console.log(product)
        }

    });
});
//
userRoutes.route('/').get(function(req,res){

    Product.find(function(err,product){
        if(err)
            console.log(err);
        else{
            res.json(product);
            console.log(product)
        }

    });
});

//get reviews
userRoutes.route('/review/:id').get(function(req,res){
    console.log(req.params.id);
    Review.findOne({id:req.params.id},function(err,review){
        if(err)
            console.log(err);
        else{
            res.json(review);
            console.log(review)
        }

    });
});

userRoutes.route('/review1').get(function(req,res,next){

    var resultArray = [];
    Review.find(function(err,review){
        if(err)
            console.log(err);
        else{
            resultArray.push(review);
            res.json(review);
            console.log(resultArray)
        }

    });
});

userRoutes.get('/delete/:id',function (req,res,next ) {

    let productId = req.params.id;
    Product.findOne({_id:productId},function (err,product) {
        if (product){

            Product.findByIdAndDelete(product._id,function (err) {

                if (err) return console.log(err);

            })
        }

    })

})

module.exports = userRoutes;