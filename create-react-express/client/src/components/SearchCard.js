import React from "react";

function SearchCard(props) {
    return (
        <div className="container mt-3">
            <div className="card">
                <h5 className="card-header">Book Search</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label >Book</label>
                            <input type="text" className="form-control" value={props.value} onChange={props.onChange} placeholder="Harry Potter" required/>
                        </div>
                    </form>
                    <button className="btn btn-sm float-right btn-info" type="submit" onClick={props.onClick}>Search</button>
                </div>
            </div>
        </div>
    )

}

export default SearchCard;