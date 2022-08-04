const express = require('express');
const router = express.router();

const AdminController = require('../controller/admin.controller')

router.get('/user', AdminController.AllUserList);
router.get('/user/:id', AdminController.SingleUser);
router.patch('/user/:id', AdminController.BlockUser);
router.get('/blog', AdminController.AllBlogList);
router.get('/blog/:id', AdminController.SingleBlogView);
router.get('blog/user/:id', AdminController.SingleUserBlog);
router.patch('/blog/:id', AdminController.BlockBlog);
router.post('/signin', AdminController.Signin)

module.exports = router