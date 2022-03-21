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