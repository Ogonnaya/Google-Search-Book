// This will hold the model for the books in the mongoose database 
const mongoose = require("mongoose"); 
const Schema =  mongoose.Schema; 

const bookSchema = new Schema({
    title: {type: String , required: true},
    author: {type: String, required: true}, 
    description: {type: String, required: true}, 
    link_href: {type: String, required: true}, 
    thumbnail: {type:String , required: true}
}); 

const SavedBooks = mongoose.model("SavedBooks", bookSchema); 

module.exports = SavedBooks; 
