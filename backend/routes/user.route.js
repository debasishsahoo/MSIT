const express = require('express');
const router = express.router();

const UserController = require('../controller/user.controller')

router.post('/signup', UserController.signup)
router.post('/signin', UserController.signin)
router.put('/:id', UserController.profileEdit)
router.get('/:id', UserController.profileView)
router.delete('/:id', UserController.profileDelete)

module.exports = router