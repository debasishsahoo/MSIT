const express = require('express');
const router = express.Router();

const AdminController = require('../controller/admin.controller')
const authAdmin = require('../middleware/AdminAuth')

router.get('/user', authAdmin, AdminController.AllUserList);
router.get('/user/:id', authAdmin, AdminController.SingleUser);
router.put('/user/:id', authAdmin, AdminController.BlockUser);
router.get('/blog', authAdmin, AdminController.AllBlogList);
router.get('/blog/:id', authAdmin, AdminController.SingleBlogView);
router.get('/blog/user/:id', authAdmin, AdminController.SingleUserBlog);
router.put('/blog/:id', authAdmin, AdminController.BlockBlog);
router.post('/signin', AdminController.Signin)
router.post('/signup', AdminController.Signup)

module.exports = router



//Super Admin ->Devloper

//Admin

//User