const express = require('express');
const app = express();
const port = 8000;
let mongoose = require('mongoose');
let config = require('./config/database');
let bodyParser = require('body-parser');
let flash = require('express-flash-messages');
let session = require('express-session');
app.use(flash());

let fileUpload  = require('express-fileupload');

app.use(bodyParser());

//Connect to db
mongoose.connect(config.database, {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

//Express Session Middleware
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}));

// // Express file upload Middleware
// app.use(fileUpload());


let adminCategories = require('./routes/admin_categories');
let storeManagers = require('./routes/admin_storemanagers');
let adminProducts = require('./routes/admin_products');

app.use('/admin/categories',adminCategories);
app.use('/admin/storemanagers',storeManagers);
app.use('/stock/products',adminProducts);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));