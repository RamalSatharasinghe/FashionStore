let mongoose = require('mongoose');

let signupUsersSchema = mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
});

let SignupUsers = module.exports = mongoose.model('SignupUsers', signupUsersSchema );