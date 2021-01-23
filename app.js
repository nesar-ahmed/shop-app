const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


const app = express();

const users = require('./routes/api/users');
const mongoUri = require('./config/keys').mongoUri


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Connect to our app with mongodb
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.log(err));


app.use('/api/users', users);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})