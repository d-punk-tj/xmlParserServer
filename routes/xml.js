const express = require('express');
const router = express.Router();

const { 
    xmlparser
 } = require('../controllers/xml-controller');


 router.get('/xml-parser', xmlparser);


 module.exports = router;