import { Router } from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js';
const router = Router();

// Get all posts
router.get('/', getPosts) 

// Get One Post
router.get('/:id', getPost) 


// Create a New Post
router.post('/', createPost);

// Update a Post
router.put('/:id', updatePost);

// Delete a Post
router.delete('/:id', deletePost);


export default router