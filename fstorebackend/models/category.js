let mongoose = require('mongoose');

//Category Schema
let CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

let Category = module.exports = mongoose.model('Category',CategorySchema);

