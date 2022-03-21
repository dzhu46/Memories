import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    // each post will have to have the following:

    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

// we are exporting a Mongoose model, and commands can be run on instances of this model
export default PostMessage;