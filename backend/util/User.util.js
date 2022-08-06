const mongoose = require('mongoose');
const UserModel = require('../model/user.model');
const AdminModel = require('../model/admin.model');


const UserHelper = {
    ValidId: (id) => {
        return mongoose.Types.ObjectId.isValid(id)
    },
    ValidUser: async (Userobj) => {
        return await UserModel.findOne(Userobj)
    },
    ValidAdmin: async (Adminobj) => {
        return await AdminModel.findOne(Adminobj)
    }


}
module.exports = UserHelper