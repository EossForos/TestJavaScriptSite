import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import { Tab, Nav, Row, Col } from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant={"pills"} className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> Design </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Team </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> Programming </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth"> Frameworks </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth"> Libraries </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm="9">
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" />
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://sourceforge.net/blog/wp-content/uploads/2018/01/shutterstock_496474054.jpg" />
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://cdn-media-1.freecodecamp.org/images/0*lT-xzWoNJwX_yPIi" />
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://miro.medium.com/max/900/1*aWnRHAukJGaB2jVFY5iZCg.jpeg" />
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://itterritory.net/wp-content/uploads/2019/10/10-Programming-Languages-of-2020-600x300.jpg" />
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;