const express = require('express');
const app = express();
const port = 5000;
let mongoose = require('mongoose');
let config = require('./config/database');

//Connect to db
mongoose.connect(config.database, {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

let adminCategories = require('./routes/admin_categories');

app.use('/admin/categories',adminCategories);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));