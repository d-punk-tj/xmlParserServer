const { json, response } = require('express');
const Request = require('request');

const getAllPost = (request, response) => {
    try {
        console.log("getAllPost : working");
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const getSinglePost = (request, response) => {
    try {
        console.log("getSinglePost : working");
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const createPost = (request, response) => {
    try {
        console.log("createPost : working");
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const updatePost = (request, response) => {
    try {
        console.log("updatePost : working");
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const deletePost = (request, response) => {
    try {
        console.log("deletePost : working");
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