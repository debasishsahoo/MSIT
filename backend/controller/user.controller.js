const UserModel = require('../model/user.model');
const UserHelper = require('../util/User.util')
const HashHelper = require('../util/Hash.Util')
const JwtHelper = require('../util/Jwt.util');

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
        message: "User is Created! Congrats",
        user: sendData
      });
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      })
    }
    
  },
  signin: async (req, res, next) => {
    const { email, password } = req.body;

    try {
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
      const token = JwtHelper.LoginToken({
        email: olduser.email,
        id: olduser.id
      });
      res.status(200).json({
        message: "Sucessfully Login",
        user: olduser,
        token: token
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      })
    }










  },
  profileEdit: async (req, res, next) => {
    const { id } = req.params
    const { name, mobile } = req.body

    try {
      if (!UserHelper.ValidId(id) && !UserHelper.ValidUser({ _id: id })) {
        return res.status(404).json({
          message: 'User Not Found'
        })
      }
      const UpdateProfile = {
        name, mobile, _id: id
      }
      await UserModel.findByIdAndUpdate(id, UpdateProfile, { new: true });
      res.status(200).json({
        message: `User with id:${id} is Updated`,
        user: UpdateProfile
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      })
    }


  },
  profileDelete: async (req, res, next) => {
    const { id } = req.params
    try {
      if (!UserHelper.ValidId(id) && !UserHelper.ValidUser({ _id: id })) {
        return res.status(404).json({
          message: 'User Not Found'
        })
      }

      await UserModel.findByIdAndDelete(id);
      res.status(202).json({
        message: `User with id:${id} is Deleted`,
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      })
    }

  },
  profileView: async (req, res, next) => {
    const { id } = req.params
    try {
      if (!UserHelper.ValidId(id) && !UserHelper.ValidUser({ _id: id })) {
        return res.status(404).json({
          message: 'User Not Found'
        })
      }

      const SingleUser = await UserModel.findById(id);
      res.status(202).json({
        message: `User with id:${id} is Found`,
        user: SingleUser
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      })
    }

  },
};

module.exports = UserController;
