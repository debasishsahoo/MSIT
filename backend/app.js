const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();


const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

//Db Connection Method
async function connect() {
    const dbuser = process.env.DBUSER;
    const dbpass = process.env.DBPASS;
    const dbname = process.env.DBNAME;
    //connection string
    const url = `mongodb+srv://${dbuser}:${dbpass}@cluster0.lttvi.mongodb.net/${dbname}?retryWrites=true&w=majority`;

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

