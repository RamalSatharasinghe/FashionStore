let mongoose = require('mongoose');

//Store Managers Schema
let StoreManagersSchema = mongoose.Schema({
    sName: {
        type: String,
        required: true
    },
    sEmail: {
        type: String,
        require: true
    },
    sPassword: {
        type: String,
        require: true
    }
});

let StoreManagers = module.exports = mongoose.model('StoreManagers',StoreManagersSchema);