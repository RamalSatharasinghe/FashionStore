let express = require('express');
let router = express.Router();

router.get('/newEndPoint', (req, res) => res.send('This is my new endpoint'));

//Exports
module.exports = router;