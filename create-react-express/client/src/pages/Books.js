import React, { Component } from "react";
import SearchCard from "../components/SearchCard";
import SearchResult from "../components/SearchResult";
import BookItemCard from "../components/BookItemCard";
import SaveCard from "../components/SaveResult";
import API from "../utils/API";


class Books extends Component {
    
    state= { 
        results: [],
        savedBooks: [],
        bookSearch: ""
    }; 

    //On Button click for searching books 
    handleSearch = event =>{

        event.preventDefault(); 

        if(this.state.bookSearch)
        {
            API.searchBooks( this.state.bookSearch)
                .then( res => 
                    this.setState({
                    results: res.data.items
                })  
                // console.log("reesponse", res.data.items)
                )
                .catch(err => console.log(err));
        }
    }
      
    handleInputChange = event =>{

        const value = event.target.value; 

        this.setState({
            bookSearch : value
        })
    }

  render() {
    return (
      <div>
        <SearchCard 
            value={this.state.bookSearch}
            onChange={this.handleInputChange}
            onClick={this.handleSearch}
        />
        
        {window.location.pathname ===  "/" ?  
            <SearchResult>
                {this.state.results.length ? (
                
                    this.state.results.map(book => {
                        return (
                            <BookItemCard
                                key = {book.id}
                                title={book.volumeInfo.title}
                                author={(book.volumeInfo.authors) ? (book.volumeInfo.authors[0]) : ("Anonymous")}
                                href={book.volumeInfo.previewLink}
                                thumbnail={(book.volumeInfo.imageLinks) ? (book.volumeInfo.imageLinks.thumbnail) : ("http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg")}
                                description={book.volumeInfo.description}
                            /> 
                        ) 
                    })
                ) : (
                    <h3>No Results to Display</h3>  
                )}  
            </SearchResult>
        : 
            <SaveCard>
                {this.state.savedBooks.length ? (
                
                this.state.savedBooks.map(book => {
                    return (
                        <BookItemCard
                            key = {book.id}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors[0]}
                            href={book.volumeInfo.previewLink}
                            thumbnail={(book.volumeInfo.imageLinks) ? (book.volumeInfo.imageLinks.thumbnail) : ("http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg")}
                            description={book.volumeInfo.description}
                        /> 
                    ) 
                })
                ) : (
                    <h3>No Saved Books</h3>  
                )}  
            </SaveCard>
        }
        
      </div>
    )
  }

}

export default Books;