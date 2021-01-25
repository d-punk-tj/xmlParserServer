const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const cors = require('cors');  
const path = require('path');



const app = express();
const port = process.env.PORT || 4200;

app.use(morgan('dev'));
app.use(cors());

app.set('port', process.env.port || port); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(function (request, response, next) {
    response.setHeader(  
        "Access-Control-Allow-Headers",  
        "Origin, X-Requested-With, Content-Type, Accept");  ;
  next();
});

const xmlRoutes = require('./routes/xml.js');
const postRoute = require('./routes/post');


app.use('/xml', xmlRoutes);
app.use('/post', postRoute);
 

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});