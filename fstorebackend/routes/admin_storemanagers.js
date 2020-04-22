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
});

//Exports
module.exports = router;