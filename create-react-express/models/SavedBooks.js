// This will hold the model for the books in the mongoose database 
const mongoose = require("mongoose"); 
const Schema =  mongoose.Schema; 

const bookSchema = new Schema({
    
}); 

const SavedBooks = mongoose.model("SavedBooks", bookSchema); 

module.exports = SavedBooks; 
