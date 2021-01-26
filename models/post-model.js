const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
    type: String,
    unique : true,
    required: true,
    
  },
  description: {
    type: String,
    unique : true,
    required : true,
  },
  link: {
    type: String,
    required : true,
  },
  image: {
    type: String,
    required : false,
  },
  
});
 


const Food = mongoose.model("post", postSchema);
module.exports = Food;