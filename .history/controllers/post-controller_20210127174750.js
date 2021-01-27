const { ObjectID } = require('mongodb');
const postModel = require('../models/post-model');


const getAllPost = async(request, response) => {
    try {
        const post = await postModel.find({});
        response.send(post);
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const getSinglePost = async(request, response) => {
    try {
        console.log(  request.params.id);
        const post = await postModel.findOne({_id: ObjectID(request.params.id)});
        response.send(post);
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const createPost = async(request, response) => {
    try {
        const post = new postModel(request.body);
        await post.save();
        response.send(post);
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const updatePost = async(request, response) => {
    try {
        postId = ObjectID(request.params.id);
        postData = request.body;
        console.log(postData);
        post = await new Promise( ( resolve, reject ) => {
            postModel.updateOne( { _id: postId }, postData, {new: true }, ( error, obj ) => {
                if( error ) {
                    console.error( JSON.stringify( error ) );
                    return reject( error );
                }
    
                resolve( obj );
            });
        })
        // const post =  await postModel.findByIdAndUpdate(ObjectID(request.params.id), request.body, {new: true}, function(err,doc){
        //     if(doc){
        //         response.send(doc);
        //         console.log(doc);
        //     }
               
        // })
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const deletePost = async(request, response) => {
    try {
        const post = await postModel.findByIdAndDelete(request.params.id)
        if (!post) res.status(404).send("No item found");
        response.status(200).send()
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};


const product = {
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
};

module.exports = product;