const express = require('express');
const productRoutes = express.Router();

let Product = require('./product.model');

productRoutes.route('/addproduct').post(function(req,res){

    let business = new Product(req.body);

    business.save()
        .then(business =>{res.status(200).json({'business':'Business is added successful'});
        })
        .catch(err =>{
            res.status(400).send("Unable to save to the database");
        });
});