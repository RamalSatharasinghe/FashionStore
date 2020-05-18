const express = require('express');
const userRoutes = express.Router();

let User = require('./user.model');
let Product = require('./product.model');

const UserSession = require('./UserSession');

userRoutes.route('/addproduct').post(function(req,res){

    let product = new Product(req.body);

    product.save()
        .then(product =>{res.status(200).json({'business':'Business is added successful'});
        })
        .catch(err =>{
            res.status(400).send("Unable to save to the database");
        });
});

userRoutes.route('/add').post(function(req,res,next){

    //let user = new User(req.body);
    const {body} = req;
    const{
        first_name,
        last_name,

        password,
        phone_number

    } = body;

    let{
        email
    }=body;

    if(!first_name){

        return res.end({
            success:false,
            message:'Error:First name cannot be blank'
        });
    }
    if(!last_name){

        return res.end({
            success:false,
            message:'Error:Last name cannot be blank'
        });
    }
    if(!email){

        return  res.end({
            success:false,
            message:'Error:Email name cannot be blank'
        });
    }

    if(!password){

        return res.end({
            success:false,
            message:'Error:Password name cannot be blank'
        });
    }

    if(!phone_number){

        return res.end({
            success:false,
            message:'Error:Phone number cannot be blank'
        });
    }

    email = email.toLowerCase();
    User.find({

        email:email
    },(err,previousUsers) => {
        if (err){
            return  res.end({
                success:false,
                message:'Error: Server error'

            });
        }else if(previousUsers.length > 0){
            return  res.end({
                success:false,
                message:'Error: Account Already Exists'
            });
        }

        const  newUser = new User();
        newUser.email = email;
        newUser.first_name = first_name;
        newUser.last_name = last_name;
        newUser.password = password;
        newUser.phone_number = phone_number;


        newUser.save((err,user) => {
            if(err){
                return  res.end({
                    success:false,
                    message:'Error: Server Error'
                });

            }
            return res.end({
                success:true,
                message:'Signed Up'
            });


        });

    });



});

userRoutes.route('/signin').post(function(req,res,next) {

    //let user = new User(req.body);
    const {body} = req;
    const {


        password,


    } = body;

    let {
        email
    } = body;

    if(!email){

        return  res.end({
            success:false,
            message:'Error:Email name cannot be blank'
        });
    }

    if(!password){

        return res.end({
            success:false,
            message:'Error:Password name cannot be blank'
        });
    }

    email = email.toLowerCase();

    User.find({
        email:email
    },(err,users) => {

        if(err){

            return res.send({

                success:false,
                message:'Error: Server Error'
            });
        }
        if(users.length != 1){

            return res.send({

                success:false,
                message:'Error: Invalid'
            });

        }

        const user = users[0];
        if (!user.validPassword(password)){

            return res.send({

                success:false,
                message:'Error: Invalid'
            });



        }

        const userSession = new UserSession();

        userSession.userId = user._id;
        userSession.save((err,doc) => {

            if(err){

                return res.send({

                    success:false,
                    message:'Error: Server Error'
                });
            }else{


                console.log("successlog");
            }

            return res.send({

                success:true,
                message:'Valid Signin',
                token:doc._id

            }



            )
            console.log(message);

            }

        )



    })



});

userRoutes.route('/verify').get(function(req,res,next) {

    const {query} = req;
    const {token} =query;

    UserSession.find({

        _id:token,
        isDeleted:false
    }, (err,sessions) => {

        if(err){

            return res.send({

                success:false,
                message:'Error: Server Error'
            });
        }
        if(sessions.length != 1){

            return res.send({

                success:false,
                message:'Error: Invalid'
            });


        }
        else{

            return res.send({

                success:true,
                message:'Good'
            });
        }

    })



});

userRoutes.route('/logout').get(function(req,res,next) {

    const {query} = req;
    const {token} =query;

    UserSession.findOneAndUpdate({

        _id:token,
        isDeleted:false
    },
    {$set:{isDeleted:true}
    },null,(err,sessions) => {

        if(err){

            return res.send({

                success:false,
                message:'Error: Server Error'
            });
        }



            return res.send({

                success:true,
                message:'Good'
            });


    })



});

//
// userRoutes.route('/signin').post(function(req,res){
//
//    User.findOne({
//        where:{
//
//            email:req.body. user_mail
//        }
//    }).then(user =>{
//        if(user){
//            if((req.body. user_password,user.password)){
//
//                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
//                    expiresIn:1440
//                })
//
//                res.send(token)
//            }
//        }
//    })
// });


//get data
// userRoutes.route('/:id').get(function(req,res){
//     let id = req.params.id;
//
//     console.log(id)
//     Product.findOne({id: new ObjectId(id)}, function(err, product) {
//         if(err)
//             console.log(err);
//         else{
//             res.json(product);
//         }
//
//     });
// });


userRoutes.route('/').get(function(req,res){

    Product.find(function(err,product){
        if(err)
            console.log(err);
        else{
            res.json(product);
        }

    });
});
//edit
// userRoutes.route('/edit/:id').get(function(res,req){
//
//     let id = req.params.id;
//     //User.findById(id,function(err,business){
//     User.findOne({id: new ObjectId(id)}, function(err, user) {
//         res.json(user);
//     });
//
//
//
//
// });

//update
// userRoutes.route('/update/:id').post(function(res,req){
//
//     User.findById(reg.params.id,function(err,user){
//
//         if(!user)
//             res.status(404).send("Data is not found");
//
//         else{
//
//
//             user.person_name = req.body.person_name;
//             user.business_name = req.body.business_name;
//             user.business_nic_number = req.body.business_nic_number;
//
//             user.save().then(business => {
//                 res.json("Update Complete");
//             })
//
//                 .catch(err => {res.status(400).send("Unable to update database");
//                 });
//         }
//     });
// });

//delete
// userRoutes.route('/delete/:id').get(function(req,res){
//
//     Product.findByIdAndRemove({id:req.params.id}, function(err,product){
//
//         if(err)res.json(err);
//         else res.json("Sucessfully Removed");
//     });
// });
userRoutes.get('/delete/:id',function (req,res,next ) {

    let productId = req.params.id;
    Product.findOne({_id:productId},function (err,product) {
        if (product){

            Product.findByIdAndDelete(product._id,function (err) {

                if (err) return console.log(err);

            })
        }

    })

})
// userRoutes.route('/delete/:id',(req,res) =>{
//
//     Product.findById(req.params.id).then(product => {
//
//         if(product){
//             product.remove();
//             res.send('Deleted Successfully');
//         }
//         else{
//
//             res.send('Invalid Id');
//         }
//     })
//
//
//
// });
module.exports = userRoutes;