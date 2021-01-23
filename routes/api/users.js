const express = require('express');
const router = express.Router();
// import our user model from models folder
const {User} = require('../../models/User');


router.post('/register', (req, res) => {
    console.log('working');
    const user = new User(req.body);
    user.save();
    res.status(200).json(user);
});


 module.exports = router;