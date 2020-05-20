let mongoose = require('mongoose');

//Product Schema
let ProductSchema = mongoose.Schema({

            name : {
                type: String,
                required: true
            },

            category:{

                type: String,
                required: true
            },

            price:{

                type:String,
                required:true
            },

            quantity:{

                type:String,
                required:true
             },

            discount:{
                type:String,
                required:true
            }
});

let Category = module.exports = mongoose.model('Product',ProductSchema);