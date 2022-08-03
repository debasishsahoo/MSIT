const express = require('express');
const dbconnect = require('./db')
const dotenv = require('dotenv')
dotenv.config();


const port = process.env.PORT;
const host = process.env.HOST;

const app = express();


app.listen(port, host, async () => {
    //first DB Connection
    await dbconnect;
    //Second App connection
    console.log(`The App lisning at http://${host}:${port}`)
});

