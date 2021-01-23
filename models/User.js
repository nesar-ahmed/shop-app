const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // Schema constructor

const userSchema = new Schema({
    firstname: {
        type: String,
        maxlength: 50,
        required: true,
    },
    lastname: {
        type: String,
        maxlength: 50,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: 1
    },
    role: {
        type: Number,
        default: 0,
    },
    token: {
        type: String,
    },
    tokenExpire: {
        type: Number
    },
});

const User = mongoose.model('User', userSchema);
module.exports = { User };