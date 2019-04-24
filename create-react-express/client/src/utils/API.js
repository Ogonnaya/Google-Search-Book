import axios from "axios";

export default {
  // call to the Google Book API when searching for a book
  searchBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  // display the saved books from our database
  getBooks: function(id) {
    return axios.get("/api/books/" );
  },
  // delete a saved book from our database
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // save the book in our database
  saveBook: function() {
    return axios.post("/api/books", bookData);
  }
};
