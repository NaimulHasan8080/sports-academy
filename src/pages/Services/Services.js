import React, { useEffect, useState } from 'react';
import ServicesSports from '../../Components/servicesSports/ServicesSports';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`./sports.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    console.log(services)
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                services.map(service => <ServicesSports service={service}></ServicesSports>)
            }
        </div>
    );
};

export default Services;