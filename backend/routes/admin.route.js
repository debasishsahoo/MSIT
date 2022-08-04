const express = require('express');
const router = express.Router();

const AdminController = require('../controller/admin.controller')

router.get('/user', AdminController.AllUserList);
router.get('/user/:id', AdminController.SingleUser);
// router.put('/user/:id', AdminController.BlockUser);
router.get('/blog', AdminController.AllBlogList);
router.get('/blog/:id', AdminController.SingleBlogView);
router.get('blog/user/:id', AdminController.SingleUserBlog);
// router.put('/blog/:id', AdminController.BlockBlog);
router.post('/signin', AdminController.Signin)

module.exports = router