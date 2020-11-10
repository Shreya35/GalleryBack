const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {type:String},
    published: {type:Number}
})

const bookModel = mongoose.model('book', bookSchema)

module.exports = bookModel