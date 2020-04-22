let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

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
                    res.redirect('/admin/storemanagers');
                })
            }
        })
    }

});

//Exports
module.exports = router;