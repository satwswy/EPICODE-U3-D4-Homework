import React from "react";
import SingleBook from "./SingleBook";
import { Form } from "react-bootstrap"
import FilterBookList from "./FilterBookList";

class BookList extends React.Component {

    state = {
        searchQuery: ''
    }

    render() {
        return (
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Search here" 
                    value={this.state.searchQuery}
                    onChange={e=> this.setState({searchQuery: e.target.value})}
                    
                    />
                   
                 </Form.Group>
                {/*this.props.books.map((current) => {
                    return <SingleBook book={current} />
                })} */}
                <FilterBookList query={this.state.searchQuery} books={this.props.books}/>
            </div>
        )
    }
}
export default BookList