import React, { useEffect, useState } from 'react';
import Sport from '../../Components/Sport/Sport';
import './Home.css'

const Home = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        //call api
        fetch(`./home.json`)
            .then(res => res.json())
            .then(data => setSports(data))
    }, []);
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                sports.map(sport => <Sport
                    key={sport.title}
                    sport={sport}></Sport>)
            }
        </div>
    );
};

export default Home;