const express = require('express');
const app = express();
const port = 8000;
let mongoose = require('mongoose');
let config = require('./config/database');
let bodyParser = require('body-parser');
let flash = require('express-flash-messages');
let session = require('express-session');
app.use(flash());

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

let adminCategories = require('./routes/admin_categories');
let storeManagers = require('./routes/admin_storemanagers');

app.use('/admin/categories',adminCategories);
app.use('/admin/storemanagers',storeManagers);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));