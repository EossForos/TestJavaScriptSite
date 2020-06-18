import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container, CardDeck, Card, Button} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://www.melvinlau.com/wp-content/uploads/2019/10/annie-spratt-QckxruozjRg-unsplash-1024x683.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://gds.blog.gov.uk/wp-content/uploads/sites/60/2016/09/mob-programming.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://tenoblog.com/wp-content/uploads/2017/03/employee.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        );
    }
}

export default Home;