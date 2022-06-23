import { Card, Button, Container, Row } from "react-bootstrap"
const SingleBook = ({ book }) => {
    return (
        <Container>
            <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                           {book.category}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Row>
        </Container>
    )
}

export default SingleBook