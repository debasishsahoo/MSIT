const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
dotenv.config();
const hash_key = parseInt(`${process.env.HASH_KEY}`);

//signup
//1234=>(1234,23)=>qwodhqwdkqpwibndoiw2qjdf

//login
//123=>(123)=>{123,qwodhqwdkqpwibndoiw2qjdf} =>false

const HashHelper = {
    HasedPassword: async (password) => {
        return await bcrypt.hash(password, hash_key)
    },
    isPasswordCorrect: async (userpass, dbpass) => {
        return await bcrypt.compare(userpass, dbpass)
    }
}
module.exports = HashHelper