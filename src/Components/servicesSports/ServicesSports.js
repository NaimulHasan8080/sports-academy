import React from 'react';

const ServicesSports = (props) => {
    console.log(props.ServicesSports);
    const { title } = props.ServicesSports;
    return (
        <div class="col">
            <div class="card">
                <img src="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSports;