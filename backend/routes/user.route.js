const express = require('express');
const router = express.Router();

const UserController = require('../controller/user.controller')
const authUser = require('../middleware/UserAuth')

router.post('/signup', UserController.signup)
router.post('/signin', UserController.signin)
router.put('/:id', authUser, UserController.profileEdit)
router.get('/:id', authUser, UserController.profileView)
router.delete('/:id', authUser, UserController.profileDelete)

module.exports = router