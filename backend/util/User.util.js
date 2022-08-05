const mongoose = require('mongoose');
const UserModel = require('../model/user.model');


const UserHelper = {
    ValidId: (id) => {
        return mongoose.Types.ObjectId.isValid(id)
    },
    ValidUser: async (Userobj) => {
        return await UserModel.findOne(Userobj)
    }

}
module.exports = UserHelper