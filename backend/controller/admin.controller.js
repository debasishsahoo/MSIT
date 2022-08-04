const AdminModel = require('../model/blog.model');

const AdminController = {
  AllUserList: async (req, res, next) => { res.send('Working') },
  SingleUser: async (req, res, next) => { res.send('Working') },
  BlockUser: async (req, res, next) => { res.send('Working') },
  AllBlogList: async (req, res, next) => { res.send('Working') },
  SingleBlogView: async (req, res, next) => { res.send('Working') },
  SingleUserBlog: async (req, res, next) => { res.send('Working') },
  BlockUserBlog: async (req, res, next) => { res.send('Working') },
  Signin: async (req, res, next) => { res.send('Working') },
};

module.exports = AdminController;
