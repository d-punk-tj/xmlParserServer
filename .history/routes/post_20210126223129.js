const express = require('express');
const router = express.Router();

const { 
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
 } = require('../controllers/post-controller');


 router.get('/getALl', getAllPost);
 router.get('/getSingle/:id', getSinglePost);
 router.post('/create', createPost);
 router.patch('/update/:id', updatePost);
 router.delete('/delete/:id', deletePost);






 module.exports = router;