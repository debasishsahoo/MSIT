const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

/////////////////Router/////////////
const UserRoute = require('./routes/user.route')
const BlogRoute = require('./routes/blog.route')
const AdminRoute = require('./routes/admin.route')
///////////////////////////////////

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;
const app = express();


//-------------------Use------------------------//
app.use(cors())
app.use(express.json())
app.use('/user', UserRoute)
app.use('/blog', BlogRoute)
app.use('/admin', AdminRoute)
//-------------------x-----------------------//





//Db Connection Method
async function connect() {
    const dbuser = process.env.DBUSER;
    const dbpass = process.env.DBPASS;
    const dbname = process.env.DBNAME;
    //connection string
    const url = `mongodb+srv://${dbuser}:${dbpass}@cluster0.lttvi.mongodb.net/${dbname}?retryWrites=true&w=majority`;
//mongodb+srv://sourav123:7e3tcym41yYCJ28N@cluster0.lttvi.mongodb.net/debtest?retryWrites=true&w=majority
    try {
        await mongoose.connect(url);
        console.log('DB Connection Done.......')
    }
    catch (err) {
        console.log(err)
        console.log(`Error in DB Connection,` + JSON.stringify(err, undefined, 2));
        process.exit();
    }
}


app.listen(port, host, async () => {
    //first DB Connection
    await connect();
    //Second App connection
    console.log(`The App lisning at http://${host}:${port}`)
});

