const { json, response } = require('express');
const Request = require('request');


const xmlparser = (request, response) => {
    try {
        console.log('xml-parser : working');
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};


const product = {
    xmlparser    
};

module.exports = product;