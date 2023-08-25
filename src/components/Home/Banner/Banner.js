import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {

        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

    return (
        <div className="banner-container">

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://img.freepik.com/free-photo/close-up-view-male-hand-holding-professional-camera-street_8353-6510.jpg?t=st=1650223333~exp=1650223933~hmac=a18f980f25103ba2a222e1fe82f7cdd1efec366bb7c518fbad4b201d07402a25"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Pictures with unforgettable memories</h3>
                        <p>I promise you to give you amazing results!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://img.freepik.com/free-photo/professional-camera-blurred_169016-10249.jpg?t=st=1650223333~exp=1650223933~hmac=65836b43714bc499a0ff8ff1e99571f91467a65ef2ceb53ee535b12626f01693"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Thousand stories behind the photos</h3>
                        <p>You will get bunch of photos explaining thousand breathtaking stories.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://img.freepik.com/free-photo/professional-movie-camera-lens-movie-set_1268-15950.jpg?t=st=1650223333~exp=1650223933~hmac=5d467d4eb943113d818b0e10575cf060b10464a2e1b778bab84a08a9c275bc63"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Every moment counts</h3>
                        <p>
                            No matter how small or huge the moment is, I am here for you to capture it.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    );
};

export default Banner;