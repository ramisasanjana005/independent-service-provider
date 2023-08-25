import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {name, img, description, price} = service;


    return (
        <div className="service-container">
            <img className="service-img" src={img}/>
            <h2>{name}</h2>
            <p>BDT {price}</p>
            <p>{description}</p>
            <Link to="/checkout" className="btn btn-primary">Book {name}</Link>
        </div>
    );
};

export default Service;