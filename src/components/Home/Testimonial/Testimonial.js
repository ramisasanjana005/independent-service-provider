import React from 'react';
import './Testimonial.css';

const Testimonial = ({ testimonial }) => {
    const { name, img, comment } = testimonial;

    return (

            <div className="testimonial-container">
            <img className="testimonial-img" src={img} />
                <h3>{name}</h3>
                <p>{comment}</p>
            </div>
    );
};

export default Testimonial;