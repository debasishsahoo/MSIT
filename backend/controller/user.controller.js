const UserModel = require('../model/user.model');

const UserController = {
  signup: async (req, res, next) => { res.send('Working') },
  signin: async (req, res, next) => { res.send('Working') },
  profileEdit: async (req, res, next) => { res.send('Working') },
  profileDelete: async (req, res, next) => { res.send('Working') },
  profileView: async (req, res, next) => { res.send('Working') },
};

module.exports = UserController;
