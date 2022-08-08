const express = require('express');
const router = express.Router();

const BlogController = require('../controller/blog.controller')
const authUser = require('../middleware/UserAuth')

router.post('/', authUser, BlogController.createBlog)
router.put('/:id', authUser, BlogController.editBlog)
router.delete('/:id', authUser, BlogController.deleteBlog)
router.get('/:id', BlogController.singleBlogView)
router.get('/user/:id', authUser, BlogController.singleUserBlog)
router.get('/', BlogController.allBlogList)


module.exports = router