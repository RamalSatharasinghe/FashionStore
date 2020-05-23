let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));

let SignupUsers = require('../models/signupusers');

router.get('/delete-customer/:demail', function (req) {
    console.log('Delete Customers Called.');

    console.log(req.params.demail);

    let Email = req.params.demail;

    let errors = req.validationErrors;

    if(errors) {
        console.log('error reported in customers');
    } else {
        SignupUsers.findOne({email:Email}, function(err,signupUser) {
            if(signupUser) {
                console.log('Customer Found');
                SignupUsers.findByIdAndDelete(signupUser._id, function(err) {
                    if(err) return console.log(err);
                    console.log('Successfully Deleted Customer');
                })
            }
        });
    }
});

router.get('/view-customer/:email', function(req,res){
    console.log('View customer called');
    console.log(req.params.email);

    let dEmail = req.params.email;

    let errors = req.validationErrors;
    
    SignupUsers.findOne({email:dEmail}, function(err, viewCustomer){
        if(viewCustomer){
            console.log('Viewing customer found');
        }
        else{
            console.log('view customer not found');
        }
    }).exec().then(docs =>{
        console.log(docs);
        res.send(docs);
    }).catch(err =>{
        console.log(err);
    })
})

router.post('/update-customer',function (req,res) {

    console.log('update customer called');
    console.log(req.body.uEmail);
    console.log(req.body.uFname);
    console.log(req.body.uLname);
    console.log(req.body.uMobile);
    console.log(req.body.uPassword);
    console.log(req.body.hide);

    let foundingEmail = req.body.uEmail;
    let eFname = req.body.uFname;
    let eLname = req.body.uLname;
    let eMobile = req.body.uMobile;
    let ePassword = req.body.uPassword;
    let token = req.body.hide;

     let errors = req.validationErrors;

    if(errors) {
        console.log('update error reported');
    }
    else {

        SignupUsers.findOneAndUpdate({email:foundingEmail},{fName:eFname,lName:eLname,mobile:eMobile,password:ePassword}).then(function(updatedCustomer) {
            if(updatedCustomer){
                res.redirect('/Signin/CustomerProf/'+token+'/' +updatedCustomer.email);    
            }
            
        });
    }

});

router.get('/logged/:gtoken/:temail', function(req, res){
    console.log('log function called');
    let logStatus = req.params.gtoken;
    let tokEmail = req.params.temail;
    console.log(logStatus);
    console.log(tokEmail);

    if(logStatus){
        // res.redirect('/Cart/'+logStatus);
        console.log('If condition true');
         res.redirect('/Cart/'+logStatus+'/'+tokEmail);
        
    }

})

module.exports = router;