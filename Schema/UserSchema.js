const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String},
    password: {type: String},
    role: {type: String}
}
)

const userModel = mongoose.model('user', userSchema)

module.exports = userModel