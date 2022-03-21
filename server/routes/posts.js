import express from 'express';

// importing a function that we name getPosts
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

// http://localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);

export default router;