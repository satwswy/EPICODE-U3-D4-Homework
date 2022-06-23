import React, { Component } from 'react'
import { Card, Form, Button } from "react-bootstrap"
import CommentArea from './CommentArea'




class SingleBook extends Component {
    state = {
        selected: false
    }
    render() {
        return (
            <div>

                <Card onClick={() => { this.setState({ selected: !this.state.selected }) }} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>
                            {this.props.book.category}
                        </Card.Text>
                    </Card.Body>
                </Card>
                {this.state.selected ? (
                    <CommentArea />
                ) : (
                    <h4>No comments to display </h4>
                )}
            </div>
        )
    }
}

export default SingleBook