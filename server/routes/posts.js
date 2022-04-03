import express from 'express';

// importing a function that we name getPosts
import { getPosts, createPost, updatePost } from '../controllers/posts.js'

const router = express.Router();

// http://localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);
// patch is used for updating existing documents, ':' indicates dynamic
router.patch('/:id', updatePost);

export default router;