const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4001;
const cors = require('cors');
const userRoutes = require('./user.route');
const businessRoutes = require('./product.router');
const mongoose = require('mongoose');
const config = require('./DB.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('cannot connect to the database' + err)}
);






app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/user',userRoutes);

app.listen(PORT, function() {

    console.log('Server is running on port: ', PORT);
});