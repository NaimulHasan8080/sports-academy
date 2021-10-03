import React from 'react';
import { Link } from 'react-router-dom';
import './Sport.css'

const Sport = (props) => {
    console.log(props.sport)
    const { img, title, coach, instruction } = props.sport
    return (
        <div class="col my-5">
            <div class="card h-100">
                <img src={img} className="card-img mx-auto m-2" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <h5>Coach : {coach}</h5>
                    <p class="card-text">{instruction}</p>
                    <Link to="/details"><button className="btn btn-warning">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Sport;