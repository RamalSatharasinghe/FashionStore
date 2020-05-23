let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');


let cors = require('cors');
let jwt = require('jsonwebtoken');


router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(cors());

process.env.SECRET_KEY = 'secret'

let SignupUsers = require('../models/signupusers');
let StoreManagers = require('../models/storemanagers');

router.post('/SigninUsers', function(req, res){

    console.log('Signin Customers Post Called');
    console.log(req.body);


    let Email = req.body.uEmail;
    let Password = req.body.uPassword;
    let UType = req.body.uType;

    let errors = req.validationErrors;
if(UType == 'Customer'){
    SignupUsers.findOne({email:Email}, function(err, SigninUser){
        console.log(SigninUser);
        if(SigninUser){
            console.log('Customer email is matched');
            
            SignupUsers.findOne({password:Password}, function(err, Customer){
                if(Customer){
                    console.log('Customer password is matched');
                   
                    const payload = {
                        _id:Customer._id,
                        fName:Customer.fName,
                        lName:Customer.lName,
                        email:Customer.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn:1440
                    })
                    res.redirect('/Signin/CustomerProf/' +token+ '/'+ Customer.email);
                }else{
                    console.log('Customer password is not matched');
                    res.redirect('/Signin');
                }
            })
        }else{
            console.log('Customer not found'); 
            
            res.redirect('/Signin');
        }
    })
}else if(UType == 'Admin'){
    SignupUsers.findOne({email:Email}, function(err, SigninUser){
        console.log(SigninUser);
        if(SigninUser){
            console.log('Admin email is matched');
            
            SignupUsers.findOne({password:Password}, function(err, Admin){
                if(Admin){
                    console.log('Admin password is matched');
                    res.redirect('/admin');
                }else{
                    console.log('Admin password is not matched');
                    res.redirect('/Signin');
                }
            })
        }else{
            console.log('Admin not found'); 
            
            res.redirect('/Signin');
        }
    })
}else{
    StoreManagers.findOne({sEmail:Email}, function(err, SigninUser){
        console.log(SigninUser);
        if(SigninUser){
            console.log('StoreManager email is matched');
            
            StoreManagers.findOne({sPassword:Password}, function(err, StoreManager){
                if(StoreManager){
                    console.log('StoreManager password is matched');
                    res.redirect('/stock');
                }else{
                    console.log('StoreManager password is not matched');
                    res.redirect('/Signin');
                }
            })
        }else{
            console.log('StoreManager not found'); 
            
            res.redirect('/Signin');
        }
    })
}
});


module.exports = router;