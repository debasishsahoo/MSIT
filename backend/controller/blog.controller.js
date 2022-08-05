const BlogModel = require('../model/blog.model');

const BlogController = {
  createBlog: async (req, res, next) => {
    const Blogdata = req.body
    const SendData = new BlogModel({
      ...Blogdata,
      createdAt: new Date().toISOString()
    });
    try {
      await SendData.save();
      res.status(200).json({
        message: 'New Blog is Created',
        blog: SendData
      });
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }


  },
  editBlog: async (req, res, next) => { res.send('Working') },
  deleteBlog: async (req, res, next) => { res.send('Working') },
  singleBlogView: async (req, res, next) => { res.send('Working') },
  singleUserBlog: async (req, res, next) => { res.send('Working') },
  allBlogList: async (req, res, next) => { res.send('Working') },
};

module.exports = BlogController;
