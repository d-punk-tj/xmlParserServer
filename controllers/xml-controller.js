const { json, response } = require('express');
const Request = require('request');
const xml2js = require('xml2js');


const xmlparser = (request, response) => {
    try {
        const xmlUrl = request.query.url;
        Request( xmlUrl , { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            xml2js.parseString(res.body, function (err, result) {
                const xml_item_array = result.rss.channel[0].item;
                const item_array = [];
                xml_item_array.forEach(item => {
                    item_array.push({
                        'title' : item.title[0],
                        'description' : item.description[0],
                        'link' : item.link[0],
                        'image' : item["media:content"][0]['$']['url'] 
                    });
                });
                return response.json(item_array);
            });
    });
        
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};


const product = {
    xmlparser    
};

module.exports = product;