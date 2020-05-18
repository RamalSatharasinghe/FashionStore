const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
   id:{

       type:Number

   }, title :{
        type : String
    },
    price :{
        type : String
    },
    count:{

        type : String
    },

    img:{


        type:String
    },

},{
    collection : 'product'
});



module.exports = mongoose.model('Product',Product);