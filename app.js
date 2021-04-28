const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


require('dotenv/config');

const app = express();

app.use(bodyParser.json());
//Import Routers

const postRoute = require('./routes/posts');

app.use('/posts', postRoute)

//Routes

app.get('/', (req, res) => {
        res.send("Merhaba Dunya")
})

//Connect to DB db ye baglanma

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,
    useUnifiedTopology: true},
    () => console.log('connect to db')
)

//Listening

app.listen(3000)