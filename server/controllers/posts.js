import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

// exporting a function for use in another file
export const getPosts = async (req, res) => {
    try {
        // finding things in a model takes time, so the function should be made async
        const postMessages = await PostMessage.find();

        //console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        // https://www.restapitutorial.com/httpstatuscodes.html

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    // .json returns a promise to process updatedPost as JSON. the promise will eventually
    // evaluate to success or failure.
    res.json(updatedPost);

}