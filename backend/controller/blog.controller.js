const BlogModel = require('../model/blog.model');
const UserHelper = require('../util/User.util');

const BlogController = {
  createBlog: async (req, res, next) => {
    const Blogdata = req.body;
    const SendData = new BlogModel({
      ...Blogdata,
      createdAt: new Date().toISOString(),
    });
    try {
      await SendData.save();
      res.status(200).json({
        message: 'New Blog is Created',
        blog: SendData,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  editBlog: async (req, res, next) => {
    const { id } = req.params;
    const { title, body, image } = req.body;
    try {
      if (!UserHelper.ValidId(id)) {
        return res.status(404).json({
          message: `No Blog with this id :${id} found`,
        });
      }
      const UpdateBlog = { title, body, image, _id: id };
      await BlogModel.findByIdAndUpdate(id, UpdateBlog, { new: true });
      res.status(200).json({
        message: `Blog With id:${id} is Updated`,
        post: UpdateBlog,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  deleteBlog: async (req, res, next) => {
    const { id } = req.params;
    try {
      if (!UserHelper.ValidId(id)) {
        return res.status(404).json({
          message: `No Blog with this id :${id} found`,
        });
      }

      await BlogModel.findByIdAndDelete(id);
      res.status(202).json({
        message: `Post with id:${id} is Deleted`
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
  singleBlogView: async (req, res, next) => {
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
  singleUserBlog: async (req, res, next) => {
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
  allBlogList: async (req, res, next) => {
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
};

module.exports = BlogController;
