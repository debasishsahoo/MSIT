const UserModel = require('../model/user.model');

const UserController = {
  signup: async (req, res, next) => {
    const { name, email, mobile, password } = req.body;

    try {
      const sendData = await UserModel.create({
        name, email, mobile, password
      })
      res.status(201).json({
        msg: "User is Created! Congrats",
        user: sendData
      });
    }
    catch (error) {
      res.status(404).json({
        msg: error.message,
      })
    }







  },
  signin: async (req, res, next) => { res.send('Working') },
  profileEdit: async (req, res, next) => { res.send('Working') },
  profileDelete: async (req, res, next) => { res.send('Working') },
  profileView: async (req, res, next) => { res.send('Working') },
};

module.exports = UserController;
