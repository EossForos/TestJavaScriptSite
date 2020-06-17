import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import beachImg from '../assets/beatch.jpg'
import beach_2Img from '../assets/beatch_2.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ beachImg }
                        alt="Beach"
                    />
                    <Carousel.Caption>
                        <h3>
                            Beach Image
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ beach_2Img }
                        alt="Beach"
                    />
                    <Carousel.Caption>
                        <h3>
                            Beach Image
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;