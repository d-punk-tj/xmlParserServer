const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const cors = require('cors');  
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/dbconfig');


const app = express();
const port = process.env.PORT || 8080;

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

mongoose.connect(`mongodb+srv://${config.username}:${config.password}@cluster0.ogrrz.mongodb.net/BlogPosts?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function(err, res) {

    if (err) {
      return console.error('Error connecting to databse:');
    }
    console.log('Connected successfully to databse');
  });
 

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});