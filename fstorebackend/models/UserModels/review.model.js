const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Review = new Schema({
    // id:{
    //
    //     type:Number
    //
    // },
    ratingValue :{
        type : Number
    },

    email :{
    type : String
}


},{
    collection : 'review'
});



module.exports = mongoose.model('Review',Review);