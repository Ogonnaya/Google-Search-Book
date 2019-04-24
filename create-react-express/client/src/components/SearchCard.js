import React from "react";

function SearchCard() {
    return (
        <div className="container mt-3">
            <div className="card">
                <h5 className="card-header">Book Search</h5>
                <div className="card-body">
                    <form>
                        <div class="form-group">
                            <label for="book-search">Book</label>
                            <input type="text" class="form-control" id="book-search" placeholder="Harry Potter" required/>
                        </div>
                    </form>
                    <button className="btn btn-sm float-right btn-info" type="submit">Search</button>
                </div>
            </div>
        </div>
    )

}

export default SearchCard;