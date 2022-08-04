const express = require('express');
const router = express.router();

const BlogController = require('../controller/blog.controller')

router.post('/', BlogController.createBlog)
router.put('/:id', BlogController.editBlog)
router.delete('/:id', BlogController.deleteBlog)
router.get('/:id', BlogController.singleBlogView)
router.get('/user/:id', BlogController.singleUserBlog)
router.get('/', BlogController.allBlogList)


module.exports = router