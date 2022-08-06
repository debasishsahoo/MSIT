const UserModel = require('../model/user.model')
const BlogModel = require('../model/blog.model')
const UserHelper = require('../util/User.util');
const HashHelper = require('../util/Hash.Util')
const JwtHelper = require('../util/Jwt.util')

const AdminController = {
  AllUserList: async (req, res, next) => {
    try {
      const AllUser = await UserModel.find();
      res.status(202).json({
        message: `Number of User:${AllUser.length}`,
        User: AllUser,
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  SingleUser: async (req, res, next) => {
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
  BlockUser: async (req, res, next) => {
    const { id } = req.params
    let { isActive } = req.body
    try {
      if (!UserHelper.ValidId(id) && !UserHelper.ValidUser({ _id: id })) {
        return res.status(404).json({
          message: 'User Not Found'
        })
      }
      isActive = isActive === '1' ? true : false
      const BlockUser = {
        isActive, _id: id
      }
      await UserModel.findByIdAndUpdate(id, BlockUser, { new: true });
      res.status(200).json({
        message: `User with id:${id} is Blocked`,
        user: BlockUser
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      })
    }
  },
  AllBlogList: async (req, res, next) => {
    try {
      const AllBlog = await BlogModel.find();
      res.status(202).json({
        message: `Number of Post:${AllBlog.length}`,
        Blog: AllBlog,
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  SingleBlogView: async (req, res, next) => {
    const { id } = req.params;
    try {
      if (!UserHelper.ValidId(id)) {
        return res.status(404).json({
          message: `No Blog with this id :${id} found`,
        });
      }

      const SingleBlog = await BlogModel.findById(id);
      res.status(202).json({
        message: `Post with id:${id} is found`,
        Blog: SingleBlog,
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  SingleUserBlog: async (req, res, next) => {
    const { id } = req.params;
    try {
      if (!UserHelper.ValidId(id) && !UserHelper.ValidUser({ _id: id })) {
        return res.status(404).json({
          message: `No Blog with this id :${id} found`,
        })
      }
      const SingleUserBlog = await BlogModel.find({ autherid: id })
      res.status(200).json({
        message: `Id:${id},   Number of Post:${SingleUserBlog.length}`,
        Blog: SingleUserBlog
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  BlockBlog: async (req, res, next) => {
    const { id } = req.params
    let { isActive } = req.body
    try {
      if (!UserHelper.ValidId(id)) {
        return res.status(404).json({
          message: 'Blog Not Found'
        })
      }
      isActive = isActive === '1' ? true : false
      const BlockBlog = {
        isActive, _id: id
      }
      await BlogModel.findByIdAndUpdate(id, BlockUser, { new: true });
      res.status(200).json({
        message: `Blog with id:${id} is Blocked`,
        user: BlockBlog
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      })
    }
  },
  Signin: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const olduser = await UserHelper.ValidAdmin({ email });
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
};

module.exports = AdminController;
