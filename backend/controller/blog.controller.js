const BlogModel = require('../model/blog.model');

const BlogController = {
  createBlog: async (req, res, next) => { res.send('Working') },
  editBlog: async (req, res, next) => { res.send('Working') },
  deleteBlog: async (req, res, next) => { res.send('Working') },
  singleBlogView: async (req, res, next) => { res.send('Working') },
  singleUserBlog: async (req, res, next) => { res.send('Working') },
  allBlogList: async (req, res, next) => { res.send('Working') },
};

module.exports = BlogController;
