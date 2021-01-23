const express = require('express');
const mongoose = require('mongoose');


const app = express();


// The url of mongodb database
const url = 'mongodb://localhost:27017/shop-app';

// Connect to our app with mongodb
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log())
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello from express');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})