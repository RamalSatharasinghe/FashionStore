const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WishListProduct = new Schema({
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
    email:{


        type:String
    },


},{
    collection : 'WishListProduct'
});



module.exports = mongoose.model('WishListProduct',WishListProduct);