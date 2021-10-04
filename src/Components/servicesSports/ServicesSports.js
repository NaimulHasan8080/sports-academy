import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSports.css'

const ServicesSports = (props) => {
    console.log(props.service);
    const { title, img, coach, camp, instruction, total } = props.service;
    return (
        <div className="service-container text-center my-5">
            <img className="service-img m-4 mx-auto" src={img} />
            <h4>{title}</h4>
            <h4>coach: {coach}</h4>
            <h4>camp : {camp}</h4>
            <h4>{instruction}</h4>
            <h4>Total-admit : {total}</h4>
            <Link to={`/detail/${title}`}><button className="btn-regular mx-auto m-2">Details</button></Link>
        </div>
    );
};

export default ServicesSports;