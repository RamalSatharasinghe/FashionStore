let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fashionhubAFProject@gmail.com',
        pass: 'Fashion@hub123'
    }
});

function sendMailNow(toAddress, subject, textBody) {
    let mailOptions = {
        from: 'fashionhubAFProject@gmail.com',
        to: toAddress.toString(),
        subject: subject.toString(),
        text: textBody.toString()
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully to : ' + toAddress.toString() + info.response);
        }
    });
}

router.use(bodyParser.urlencoded({
    extended: true
}));

//Get Category Model
let StoreManagers = require('../models/storemanagers');

//POST ADD STORE MANAGERS
router.post('/addStoreManagers', function (req,res) {
    console.log('Store Managers Post Called');
    console.log(req.body);

    let name = req.body.storeManagerName;
    let email = req.body.storeManagerEmail;
    let password = req.body.storeManagerPassword;

    let errors = req.validationErrors;

    if(errors) {
        console.log('errors reported in store managers post');
    } else {
        StoreManagers.findOne({sEmail:email}, function (err,storeManager) {
            if(storeManager) {
                console.log('Store Manager Already Registered.');
                res.redirect('/admin/storemanagers');
            } else {
                let storemanager = new StoreManagers({
                    sName : name,
                    sEmail: email,
                    sPassword: password
                });

                storemanager.save(function (err) {
                    if(err) return console.log(err);
                    console.log('Store Manager Successfully Added.');
                    let textBody = "Hi " + name.toString() + ", you can now access the FashionHub as store manager " +
                        "using " + email.toString() + " as your email address, and " + password.toString() + " as the password. " +
                        "Thank You. ";
                    sendMailNow(email,"FashionHub Store Manager Credentials",textBody);
                    res.redirect('/admin/storemanagers');
                })
            }
        })
    }

});

//DELETE STORE MANAGERS
router.get('/delete-storemanager/:email', function (req) {
    console.log('Delete Store Managers Called.');

    console.log(req.params.email);

    let email = req.params.email;

    let errors = req.validationErrors;

    if(errors) {
        console.log('error reported in store managers');
    } else {
        StoreManagers.findOne({sEmail:email}, function(err,storeManager) {
            if(storeManager) {
                console.log('Store Manager Found');
                StoreManagers.findByIdAndDelete(storeManager._id, function(err) {
                    if(err) return console.log(err);
                    console.log('Successfully Deleted Store Manager');
                    let textBody = "Hi " + storeManager.sName.toString() + ", the Administrator of the FashionHub has removed your " +
                        "access rights to the site as the store manager. Contact Administrator for more information. " +
                        "Thank You.";
                    sendMailNow(email,"FashionHub Store Manager Credentials",textBody);
                })
            }
        });
    }
});

//Exports
module.exports = router;