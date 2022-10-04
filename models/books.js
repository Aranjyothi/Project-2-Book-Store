const mongoose = require('mongoose')


const Schema = mongoose.Schema
const booksSchema = new Schema({
    name:{type: String, required:true},
    author:{type: String, required:true},
    type:{type:String,required:true},
    bookIsAvailable:Boolean
})
const Book = mongoose.model('Book', booksSchema)

module.exports = Book;