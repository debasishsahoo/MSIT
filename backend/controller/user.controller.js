const UserModel = require('../model/user.model');
const UserHelper = require('../util/User.util')
const HashHelper = require('../util/Hash.Util')

const UserController = {
  signup: async (req, res, next) => {
    const { name, email, mobile, password } = req.body;

    try {
      const olduser = await UserHelper.ValidUser({ email });
      if (olduser) {
        return res.status(400).json({
          message: "Email alrady Exist",
        });
      }

      const HasedPassword = await HashHelper.HasedPassword(password);

      const sendData = await UserModel.create({
        name, email, mobile, password: HasedPassword
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
  signin: async (req, res, next) => {
    const { email, password } = req.body;
    const olduser = await UserHelper.ValidUser({ email });
    if (!olduser) {
      return res.status(400).json({
        message: "Email Dose not Exist",
      });
    }
    const iscorrectPassword = await HashHelper.isPasswordCorrect(password, olduser.password)
    if (!iscorrectPassword) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    res.status(200).json({
      message: "Sucessfully Login",
      user: olduser,
    })


  },
  profileEdit: async (req, res, next) => { res.send('Working') },
  profileDelete: async (req, res, next) => { res.send('Working') },
  profileView: async (req, res, next) => { res.send('Working') },
};

module.exports = UserController;
