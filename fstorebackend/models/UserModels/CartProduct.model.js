const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CartProduct = new Schema({
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
    total:{

        type : String
    },

    img:{


        type:String
    },
    email:{


        type:String
    },


},{
    collection : 'cartProduct'
});



module.exports = mongoose.model('CartProduct',CartProduct);