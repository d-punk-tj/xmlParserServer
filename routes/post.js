const express = require('express');
const router = express.Router();

const { 
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
 } = require('../controllers/post-controller');


 router.get('/posts', getAllPost);
 router.get('/post/:id', getSinglePost);
 router.post('/post', createPost);
 router.put('/post/:id', updatePost);
 router.delete('/post/:id', deletePost);






 module.exports = router;