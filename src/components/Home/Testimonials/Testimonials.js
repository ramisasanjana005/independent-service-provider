import React, {useState, useEffect} from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);


    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }
        , [])

    return (
        <div className="testimonials-title">
            <h1>Testimonials</h1>
            <div className="testimonials-container">
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    >
                    </Testimonial>)
                }
            </div>
        </div>

    );
};

export default Testimonials;