import React, { Component } from 'react'
import { Card, Form, Button } from "react-bootstrap"




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
                    <Form>
                        <Form.Group>
                            <Form.Label>Write your Comments here</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                as="select"

                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                ) : (
                    <h4>No comments to display </h4>
                )}
            </div>
        )
    }
}

export default SingleBook