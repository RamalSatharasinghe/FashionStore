let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));

let SignupUsers = require('../models/signupusers');

router.post('/addSignupUsers', function (req,res) {
    console.log('Signup Users Post Called');
    console.log(req.body);

    let FName = req.body.uFname;
    let LName = req.body.uLname;
    let Mobile = req.body.uMobile;
    let Email = req.body.uEmail;
    let Password = req.body.uPassword;
    let UserType = req.body.uType;

    let errors = req.validationErrors;

    if(errors) {
        console.log('errors reported in signup uers post');
    } else {
        SignupUsers.findOne({email:Email}, function (err,signupUser) {
            if(signupUser) {
                console.log('User Already Registered.');
                res.redirect('/Signup');
            } else {
                let signupuser = new SignupUsers({
                    fName:FName,
                    lName:LName,
                    mobile:Mobile,
                    email:Email,
                    password:Password,
                    usertype:UserType
                });

                signupuser.save(function (err) {
                    if(err) return console.log(err);
                    console.log('Signup User Successfully Added.');
                    res.redirect('/Signup');
                })
            }
        })
    }

});

module.exports = router;