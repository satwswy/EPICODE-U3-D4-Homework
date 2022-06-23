import React, { Component } from 'react'

export default class AddComment extends Component {
  render() {
    return (
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
    )
  }
}
