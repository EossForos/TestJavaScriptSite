import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, ListGroupItem, Media, Row} from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.worldvectorlogo.com/logos/javascript.svg"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.worldvectorlogo.com/logos/javascript.svg"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.worldvectorlogo.com/logos/javascript.svg"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.worldvectorlogo.com/logos/javascript.svg"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroupItem>Html/CSS</ListGroupItem>
                                <ListGroupItem>JavaScript</ListGroupItem>
                                <ListGroupItem>Python</ListGroupItem>
                                <ListGroupItem>Ruby</ListGroupItem>
                                <ListGroupItem>Dart</ListGroupItem>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;