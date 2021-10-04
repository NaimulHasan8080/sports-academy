import React from 'react';

const ServicesSports = (props) => {
    const { title, img } = props.service;
    return (
        <div class="col-md-4">
            <div class="card">
                <img src={img} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSports;